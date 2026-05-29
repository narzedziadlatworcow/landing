export interface NavLink {
  href: string;
  label: string;
}

// Ścieżki absolutne (/#...) — działają zarówno z landingu, jak i z bloga.
export const navLinks: NavLink[] = [
  { href: "/#produkt", label: "Produkt" },
  { href: "/#kurs", label: "Kurs" },
  { href: "/#pricing", label: "Cennik" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];
