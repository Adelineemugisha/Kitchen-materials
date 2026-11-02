import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";

const SLIDES = [
  {
    src: "/images/trans1.png",
    alt: "A warm kitchen counter styled with blender and tableware",
    caption: "The blending collection",
  },
  {
    src: "/images/trans2.png",
    alt: "Table set with plates, cutlery and crystal glasses",
    caption: "Set the table, slowly",
  },
  {
    src: "/images/trans3.png",
    alt: "Coffee making tools on a cream marble surface",
    caption: "Morning rituals",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const heroLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Aurelia Kitchen, I would like help choosing pieces for my kitchen."
  )}`;

  return (
    <section id="top" className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 bg-ink">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fetchPriority={i === 0 ? "high" : "low"}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/35 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_0%,rgba(27,35,32,0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-cream">
        <p className="mb-5 text-[11px] font-medium tracking-[0.4em] text-gold-light uppercase">
          Kitchen &amp; Table
        </p>
        <h1 className="font-display text-[2.6rem] leading-[1.05] font-light tracking-tight sm:text-6xl md:text-7xl">
          Objects worth
          <br className="sm:hidden" /> keeping.
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-cream/85 sm:text-base">
          Blenders, cookware and tableware chosen for how they feel in the hand
          and how they hold up after a thousand meals.
        </p>

        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="#products"
            className="w-full rounded-full bg-cream px-8 py-3.5 text-center text-[11px] font-medium tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:bg-gold hover:text-cream sm:w-auto"
          >
            Our Products
          </a>
          <a
            href={heroLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-cream/60 px-8 py-3.5 text-center text-[11px] font-medium tracking-[0.2em] text-cream uppercase transition-colors duration-300 hover:border-cream hover:bg-cream/10 sm:w-auto"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-5 px-6">
        <div className="flex items-center gap-3">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}: ${slide.caption}`}
              aria-current={i === index}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-10 bg-cream" : "w-4 bg-cream/40 hover:bg-cream/70"
              }`}
            />
          ))}
        </div>
        <a
          href="#blenders"
          className="hidden text-[10px] tracking-[0.3em] text-cream/70 uppercase transition-colors hover:text-cream sm:block"
        >
          Scroll
        </a>
      </div>
    </section>
  );
}
