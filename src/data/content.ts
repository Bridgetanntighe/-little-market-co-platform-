/** Kept for modular stall visuals — not advertised publicly. */
export type MarketId = "bloom" | "harvest" | "celebration";

export const bloomMarket = {
  id: "bloom" as const,
  name: "The Little Bloom Market",
  shortName: "Bloom Market",
  description:
    "A mobile flower market we bring to your venue — styled, self-serve, with setup and collection included.",
  accent: "#d8b4b2",
  accentSoft: "#f3e7e1",
};

/**
 * Shared inclusive package data — reuse everywhere so prices cannot drift.
 * Bouquet allowances explain flower quantities; events can have more guests than bouquets.
 */
export const hireOptions = [
  {
    id: "little-bar",
    name: "The Little Bar",
    price: "From £495",
    bouquets: "Up to 20 bouquets included",
    bouquetCount: 20,
    note: "The simple option — perfect when only some guests make a bouquet.",
    description: "A compact self-serve flower station with seasonal stems and simple wrapping.",
    includes: [
      "Up to 20 bouquets included",
      "Styled compact flower market display",
      "Seasonal flowers and foliage",
      "Kraft wrapping paper and ribbon",
      "Flower care cards",
      "Delivery, setup and collection within our London service area",
    ],
    comparison: {
      bouquets: "Up to 20",
      flowers: "Seasonal stems and foliage for each bouquet",
      wrapping: "Kraft wrap and ribbon",
      display: "Compact styled market",
      personalisation: "By quotation",
      setup: "Included — setup and collection",
      delivery: "Included within London and surrounding areas; further travel by quotation",
      assistance: "Standard hire is self-serve; assisted options by quotation",
    },
    enquiryValue: "The Little Bar",
  },
  {
    id: "bloom-market",
    name: "The Bloom Market",
    price: "From £695",
    bouquets: "Up to 30 bouquets included",
    bouquetCount: 30,
    note: "A fuller market when you want more guests to take flowers home.",
    description: "A larger styled flower market with a more generous stem selection and palette choice.",
    includes: [
      "Up to 30 bouquets included",
      "Larger selection of seasonal flowers",
      "Styled flower market display",
      "Choice of colour palette",
      "Premium wrapping materials",
      "Delivery, setup and collection within our London service area",
    ],
    comparison: {
      bouquets: "Up to 30",
      flowers: "Larger seasonal selection per bouquet",
      wrapping: "Premium wrapping materials",
      display: "Fuller styled market",
      personalisation: "By quotation",
      setup: "Included — setup and collection",
      delivery: "Included within London and surrounding areas; further travel by quotation",
      assistance: "Standard hire is self-serve; assisted options by quotation",
    },
    enquiryValue: "The Bloom Market",
  },
  {
    id: "brand-market",
    name: "The Brand Market",
    price: "From £995",
    bouquets: "Up to 40 bouquets included",
    bouquetCount: 40,
    note: "Branded finishing for launches and activations — bouquet numbers can be sized to your brief.",
    description: "A bespoke flower market with custom palette options and branded finishing touches.",
    includes: [
      "Up to 40 bouquets included",
      "Custom flower colour palette",
      "Branded market sign",
      "Branded stickers or tags",
      "Custom wrapping",
      "Delivery, styling and collection within our London service area",
    ],
    comparison: {
      bouquets: "Up to 40",
      flowers: "Bespoke seasonal selection",
      wrapping: "Custom wrapping",
      display: "Fully styled market",
      personalisation: "Branded sign, stickers or tags included",
      setup: "Included — styling and collection",
      delivery: "Included within London and surrounding areas; further travel by quotation",
      assistance: "Standard hire is self-serve; assisted options by quotation",
    },
    enquiryValue: "The Brand Market",
  },
];

export type FloralImage = {
  src: string;
  webp: string;
  alt: string;
  width: number;
  height: number;
};

export type FloralCollection = {
  id: string;
  name: string;
  copy: string;
  enquiryValue: string;
  /** Set when a suitable palette photograph is available. */
  image?: FloralImage;
  /** Honest brief when no suitable existing photo illustrates this palette. */
  imageNeeded?: string;
};

