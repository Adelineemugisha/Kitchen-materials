# Aurelia Kitchen

Single-page catalogue site. React 18 + Vite 6 + Tailwind CSS 4. No backend, no cart, no checkout —
every order button opens WhatsApp with the product, variant and price already written into the message.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the built bundle
```

## Where to change things

| What | File |
| --- | --- |
| WhatsApp number | `src/lib/whatsapp.js` → `WHATSAPP_NUMBER` (digits only, `254780000000`) |
| Products, prices, categories | `src/data/products.js` |
| Promotions | `src/data/products.js` → `PROMOTIONS` |
| Colours, fonts, spacing | `src/index.css` (Tailwind `@theme`) |
| Copy in hero / contact / footer | the matching component in `src/components/` |

WhatsApp number: replace `254780000000` with your own, international format, no `+` and no leading 0.
Kenyan `0780 000 000` becomes `254780000000`.

## Images

Drop PNGs into `public/images/` using these exact names. A missing file is not fatal —
`SmartImage` swaps in a warm typographic tile instead of a broken icon, so you can ship
the site and add photography later.

```
bigblender1.png   smallblender1.png
blender1.png … blender8.png
stanleycup1..4.png  flask1..4.png     cutlery1..4.png   container1..4.png   plate1..4.png
airfryer1..4.png    glass1..4.png     oven1..4.png      storage1..4.png     crepemaker1..4.png
pan1..4.png         cup1..4.png       coffeemaker1..4.png  pressurecooker1..4.png
table1..4.png       allitems1..6.png
```

76 files in total. Recommended: 1200×900 px, PNG, under 300 KB each.

## Structure

```
src/
  components/  Navbar · Hero · BlenderShowcase (+ BlenderModal) · CategorySection
               ProductCard · Promotions · Contact · Footer · SectionHeading · SmartImage
  data/        products.js — the whole catalogue
  lib/         whatsapp.js — number, price formatting, message builder
```

## Notes

- 8 blenders live in a modal opened from the two hero cards; the other 15 categories render
  as alternating sections, plus an "All Items" shelf.
- Mobile first: single column to 640 px, two columns, then four for products.
- Accessibility: keyboard-closable modal, Escape to exit, focusable buttons, aria labels on icon controls.
- SEO/OG tags live in `index.html`.
