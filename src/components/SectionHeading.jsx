export default function SectionHeading({ eyebrow, title, intro, align = "left" }) {
  return (
    <div
      className={`max-w-2xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="text-[10px] font-medium tracking-[0.32em] text-gold uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-3xl leading-tight font-light text-ink sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-sm leading-relaxed text-moss sm:text-base">
          {intro}
        </p>
      )}
    </div>
  );
}