/** Main wedding/celebration collections — shared across homepage preview and packages selector. */
export const floralCollections: FloralCollection[] = [
  {
    id: "soft-meadow",
    name: "Soft Meadow",
    copy: "Blush, peach and creamy blooms for a soft, romantic feel.",
    enquiryValue: "Soft Meadow",
    image: {
      src: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
      webp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
      alt: "Styling inspiration — blush and peach blooms for a Soft Meadow palette",
      width: 900,
      height: 1200,
    },
  },
  {
    id: "modern-neutral",
    name: "Modern Neutral",
    copy: "White and cream flowers with natural greenery for an understated celebration.",
    enquiryValue: "Modern Neutral",
    imageNeeded:
      "White and cream bouquet with soft foliage on a light neutral background (close-up, styling inspiration).",
  },
  {
    id: "colour-pop",
    name: "Colour Pop",
    copy: "Playful pinks, coral and sunny yellow for a joyful statement.",
    enquiryValue: "Colour Pop",
    image: {
      src: "/images/guests-making-bouquets-flower-market.jpg",
      webp: "/images/guests-making-bouquets-flower-market.webp",
      alt: "Styling inspiration — warm sunny blooms for a Colour Pop palette",
      width: 1200,
      height: 800,
    },
  },
];

/** @deprecated Prefer floralCollections — kept for any remaining swatch references. */
export const colourStories = floralCollections.map((c) => ({
  id: c.id,
  name: c.name,
  colours:
    c.id === "soft-meadow"
      ? ["#f3e7e1", "#e8c9b8", "#f0d9a8", "#c5d4b8"]
      : c.id === "modern-neutral"
        ? ["#f6f1e8", "#efe6d6", "#d4b59e", "#6b7c59"]
        : ["#e8a0b0", "#e07a5f", "#f2b705", "#70c1a0"],
  copy: c.copy,
  bestFor: "",
  enquiryValue: c.enquiryValue,
}));

export const seasonalMarketNote = {
  heading: "Let the season lead",
  copy: "Love a natural mix? We can suggest a palette using the best flowers available for your date.",
  enquiryValue: "Seasonal Market",
};

export const brandMatchCollection = {
  id: "brand-match",
  name: "Brand Match",
  copy: "A custom palette shaped around your brand colours, with optional branded signage and packaging.",
  enquiryValue: "Brand Match",
};

export const HELP_ME_CHOOSE_STYLE = "Help me choose";

export const experienceSteps = [
  {
    step: "01",
    title: "We set up",
    copy: "A styled flower stall arrives at your venue — flowers, wrap and display ready.",
  },
  {
    step: "02",
    title: "Guests create",
    copy: "Self-serve: guests pick stems, wrap a bouquet and take it home.",
  },
  {
    step: "03",
    title: "We collect",
    copy: "When you’re done, we clear the market. You host — we handle the flowers.",
  },
];

export const eventTypes = [
  "Wedding",
  "Bridal shower",
  "Baby shower",
  "Birthday / private celebration",
  "Corporate event",
  "Brand activation",
  "Other",
];

export const packageChoices = [
  "The Little Bar",
  "The Bloom Market",
  "The Brand Market",
  "Help me choose",
];

export const bouquetChoices = [
  "Up to 20",
  "Up to 30",
  "Up to 40",
  "More than 40",
  "Help me decide",
];

export type GalleryItem = {
  id: string;
  imageSrc: string;
  imageWebp: string;
  imageAlt: string;
  width: number;
  height: number;
  title: string;
  caption: string;
  credit: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    imageSrc: "/images/seasonal-flower-stems-self-serve-bar-london.jpg",
    imageWebp: "/images/seasonal-flower-stems-self-serve-bar-london.webp",
    imageAlt: "Styling concept of a compact flower market with seasonal stems",
    width: 1200,
    height: 1200,
    title: "Flower market setup",
    caption: "Styling concept — compact flower market display (inspiration image)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g2",
    imageSrc: "/images/guests-making-bouquets-flower-market.jpg",
    imageWebp: "/images/guests-making-bouquets-flower-market.webp",
    imageAlt: "Styling concept close-up of a takeaway bouquet",
    width: 1200,
    height: 800,
    title: "Takeaway bouquet",
    caption: "Styling concept — indicative takeaway bouquet size (stock inspiration)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g3",
    imageSrc: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
    imageWebp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
    imageAlt: "Styling concept of bouquet wrapping and ribbon",
    width: 900,
    height: 1200,
    title: "Wrapping area",
    caption: "Styling concept — wrapping and ribbon details (stock inspiration)",
    credit: "Photo via Pexels",
  },
];

