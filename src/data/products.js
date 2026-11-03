/**
 * Product catalogue
 * -----------------
 * Every image path is string-interpolated from the naming convention
 *   /images/[prefix][number].png
 * e.g. stanley1.png, forks3.png, containers2.png, Airflyer2.png
 * Blenders use bigblender1.png / smallblender1.png for the hero cards;
 * the full blender range references blender1.png ... blender8.png.
 */
export const IMAGE_BASE = "/images";

const withImages = (prefix, list) =>
  list.map((item, index) => ({
    id: `${prefix}-${index + 1}`,
    image: `${IMAGE_BASE}/${prefix}${index + 1}.png`,
    ...item,
  }));

/* ------------------------------------------------------------------ */
/*  Blenders                                                          */
/* ------------------------------------------------------------------ */
export const HERO_BLENDERS = [
  {
    id: "big-blender",
    name: "The Big Blender",
    variation: "Professional · 2 L",
    price: 349,
    image: `${IMAGE_BASE}/bigblender1.png`,
    description:
      "A 1400 W workhorse with a hardened steel blade stack. Crushes ice, nuts and frozen fruit in seconds — built for families and small cafés.",
  },
  {
    id: "small-blender",
    name: "The Small Blender",
    variation: "Personal · 600 ml",
    price: 89,
    image: `${IMAGE_BASE}/smallblender1.png`,
    description:
      "Counter-top compact, travel-cup ready. One-touch smoothies, dressings and baby food without taking up the counter.",
  },
];

export const BLENDERS = [
  {
    id: "blender-1",
    name: "Aurora High-Speed Blender",
    variation: "Model 1 · 2 L · 1400 W",
    price: 349,
    image: `${IMAGE_BASE}/bigblender2.png`,
    description:
      "Variable speed dial with a pulse setting and a 2 L Tritan jug. Handles ice, nut butters and hot soups.",
  },
  {
    id: "blender-2",
    name: "Everyday Personal Blender",
    variation: "Model 2 · 600 ml",
    price: 89,
    image: `${IMAGE_BASE}/bigblender3.png`,
    description:
      "Blend-and-go cup with a leak-proof lid. Ideal for one smoothie at a time.",
  },
  {
    id: "blender-3",
    name: "Glass Jug Blender",
    variation: "Model 3 · 1.5 L",
    price: 129,
    image: `${IMAGE_BASE}/bigblender4.png`,
    description:
      "Heat-resistant glass jug that takes hot liquids without clouding. Six blades, two speeds.",
  },
  {
    id: "blender-4",
    name: "Vacuum Blender",
    variation: "Model 4 · 1.8 L",
    price: 249,
    image: `${IMAGE_BASE}/bigblender5.png`,
    description:
      "Pumps the air out before blending, so juices keep their colour and vitamins for longer.",
  },
  {
    id: "blender-5",
    name: "Immersion Hand Blender",
    variation: "Model 5 · 700 W",
    price: 79,
    image: `${IMAGE_BASE}/smallblender2.png`,
    description:
      "Stainless shaft and whisk attachment. Blends straight in the pot — no extra washing up.",
  },
  {
    id: "blender-6",
    name: "Smoothie Blender",
    variation: "Model 6 · 1 L",
    price: 109,
    image: `${IMAGE_BASE}/smallblender3.png`,
    description:
      "Slim footprint, generous 1 L jug and a dedicated smoothie programme for silky texture.",
  },
  {
    id: "blender-7",
    name: "Professional Bar Blender",
    variation: "Model 7 · 2.4 L",
    price: 429,
    image: `${IMAGE_BASE}/smallblender4.png`,
    description:
      "Café-grade motor with a sound-dampening base. Crushes a full jug of ice in under ten seconds.",
  },
  {
    id: "blender-8",
    name: "Quiet Blender",
    variation: "Model 8 · 1.8 L",
    price: 299,
    image: `${IMAGE_BASE}/smallblender5.png`,
    description:
      "Enclosed sound chamber keeps morning smoothies under a whisper. Programmed presets for soup, salsa and frozen dessert.",
  },
];

