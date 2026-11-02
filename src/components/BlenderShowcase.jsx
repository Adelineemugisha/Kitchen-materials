import { useState } from "react";
import SmartImage from "./SmartImage";
import BlenderModal from "./BlenderModal";
import { HERO_BLENDERS } from "../data/products";
import { buildWhatsAppLink, formatPrice } from "../lib/whatsapp";

export default function BlenderShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [focusId, setFocusId] = useState(null);

  const openModal = (id) => {
    setFocusId(id);
    setModalOpen(true);
  };

  return (
    <section id="blenders" className="scroll-mt-20 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium tracking-[0.32em] text-gold-light uppercase">
              Signature collection
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight font-light sm:text-4xl md:text-[2.9rem]">
              Two blenders.
              <br className="hidden sm:block" /> Eight ways to build them.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">
              Start with the size that suits your kitchen — then open the door to
              the full range of models, motors and jugs.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openModal(null)}
            className="self-start rounded-full border border-cream/40 px-6 py-3 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors hover:border-gold-light hover:text-gold-light sm:self-auto"
          >
            View all 8 blenders
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:gap-7">
          {HERO_BLENDERS.map((blender) => (
            <article
              key={blender.id}
              className="group relative overflow-hidden rounded-3xl bg-ink-soft/60 ring-1 ring-cream/10 transition-all duration-500 hover:ring-gold/50"
            >
              <button
                type="button"
                onClick={() => openModal(blender.id)}
                aria-label={`See all blenders, starting with ${blender.name}`}
                className="block w-full text-left"
              >
                <SmartImage
                  src={blender.image}
                  alt={`${blender.name} — ${blender.variation}`}
                  className="aspect-4/5 w-full sm:aspect-4/3 lg:aspect-3/2"
                  imgClassName="group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <p className="text-[10px] font-medium tracking-[0.24em] text-gold-light uppercase">
                    {blender.variation}
                  </p>
                  <h3 className="mt-2 font-display text-2xl leading-tight font-light sm:text-3xl">
                    {blender.name}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/75">
                    {blender.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    <span className="font-display text-2xl">
                      {formatPrice(blender.price)}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-cream/60 uppercase">
                      Tap to explore ›
                    </span>
                  </div>
                </div>
              </button>

              <a
                href={buildWhatsAppLink(blender)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-5 right-5 rounded-full bg-cream px-5 py-2.5 text-[10px] font-medium tracking-[0.16em] text-ink uppercase transition-colors hover:bg-gold hover:text-cream"
              >
                Order Now
              </a>
            </article>
          ))}
        </div>
      </div>

      <BlenderModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        focusId={focusId}
      />
    </section>
  );
}
