import { useEffect, useState } from "react";

const LINKS = [
  { label: "Our Products", href: "#products" },
  { label: "Buy Now", href: "#blenders" },
  { label: "Promotions", href: "#promotions" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 shadow-[0_1px_0_rgba(27,35,32,0.08)] backdrop-blur"
          : "bg-gradient-to-b from-ink/45 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10"
        aria-label="Main"
      >
        <a
          href="#top"
          className={`font-display text-lg tracking-[0.18em] uppercase sm:text-xl ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          Aurelia<span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`group relative text-xs font-medium tracking-[0.16em] uppercase transition-colors ${
                  scrolled
                    ? "text-ink-soft hover:text-gold"
                    : "text-cream/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#blenders"
          className={`hidden rounded-full border px-5 py-2.5 text-[11px] font-medium tracking-[0.16em] uppercase transition-all duration-300 md:inline-block ${
            scrolled
              ? "border-gold text-gold hover:bg-gold hover:text-cream"
              : "border-cream/70 text-cream hover:bg-cream hover:text-ink"
          }`}
        >
          Shop the collection
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${
            scrolled ? "text-ink" : "text-cream"
          }`}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1/2 left-0 h-px w-full bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-cream transition-[max-height] duration-500 ease-in-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 pt-2 pb-6">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 py-3 text-sm tracking-[0.12em] text-ink-soft uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#blenders"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-ink py-3 text-center text-xs tracking-[0.16em] text-cream uppercase"
            >
              Shop the collection
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
