/* The essay's sections, in reading order. `page` is the route each one is
   rendered on; the sidebar links across pages, the pages filter by it. */
export const sectionMeta = [
  { slug: "01-introduction", id: "introduction", label: "Introduction", textClass: "text-light", page: "/" },
  { slug: "02-why-pace", id: "why-pace", label: "Why Pace?", textClass: "text-light", page: "/" },
  { slug: "03-pace-what", id: "pace-what", label: "Pace What?", textClass: "text-light", page: "/" },
  { slug: "04-pace-how", id: "pace-how", label: "Pace How?", textClass: "text-light", page: "/" },
  { slug: "05-then-what", id: "then-what", label: "Then What?", textClass: "text-dark antialiased", page: "/" },
  { slug: "06-conclusion", id: "conclusion", label: "Conclusion", textClass: "text-dark antialiased", page: "/" },
  {
    slug: "07-call-to-action",
    id: "call-to-action",
    label: "Call To Action",
    textClass: "text-dark antialiased",
    page: "/",
  },
  { slug: "08-appendices", id: "appendices", label: "Appendices", textClass: "text-dark antialiased", page: "/appendices" },
] as const;

export type SectionMeta = (typeof sectionMeta)[number];

export const navHref = (section: SectionMeta) =>
  section.page === "/" ? `/#${section.id}` : section.page;
