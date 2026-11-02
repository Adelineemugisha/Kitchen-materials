import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlenderShowcase from "./components/BlenderShowcase";
import CategorySection from "./components/CategorySection";
import Promotions from "./components/Promotions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { CATEGORIES, ALL_ITEMS } from "./data/products";

const ALL_ITEMS_CATEGORY = {
  id: "all-items",
  title: "All Items",
  intro:
    "The overflow shelf — small, useful, beautiful things that don't fit neatly into a category.",
  items: ALL_ITEMS,
};

const TRUST = [
  "Free delivery over $150",
  "Two-year warranty on appliances",
  "Order in one WhatsApp message",
  "Nairobi showroom, countrywide delivery",
];

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main>
        <Hero />

        {/* Trust strip */}
        <div className="border-y border-ink/10 bg-sand/50">
          <div className="no-scrollbar mx-auto flex max-w-7xl gap-10 overflow-x-auto px-5 py-4 sm:justify-center sm:px-8">
            {TRUST.map((item) => (
              <p
                key={item}
                className="shrink-0 text-[10px] tracking-[0.2em] text-moss uppercase"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <BlenderShowcase />

        <div id="products" className="scroll-mt-20">
          <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium tracking-[0.32em] text-gold uppercase">
                Our Products
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight font-light text-ink sm:text-4xl md:text-[2.75rem]">
                Everything for the kitchen, and the table it sits on.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-moss sm:text-base">
                Sixteen collections, one standard of finish. Every item can be
                ordered straight from WhatsApp with the price already filled in.
              </p>
            </div>
          </div>

          {[...CATEGORIES, ALL_ITEMS_CATEGORY].map((category, i) => (
            <CategorySection
              key={category.id}
              category={category}
              tone={i % 2 === 1 ? "sand" : "cream"}
            />
          ))}
        </div>

        <Promotions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
