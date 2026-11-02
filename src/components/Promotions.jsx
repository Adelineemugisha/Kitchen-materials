import SectionHeading from "./SectionHeading";
import { PROMOTIONS } from "../data/products";
import { WHATSAPP_NUMBER } from "../lib/whatsapp";

export default function Promotions() {
  return (
    <section id="promotions" className="scroll-mt-24 bg-sand/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <SectionHeading
          eyebrow="Promotions"
          title="A little more reason to order today."
          intro="Mention the code in your WhatsApp message and we'll apply it to the order before dispatch."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PROMOTIONS.map((promo) => (
            <article
              key={promo.id}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-cream p-6 sm:p-7"
            >
              <div>
                <h3 className="font-display text-xl text-ink">{promo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">
                  {promo.detail}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
                <span className="rounded-full border border-dashed border-gold px-3 py-1.5 text-[10px] font-medium tracking-[0.18em] text-gold uppercase">
                  {promo.code}
                </span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hello, I would like to claim the ${promo.title} promotion (${promo.code}). ${promo.detail}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium tracking-[0.18em] text-ink uppercase transition-colors hover:text-gold"
                >
                  Claim ›
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
