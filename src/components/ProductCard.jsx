import SmartImage from "./SmartImage";
import { formatPrice, buildWhatsAppLink } from "../lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_-24px_rgba(27,35,32,0.45)]">
      <SmartImage
        src={product.image}
        alt={product.name}
        className="aspect-4/3 w-full"
        imgClassName="group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-[10px] font-medium tracking-[0.18em] text-gold uppercase">
          {product.variation}
        </p>
        <h3 className="mt-2 font-display text-lg leading-snug text-ink">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-moss">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between gap-4 border-t border-ink/8 pt-4">
          <span className="font-display text-xl text-ink">
            {formatPrice(product.price)}
          </span>
          <a
            href={buildWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-[10px] font-medium tracking-[0.18em] text-cream uppercase transition-colors duration-300 hover:bg-gold"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            Order Now
          </a>
        </div>
      </div>
    </article>
  );
}