/* ------------------------------------------------------------------ */
/*  Categories                                                        */
/* ------------------------------------------------------------------ */
export const CATEGORIES = [
  {
    id: "stanley-cups",
    prefix: "stanley",
    title: "Stanley Cups",
    intro: "Vacuum-sealed steel tumblers that keep ice for a full working day.",
    items: withImages("stanleycup", [
      {
        name: "Quencher H2.0 Tumbler",
        variation: "1.2 L · Cream",
        price: 45,
        description:
          "Double-wall vacuum steel with a straw lid. Cold for 11 hours, hot for 7.",
      },
      {
        name: "IceFlow Flip Straw Bottle",
        variation: "0.89 L · Sage",
        price: 38,
        description:
          "Leak-proof flip straw and a built-in fence hook for the gym or the trail.",
      },
      {
        name: "Classic Legendary Bottle",
        variation: "1.4 L · Hammertone",
        price: 42,
        description:
          "The original workhorse flask — dent-resistant shell, insulated stopper.",
      },
      {
        name: "Transit Tumbler",
        variation: "0.47 L · Rose Quartz",
        price: 32,
        description:
          "Slim enough for a car cup holder, sturdy enough for a commuter's daily coffee.",
      },
    ]),
  },
  {
    id: "vacuum-flasks",
    prefix: "vacuum",
    title: "Vacuum Flasks",
    intro: "For hot water, tea and coffee that stays exactly as poured.",
    items: withImages("flask", [
      {
        name: "Summit Vacuum Flask",
        variation: "1 L · Matte Slate",
        price: 52,
        description:
          "One-touch pour stopper and a powder-coated body that stays cool to the touch.",
      },
      {
        name: "Pour-Over Thermos",
        variation: "1.5 L · Brass",
        price: 46,
        description:
          "Wide mouth for filling, narrow spout for serving. Keeps tea hot for 12 hours.",
      },
      {
        name: "Coffee Travel Flask",
        variation: "600 ml · Cream",
        price: 39,
        description:
          "Fits standard cup holders, opens one-handed, and rinses clean in seconds.",
      },
      {
        name: "Tea Carafe Flask",
        variation: "1.2 L · Charcoal",
        price: 44,
        description:
          "Glass-lined interior keeps the taste of tea true — no metal afternote.",
      },
    ]),
  },
  {
    id: "cutlery",
    prefix: "forks",
    title: "Forks & Table Cutlery",
    intro: "Balanced, forged pieces that feel as good as they look on the table.",
    items: withImages("cutlery", [
      {
        name: "24-Piece Forged Cutlery Set",
        variation: "18/10 steel · Mirror",
        price: 129,
        description:
          "Six full place settings, forged in one piece so the tines never bend.",
      },
      {
        name: "Dessert Forks",
        variation: "Set of 6 · Matte",
        price: 34,
        description:
          "Slightly shorter tines for cake, fruit and small plates.",
      },
      {
        name: "Dinner Knives",
        variation: "Set of 6 · Mirror",
        price: 42,
        description:
          "Hand-sharpened serrated edge that glides through steak and crusty bread.",
      },
      {
        name: "Serving Spoons & Forks",
        variation: "2-piece set · Brass handle",
        price: 29,
        description:
          "Generous bowls for family-style serving, with a warm brushed finish.",
      },
    ]),
  },
  {
    id: "containers",
    prefix: "containers",
    title: "Coffee, Sugar & Salt Containers",
    intro: "Counter-worthy canisters with airtight seals that keep flavour locked in.",
    items: withImages("container", [
      {
        name: "Ceramic Canister Trio",
        variation: "3 jars · Matte cream",
        price: 58,
        description:
          "Stoneware canisters with bamboo lids and silicone gaskets. Coffee, sugar, salt.",
      },
      {
        name: "Airtight Coffee Vault",
        variation: "1 kg · Stainless",
        price: 36,
        description:
          "One-way CO₂ valve and a date dial so beans stay fresh for weeks.",
      },
      {
        name: "Salt Cellar with Spoon",
        variation: "250 g · Marble",
        price: 24,
        description:
          "Wide-mouth marble cellar that keeps sea salt dry and within reach.",
      },
      {
        name: "Glass Sugar Jar",
        variation: "800 ml · Bamboo lid",
        price: 28,
        description:
          "Borosilicate glass with a scoop notch — no more sticky spoons.",
      },
    ]),
  },
  {
    id: "plates",
    prefix: "plates",
    title: "Plates & Classic Dishes",
    intro: "Everyday porcelain with the weight and glaze of restaurantware.",
    items: withImages("plate", [
      {
        name: "Dinner Plate Set",
        variation: "6 plates · 27 cm · Ivory glaze",
        price: 76,
        description:
          "Reactive ivory glaze with a hand-finished rim. Dishwasher and microwave safe.",
      },
      {
        name: "Pasta Bowls",
        variation: "4 bowls · 22 cm",
        price: 62,
        description:
          "Deep, wide-rimmed bowls that keep a sauce where it belongs.",
      },
      {
        name: "Side Plates",
        variation: "6 plates · 20 cm",
        price: 48,
        description:
          "For starters, toast or cake — stackable and chip-resistant.",
      },
      {
        name: "Serving Platter",
        variation: "38 cm · Oval",
        price: 54,
        description:
          "A generous oval platter for roasts, mezze and Sunday tables.",
      },
    ]),
  },
  {
    id: "air-fryers",
    prefix: "Airflyer",
    title: "Air Fryers",
    intro: "Crisp results with a fraction of the oil — and an easy clean-up.",
    items: withImages("airfryer", [
      {
        name: "Dual Basket Air Fryer",
        variation: "8 L · Matte black",
        price: 189,
        description:
          "Two independent baskets, two temperatures, one finish time.",
      },
      {
        name: "Compact Air Fryer",
        variation: "4.5 L · Cream",
        price: 119,
        description:
          "Fits a small kitchen and a family of two. Presets for chips, chicken and veg.",
      },
      {
        name: "Air Fryer Oven",
        variation: "12 L · Stainless",
        price: 229,
        description:
          "Rotisserie, dehydrate and bake modes with three racks and a viewing window.",
      },
      {
        name: "Steam-Air Fryer",
        variation: "6 L · Slate",
        price: 249,
        description:
          "Adds steam to the air for juicy interiors and glass-crisp skins.",
      },
    ]),
  },
  {
    id: "glasses",
    prefix: "glasses",
    title: "Glasses for Wine, Water & Milk",
    intro: "Thin, bright glassware that flatters whatever you pour.",
    items: withImages("glass", [
      {
        name: "Crystal Wine Glasses",
        variation: "Set of 6 · 450 ml",
        price: 84,
        description:
          "Lead-free crystal with a hand-pulled stem and a fine, singing rim.",
      },
      {
        name: "Everyday Water Glasses",
        variation: "Set of 6 · 350 ml",
        price: 42,
        description:
          "Tempered glass that survives the dishwasher and the breakfast rush.",
      },
      {
        name: "Milk Tumblers",
        variation: "Set of 4 · 300 ml",
        price: 36,
        description:
          "Short, sturdy tumblers with a subtle optic rib — perfect for milk or iced coffee.",
      },
      {
        name: "Champagne Flutes",
        variation: "Set of 6 · 210 ml",
        price: 78,
        description:
          "Tall, narrow flutes that hold the bubbles from first pour to last.",
      },
    ]),
  },
  {
    id: "ovens",
    prefix: "oven",
    title: "Ovens",
    intro: "Even heat, precise control, and finishes that suit the room.",
    hidden: true,
    items: withImages("oven", [
      {
        name: "Built-in Convection Oven",
        variation: "70 L · Stainless",
        price: 749,
        description:
          "Fan-assisted heat, pyrolytic cleaning and a soft-close door.",
      },
      {
        name: "Countertop Toaster Oven",
        variation: "32 L · Matte black",
        price: 219,
        description:
          "Bakes, grills and toasts without heating the whole kitchen.",
      },
      {
        name: "Steam Oven",
        variation: "45 L · Stainless",
        price: 899,
        description:
          "Steam, combination and convection modes for bread, fish and vegetables.",
      },
      {
        name: "Pizza Oven",
        variation: "Gas · Outdoor",
        price: 349,
        description:
          "Stone floor and a 450 °C ceiling — Neapolitan crust in 90 seconds.",
      },
    ]),
  },
  {
    id: "glass-storage",
    prefix: "storage",
    title: "Glass Storage",
    intro: "Stackable, see-through, and built for leftovers that deserve better.",
    hidden: true,
    items: withImages("storage", [
      {
        name: "Glass Storage Set",
        variation: "10 pieces · Bamboo lids",
        price: 68,
        description:
          "Oven-to-fridge borosilicate containers with airtight bamboo lids.",
      },
      {
        name: "Pantry Jars",
        variation: "Set of 4 · 1 L",
        price: 44,
        description:
          "Square jars that line up neatly and show exactly what's inside.",
      },
      {
        name: "Divided Serving Dish",
        variation: "30 cm · 3 sections",
        price: 32,
        description:
          "One dish, three compartments — for snacks, dressings or a tasting plate.",
      },
      {
        name: "Stackable Glass Boxes",
        variation: "Set of 6 · 500 ml",
        price: 52,
        description:
          "Clip-lid boxes that stack flat and seal tight for lunch bags.",
      },
    ]),
  },
  {
    id: "crepe-makers",
    prefix: "crepemaker",
    title: "Crepe Makers",
    intro: "Thin, even, golden — Sunday mornings sorted.",
    hidden: true,
    items: withImages("crepemaker", [
      {
        name: "Classic Crepe Pan",
        variation: "28 cm · Non-stick",
        price: 49,
        description:
          "Low, sloped walls and a balanced handle for the flick-and-spread technique.",
      },
      {
        name: "Electric Crepe Maker",
        variation: "35 cm · Adjustable thermostat",
        price: 89,
        description:
          "Dip-and-cook plate with a non-stick coating and a ready indicator.",
      },
      {
        name: "Crepe Spreader & Spatula Set",
        variation: "2 pieces · Beechwood",
        price: 24,
        description:
          "The two tools that make the difference between crepe and pancake.",
      },
      {
        name: "Belgian Pancake Griddle",
        variation: "40 cm · Cast aluminium",
        price: 119,
        description:
          "Deep round wells for fluffy Belgian-style pancakes, evenly browned.",
      },
    ]),
  },
  {
    id: "pans",
    prefix: "pan",
    title: "Pans",
    intro: "Heavy bases, honest handles, no hot spots.",
    hidden: true,
    items: withImages("pan", [
      {
        name: "Tri-Ply Frying Pan",
        variation: "28 cm · Stainless",
        price: 89,
        description:
          "Aluminium core bonded between steel — restaurant-grade heat control.",
      },
      {
        name: "Non-Stick Sauté Pan",
        variation: "26 cm · Ceramic coating",
        price: 74,
        description:
          "Straight sides and a lid for one-pan dinners and shallow frying.",
      },
      {
        name: "Cast Iron Skillet",
        variation: "30 cm · Pre-seasoned",
        price: 64,
        description:
          "Improves with every use. Oven-safe, induction-ready, virtually indestructible.",
      },
      {
        name: "Carbon Steel Wok",
        variation: "32 cm · Flat base",
        price: 79,
        description:
          "Takes a season in minutes and gives proper wok hei on a home hob.",
      },
    ]),
  },
  {
    id: "cups",
    prefix: "cup",
    title: "Cups in Different Shapes",
    intro: "From espresso to chai — a shape for every ritual.",
    hidden: true,
    items: withImages("cup", [
      {
        name: "Ribbed Espresso Cups",
        variation: "Set of 4 · 90 ml",
        price: 38,
        description:
          "Thick-walled porcelain that holds the crema and the heat.",
      },
      {
        name: "Handleless Tea Cups",
        variation: "Set of 6 · 180 ml",
        price: 44,
        description:
          "Japanese-inspired tumblers with a warm matte glaze.",
      },
      {
        name: "Double-Wall Cappuccino Cups",
        variation: "Set of 2 · 250 ml",
        price: 32,
        description:
          "Insulated glass that shows the layers and keeps fingers cool.",
      },
      {
        name: "Stoneware Mug Set",
        variation: "Set of 4 · 350 ml",
        price: 48,
        description:
          "Chunky, comfortable handles and a speckled reactive glaze.",
      },
    ]),
  },
  {
    id: "coffee-makers",
    prefix: "coffeemaker",
    title: "Coffee Makers",
    intro: "Filter, espresso or pour-over — brewed the way you like it.",
    hidden: true,
    items: withImages("coffeemaker", [
      {
        name: "Drip Coffee Maker",
        variation: "1.5 L · Glass carafe",
        price: 149,
        description:
          "Programmable timer, shower-head spreader and a keep-warm plate.",
      },
      {
        name: "Espresso Machine",
        variation: "15 bar · Stainless",
        price: 399,
        description:
          "PID temperature control, steam wand and a 58 mm portafilter basket.",
      },
      {
        name: "Pour-Over Set",
        variation: "Ceramic · 600 ml",
        price: 59,
        description:
          "A balanced dripper, carafe and scoop for a clean, bright cup.",
      },
      {
        name: "Moka Pot",
        variation: "6 cup · Aluminium",
        price: 45,
        description:
          "Stovetop espresso with a rich, syrupy body. Induction adapter included.",
      },
    ]),
  },
  {
    id: "pressure-cookers",
    prefix: "pressurecooker",
    title: "Pressure Cookers",
    intro: "Beans, stews and stock in a fraction of the time.",
    hidden: true,
    items: withImages("pressurecooker", [
      {
        name: "6 L Electric Pressure Cooker",
        variation: "6 L · 1000 W",
        price: 169,
        description:
          "Twelve presets, a delay timer and a locking lid with redundant safety valves.",
      },
      {
        name: "Stovetop Pressure Cooker",
        variation: "5 L · Stainless",
        price: 109,
        description:
          "Tri-ply base for even heat, works on every hob including induction.",
      },
      {
        name: "Compact Pressure Cooker",
        variation: "3 L · Stainless",
        price: 89,
        description:
          "Sized for two — quick lentils, rice and stews without leftovers.",
      },
      {
        name: "Multi-Function 8 L",
        variation: "8 L · 1200 W",
        price: 199,
        description:
          "Pressure cook, slow cook, sauté and steam in one pot. Family-sized.",
      },
    ]),
  },
  {
    id: "tables",
    prefix: "table",
    title: "Standard Tables",
    intro: "Solid timber and clean lines — the anchor of the room.",
    hidden: true,
    items: withImages("table", [
      {
        name: "Oak Dining Table",
        variation: "180 × 90 cm · Natural oak",
        price: 549,
        description:
          "Solid oak top with a hard-wax oil finish and tapered, splayed legs.",
      },
      {
        name: "Round Bistro Table",
        variation: "80 cm · Walnut",
        price: 289,
        description:
          "A compact round top for breakfast corners and small balconies.",
      },
      {
        name: "Kitchen Island Table",
        variation: "150 × 80 cm · Oak",
        price: 479,
        description:
          "Prep surface, storage shelf and seating for three, in one footprint.",
      },
      {
        name: "Folding Serving Table",
        variation: "120 × 60 cm · Beech",
        price: 159,
        description:
          "Folds flat in seconds for hosting, buffets and market stalls.",
      },
    ]),
  },
];

