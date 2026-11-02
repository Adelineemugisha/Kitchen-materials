import { useEffect } from "react";
import SmartImage from "./SmartImage";
import { BLENDERS } from "../data/products";
import { formatPrice, buildWhatsAppLink } from "../lib/whatsapp";

export default function BlenderModal({ open, onClose, focusId }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="blender-modal-title"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-sm"
      />

      <div className="relative z-10 flex max-h-[90svh] w-full max-w-6xl flex-col overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:max-h-[88vh] sm:rounded-3xl">
        <div className="flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-gold uppercase">
              The blender collection
            </p>
            <h2
              id="blender-modal-title"
              className="mt-2 font-display text-2xl font-light text-ink sm:text-3xl"
            >
              Eight blends, one standard
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-moss">
              Choose the model that matches your counter, your counter space and
              your mornings.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close blender collection"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="no-scrollbar overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BLENDERS.map((blender) => (
              <article
                key={blender.id}
                className={`group flex flex-col overflow-hidden rounded-2xl border bg-white/70 transition-colors ${
                  focusId?.startsWith("small") && blender.id === "blender-2"
                    ? "border-gold"
                    : "border-ink/10 hover:border-gold/50"
                }`}
              >
                <SmartImage
                  src={blender.image}
                  alt={blender.name}
                  className="aspect-square w-full"
                  imgClassName="group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[9px] font-medium tracking-[0.16em] text-gold uppercase">
                    {blender.variation}
                  </p>
                  <h3 className="mt-1.5 font-display text-base leading-snug text-ink">
                    {blender.name}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-moss">
                    {blender.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="font-display text-lg text-ink">
                      {formatPrice(blender.price)}
                    </span>
                    <a
                      href={buildWhatsAppLink(blender)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-ink px-3.5 py-2 text-[9px] font-medium tracking-[0.16em] text-cream uppercase transition-colors hover:bg-gold"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
