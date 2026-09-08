"""Local dev server for the quiz, with live reload.

    python serve.py            -> http://localhost:5173/
    python serve.py 8000       -> a different port

Edit content.js, hit save, and the open browser tab refreshes itself. No
reloading by hand, hard or otherwise.

Why a server at all: the page uses ES modules, which browsers refuse to load
over file://, so the folder has to be served over http.

This is only for editing locally. It has nothing to do with how the quiz is
deployed - as a static folder, any host will do.
"""

import json
import sys
import threading
import time
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 5173
ROOT = Path(__file__).parent
WATCH = ("*.js", "*.html", "*.css")
POLL_SECONDS = 0.4


def fingerprint():
    """A single value that changes whenever any watched file is saved."""
    stamps = []
    for pattern in WATCH:
        for path in ROOT.glob(pattern):
            try:
                stamps.append((path.name, path.stat().st_mtime_ns))
            except OSError:
                pass
    return hash(tuple(sorted(stamps)))


class Watcher:
    """Polls the folder and wakes up every waiting browser tab on a change."""

    def __init__(self):
        self.version = fingerprint()
        self.changed = threading.Condition()
        threading.Thread(target=self._loop, daemon=True).start()

    def _loop(self):
        while True:
            time.sleep(POLL_SECONDS)
            current = fingerprint()
            if current != self.version:
                self.version = current
                with self.changed:
                    self.changed.notify_all()
                print("  changed -> reloading open tabs")

    def wait(self, timeout):
        with self.changed:
            return self.changed.wait(timeout)


watcher = Watcher()


class Handler(SimpleHTTPRequestHandler):
    # ---- live reload endpoint -------------------------------------------
    # The page holds this request open; the server answers only once a file
    # has actually changed, and the page then reloads itself.
    def do_GET(self):
        if self.path.startswith("/__reload"):
            return self._wait_for_change()
        return super().do_GET()

    def _wait_for_change(self):
        changed = watcher.wait(timeout=25)  # answer periodically either way,
        try:                                # so proxies don't kill the request
            body = json.dumps({"changed": bool(changed)}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except (BrokenPipeError, ConnectionAbortedError):
            pass  # the tab was closed while waiting

    # ---- no caching, ever ------------------------------------------------
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Expires", "0")
        super().end_headers()

    def send_header(self, keyword, value):
        if keyword in ("Last-Modified", "ETag"):
            return
        super().send_header(keyword, value)

    def log_message(self, fmt, *args):
        if "__reload" in (args[0] if args else ""):
            return  # the waiting requests would drown out everything else
        super().log_message(fmt, *args)


handler = partial(Handler, directory=str(ROOT))

with ThreadingHTTPServer(("127.0.0.1", PORT), handler) as httpd:
    print(f"The Pacing Tree -> http://localhost:{PORT}/   (Ctrl+C to stop)")
    print("Live reload is on: save content.js and the tab refreshes itself.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nstopped")
