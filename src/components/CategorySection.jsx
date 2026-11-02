import ProductCard from "./ProductCard";

export default function CategorySection({ category, tone = "cream" }) {
  return (
    <section
      id={category.id}
      className={`scroll-mt-24 ${
        tone === "sand" ? "bg-sand/45" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl leading-tight font-light text-ink sm:text-3xl">
              {category.title}
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-moss">
              {category.intro}
            </p>
          </div>
          <p className="text-[10px] tracking-[0.24em] text-moss/70 uppercase">
            {category.items.length} pieces
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {category.items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
