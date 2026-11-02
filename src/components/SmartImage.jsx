import { useState } from "react";

/**
 * Renders the product image, and if the file is missing shows a warm
 * typographic tile instead of a broken image. Drop your PNGs into
 * /public/images and they appear automatically.
 */
export default function SmartImage({ src, alt, className = "", imgClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-sand via-cream to-sand-dark ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="px-4 text-center font-display text-sm text-moss">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-sand ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-transform duration-700 ease-out ${imgClassName}`}
      />
    </div>
  );
}