/* ------------------------------------------------------------------ */
/*  All Items — catch-all overflow section                            */
/* ------------------------------------------------------------------ */
export const ALL_ITEMS = withImages("allitems", [
  {
    name: "Marble Mortar & Pestle",
    variation: "18 cm · Honed marble",
    price: 39,
    description:
      "Heavy, cool stone that cracks spices and makes pesto the old way.",
  },
  {
    name: "Wooden Utensil Set",
    variation: "5 pieces · Beechwood",
    price: 34,
    description:
      "Turned beech tools that won't scratch a non-stick surface.",
  },
  {
    name: "Copper Measuring Cups",
    variation: "4 pieces · Copper",
    price: 29,
    description:
      "Nesting cups with engraved measures and a warm, lacquered finish.",
  },
  {
    name: "Linen Apron",
    variation: "One size · Stone",
    price: 32,
    description:
      "Stonewashed European linen with a cross-back strap and deep pockets.",
  },
  {
    name: "Brass Kitchen Scale",
    variation: "5 kg · Mechanical",
    price: 68,
    description:
      "A counter statement that weighs to the gram and never needs a battery.",
  },
  {
    name: "Bread Basket",
    variation: "32 cm · Woven rattan",
    price: 26,
    description:
      "Woven rattan with a linen liner — keeps crusts crisp at the table.",
  },
]);

/* ------------------------------------------------------------------ */
/*  Promotions                                                        */
/* ------------------------------------------------------------------ */
export const PROMOTIONS = [
  {
    id: "promo-blenders",
    title: "Blender Season",
    detail: "Any two blenders, 15% off the pair.",
    code: "BLEND15",
  },
  {
    id: "promo-table",
    title: "Table for Six",
    detail: "Cutlery + plate sets together — save $40.",
    code: "TABLE40",
  },
  {
    id: "promo-delivery",
    title: "Free Delivery",
    detail: "On every order above $150, countrywide.",
    code: "SHIPFREE",
  },
];