export const faqs = [
  {
    q: "How many bouquets should we book?",
    a: "Packages are priced by take-home bouquets, not total guests. A room of 60–80 can still book The Little Bar (up to 20 bouquets) if only some guests make one — for example the bridal party, a selected group, or whoever wants to join. Want most guests to take flowers home? Choose a larger allowance or ask us to quote.",
  },
  {
    q: "Is the flower market self-serve?",
    a: "Yes. Our standard experience is self-serve. We prepare, deliver, set up and collect the display. A florist does not stay during standard bookings; assisted options can be discussed when you enquire.",
  },
  {
    q: "Do guests take the flowers home?",
    a: "Yes. Guests choose stems, wrap a bouquet and take it home as a beautiful reminder of the celebration.",
  },
  {
    q: "Where do you cover?",
    a: "We deliver, set up and collect across London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm.",
  },
  {
    q: "Can you match our colours?",
    a: "Choose Soft Meadow, Modern Neutral, Colour Pop or share your own palette. Exact flower varieties depend on season and availability.",
  },
];

export const celebrationFaqs = [
  {
    q: "Is this suitable for a bridal or baby shower?",
    a: "Yes. The Little Bloom Market works well for bridal showers, baby showers and birthday gatherings where guests want a relaxed shared activity and a bouquet to take home.",
  },
  {
    q: "How much space do we need at home?",
    a: "The setup is compact and suited to homes, gardens and hired rooms. Share a few photos or approximate floor space when you enquire and we will advise.",
  },
  {
    q: "Do we need a florist on the day?",
    a: "Not for a standard booking. We deliver, set up and collect. Guests serve themselves using the guidance left with the display.",
  },
];

export const corporateFaqs = [
  {
    q: "Can you set up in an office building?",
    a: "Yes. We deliver to London workplaces and hired venues. Share access details, lift constraints and preferred timing with your enquiry.",
  },
  {
    q: "We only need a small amount of flowers — can a brand still book?",
    a: "Yes. Flower volume is set by your bouquet estimate, not by being a brand. For a compact activation, book The Little Bar or The Bloom Market (around 20–30 take-home bouquets). Want branded signage or packaging on a smaller setup? Tell us in your enquiry — we can quote branding as an add-on, or shape The Brand Market around a smaller bouquet number.",
  },
  {
    q: "Can the market include branded signage or packaging?",
    a: "The Brand Market includes branded finishing as standard, quoted around your artwork and timeline. Smaller unbranded packages (Little Bar / Bloom Market) stay simple by default; light branding can be added by quotation.",
  },
  {
    q: "Is this a taught workshop?",
    a: "No. Standard hire is a self-serve flower market after setup — not a sit-down floristry class. Assisted options can be discussed if you need extra support.",
  },
];

export const packageFaqs = [
  {
    q: "What do the package prices include?",
    a: "Starting prices are inclusive of the styled display, seasonal flowers for the bouquet allowance shown, wrapping materials, and delivery, setup and collection within our London service area.",
  },
  {
    q: "Is the price a setup fee plus per-person flower charges?",
    a: "No. The figures shown are inclusive package starting points for the bouquet allowances listed — not a separate setup fee plus per-person charges.",
  },
  {
    q: "We have 60–80 guests — can we still book the simple package?",
    a: "Yes. Guest count and bouquet count are different. Book the bouquet number you want to offer — The Little Bar (up to 20) is the simple, lower-cost option even for a larger room if not everyone takes a bouquet. Prefer flowers for more of the room? Choose 30 or 40, or ask us to quote above that.",
  },
  {
    q: "What if we need more than 40 bouquets?",
    a: "Tell us your numbers when you enquire and we will quote for a larger allowance, travel outside our usual area, or assisted staffing if needed.",
  },
];
