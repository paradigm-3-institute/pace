/* The essay's sections, in reading order. `number` is printed before the
   title in the heading and the sidebar; the appendices have none. `page`
   is the route each one is rendered on; the sidebar links across pages,
   the pages filter by it. */
export const sectionMeta = [
  { slug: "01-introduction", number: 1, id: "introduction", label: "Introduction", textClass: "text-light", page: "/" },
  { slug: "02-why-pace", number: 2, id: "why-pace", label: "Why Pace?", textClass: "text-light", page: "/" },
  { slug: "03-pace-what", number: 3, id: "pace-what", label: "Pace What?", textClass: "text-light", page: "/" },
  { slug: "04-pace-how", number: 4, id: "pace-how", label: "Pace How?", textClass: "text-light", page: "/" },
  { slug: "05-then-what", number: 5, id: "then-what", label: "Then What?", textClass: "text-dark antialiased", page: "/" },
  { slug: "06-conclusion", number: 6, id: "conclusion", label: "Conclusion", textClass: "text-dark antialiased", page: "/" },
  {
    slug: "07-call-to-action", number: 7,
    id: "call-to-action",
    label: "Do Something",
    textClass: "text-dark antialiased",
    page: "/",
  },
  { slug: "08-appendices", id: "appendices", label: "Appendices", textClass: "text-dark antialiased", page: "/appendices" },
] as const;

export type SectionMeta = (typeof sectionMeta)[number];

/* "2. Why Pace?" — or just the label where there is no number. */
export const sectionTitle = (section: SectionMeta) =>
  "number" in section ? `${section.number}. ${section.label}` : section.label;

export const navHref = (section: SectionMeta) =>
  section.page === "/" ? `/#${section.id}` : section.page;
