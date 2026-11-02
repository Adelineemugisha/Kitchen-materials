const LINKS = [
  { label: "Our Products", href: "#products" },
  { label: "Buy Now", href: "#blenders" },
  { label: "Promotions", href: "#promotions" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl tracking-[0.18em] uppercase">
              Aurelia<span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
              Kitchen and table essentials for people who cook at home and care
              how it looks while they do it.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[10px] font-medium tracking-[0.26em] text-gold-light uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[10px] font-medium tracking-[0.26em] text-gold-light uppercase">
              Reach us
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
              <li>0780 000 000</li>
              <li>hello@aureliakitchen.com</li>
              <li>Kigali, Rwanda</li>
              <li className="text-cream/50">Mon–Sat, 8:00 – 20:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/10 pt-6 text-[11px] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurelia Kitchen. All rights reserved.</p>
          <p>Ordering is completed on WhatsApp.</p>
        </div>
      </div>
    </footer>
  );
}
