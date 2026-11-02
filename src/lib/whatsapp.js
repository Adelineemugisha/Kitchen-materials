/**
 * WhatsApp ordering
 * -----------------
 * Replace WHATSAPP_NUMBER with your real number in international format:
 * digits only, no "+", no leading 0. Kenyan example: 0780 000 000 -> 254780000000
 */
export const WHATSAPP_NUMBER = "254780000000";

export const formatPrice = (value) =>
  `$${Number(value).toFixed(2)}`;

/**
 * Builds the pre-filled message. Keeps every field optional except name + price
 * so it works for hero cards, category items and promo offers alike.
 */
export function buildOrderMessage({ name, variation, description, price, quantity = 1 }) {
  const model = variation ? ` (${variation})` : "";
  const total = price * quantity;
  const lines = [
    `Hello, I would like to order the ${name}${model} priced at ${formatPrice(total)}.`,
  ];
  if (quantity > 1) lines.push(`Quantity: ${quantity}`);
  if (description) lines.push("", `Details: ${description}`);
  lines.push("", "Please confirm availability, delivery and payment. Thank you!");
  return lines.join("\n");
}

/** Returns a wa.me deep link with the message URL-encoded. */
export function buildWhatsAppLink(product, extra = {}) {
  const text = buildOrderMessage({ ...product, ...extra });
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Opens WhatsApp in a new tab. */
export function orderOnWhatsApp(product, extra = {}) {
  window.open(buildWhatsAppLink(product, extra), "_blank", "noopener,noreferrer");
}
