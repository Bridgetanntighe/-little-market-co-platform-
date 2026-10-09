/** Kept for modular stall visuals — not advertised publicly. */
export type MarketId = "bloom" | "harvest" | "celebration";

export const bloomMarket = {
  id: "bloom" as const,
  name: "The Little Bloom Market",
  shortName: "Bloom Market",
  description:
    "A beautifully styled, self-serve flower experience. Guests choose seasonal stems, wrap their own bouquet and take it home. We deliver it ready, then return later to collect the structure.",
  accent: "#d8b4b2",
  accentSoft: "#f3e7e1",
};

export const hireOptions = [
  {
    id: "little-bar",
    name: "The Little Bar",
    price: "From £495",
    note: "For smaller offices, dinners and private events.",
    description: "A compact self-serve flower station for more intimate gatherings.",
    includes: [
      "Up to 20 guests",
      "Compact self-serve flower station",
      "Seasonal flowers and foliage",
      "Kraft wrapping paper and ribbon",
      "Flower care cards",
      "Delivery, setup and collection",
    ],
    cta: "Enquire about The Little Bar",
    enquiryValue: "The Little Bar",
    popular: false,
  },
  {
    id: "bloom-market",
    name: "The Bloom Market",
    price: "From £695",
    note: "Our most popular option for office events, celebrations and launches.",
    description: "A fuller styled flower market with a more generous stem selection.",
    includes: [
      "Up to 30 guests",
      "Larger selection of seasonal flowers",
      "More generous stems per guest",
      "Styled flower market display",
      "Choice of colour palette",
      "Premium wrapping materials",
      "Delivery, setup and collection",
    ],
    cta: "Enquire about The Bloom Market",
    enquiryValue: "The Bloom Market",
    popular: true,
  },
  {
    id: "brand-market",
    name: "The Brand Market",
    price: "From £995",
    note: "For brand activations, PR events and larger corporate events.",
    description: "A bespoke branded flower market matched to your campaign.",
    includes: [
      "Up to 40 guests",
      "Custom flower colour palette",
      "Branded market sign",
      "Branded stickers or tags",
      "Custom wrapping",
      "Bespoke flower selection",
      "Delivery, styling and collection",
    ],
    cta: "Create a branded market",
    enquiryValue: "The Brand Market",
    popular: false,
  },
];

export const colourStories = [
  {
    id: "soft-meadow",
    name: "Soft Meadow",
    colours: ["#f3e7e1", "#e8c9b8", "#f0d9a8", "#c5d4b8"],
    copy: "Cream, blush, peach, pale yellow and soft green.",
    bestFor: "Perfect for offices, daytime events and private celebrations.",
    enquiryValue: "Soft Meadow",
  },
  {
    id: "colour-pop",
    name: "Colour Pop",
    colours: ["#e8a0b0", "#e07a5f", "#f2b705", "#9b5de5", "#70c1a0"],
    copy: "Pink, coral, orange, yellow, purple and bright green.",
    bestFor: "Perfect for launches, summer parties and energetic brand activations.",
    enquiryValue: "Colour Pop",
  },
  {
    id: "modern-neutral",
    name: "Modern Neutral",
    colours: ["#f6f1e8", "#efe6d6", "#d4b59e", "#c4785a", "#6b7c59"],
    copy: "White, cream, beige, terracotta and olive.",
    bestFor: "Perfect for premium brands, dinners and understated events.",
    enquiryValue: "Modern Neutral",
  },
  {
    id: "seasonal-market",
    name: "Seasonal Market",
    colours: ["#cbb892", "#a86b6f", "#2a4336", "#d8b4b2"],
    copy: "A seasonal palette selected around the time of year.",
    bestFor:
      "Spring: lilac, yellow and soft pink. Summer: coral, peach and bright yellow. Autumn: rust, burgundy and mustard. Winter: cream, red, forest green and plum.",
    enquiryValue: "Seasonal Market",
  },
  {
    id: "brand-match",
    name: "Brand Match",
    colours: ["#2a4336", "#f6f1e8", "#a86b6f", "#cbb892"],
    copy: "Flowers, wrapping and signage matched to your brand colours.",
    bestFor: "Available with The Brand Market.",
    enquiryValue: "Brand Match",
  },
];

export const memorableMoments = [
  "Office wellbeing",
  "Brand activation",
  "Product launch",
  "Christmas party",
  "Summer party",
  "Wedding or private celebration",
  "Press or PR event",
  "Client gifting",
  "Team away day",
];

export const howItWorks = [
  {
    step: "01",
    title: "Choose your package",
    copy: "Select The Little Bar, The Bloom Market or The Brand Market to suit your guest numbers and style of event.",
  },
  {
    step: "02",
    title: "Choose your colour story",
    copy: "Soft Meadow, Colour Pop, Modern Neutral, Seasonal Market or a Brand Match palette for your campaign.",
  },
  {
    step: "03",
    title: "We deliver, style and collect",
    copy: "Guests choose their favourite stems, create their own bouquet and take it home as a beautiful reminder of the event.",
  },
];

export const everyBookingIncludes = [
  "Fresh seasonal flowers",
  "Flower market display",
  "Wrapping materials",
  "Ribbons",
  "Care cards",
  "Delivery and setup",
  "Collection after the event",
];

export const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We deliver, set up and collect across London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm availability.",
  },
  {
    q: "What is The Little Bloom Market?",
    a: "It is a self-serve flower bar experience. Guests choose seasonal stems, wrap their own bouquet and take it home. We deliver it fully styled, then return later to collect the structure.",
  },
  {
    q: "What does the from £395 price mean?",
    a: "Flower bar hire starts from £395. Flowers are then tailored to your guest numbers and chosen bouquet style, so the final quote depends on guests, flowers, location and branding.",
  },
  {
    q: "How do package prices work?",
    a: "The Little Bar starts from £495 for up to 20 guests, The Bloom Market from £695 for up to 30 guests, and The Brand Market from £995 for up to 40 guests. Larger events and extras are quoted separately.",
  },
  {
    q: "How long is the hire period?",
    a: "Standard hire includes same-day setup and collection, with guests usually enjoying the market for around 4–6 hours. Next-morning collection or extended hire can be quoted if needed.",
  },
  {
    q: "Do you hire flower bars for weddings and birthdays?",
    a: "Yes. The Little Bloom Market works beautifully for weddings, private celebrations, birthdays and corporate events across London.",
  },
  {
    q: "Will someone stay with the market during the event?",
    a: "Our standard service is unattended following setup. We deliver, assemble and prepare the market, provide clear guest instructions and return for collection. Optional florist assistance may be quoted separately.",
  },
  {
    q: "Is a damage deposit required?",
    a: "Yes. A refundable damage deposit is typically required and returned after collection, subject to the condition of the hire.",
  },
];

export const eventTypes = [
  "Office wellbeing",
  "Brand activation",
  "Product launch",
  "Christmas party",
  "Summer party",
  "Wedding or private celebration",
  "Press or PR event",
  "Client gifting",
  "Team away day",
  "Other",
];

export const packageChoices = [
  "The Little Bar",
  "The Bloom Market",
  "The Brand Market",
  "I’m not sure yet",
];

export const colourStoryChoices = [
  "Soft Meadow",
  "Colour Pop",
  "Modern Neutral",
  "Seasonal Market",
  "Brand Match",
  "I’m not sure yet",
];

/**
 * Gallery items use licensed stock for atmosphere only.
 * Captions must never imply previous client bookings.
 */
export type GalleryItem = {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  caption: string;
  credit: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    imageSrc: "/images/inspiration/flower-stems.jpg",
    imageAlt: "Inspiration image of seasonal flower stems arranged for guests to choose",
    title: "Self-serve stem station",
    caption: "Inspiration — seasonal stems ready for guests to select (not a previous client event)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g2",
    imageSrc: "/images/inspiration/bouquet-wrap.jpg",
    imageAlt: "Inspiration image of bouquet wrapping paper and ribbon details",
    title: "Ribbon and wrap detail",
    caption: "Inspiration — finishing touches for take-home bouquets (stock photo)",
    credit: "Photo via Pexels",
  },
  {
    id: "g3",
    imageSrc: "/images/inspiration/bouquet-moment.jpg",
    imageAlt: "Inspiration image of pink blooms suggesting a bouquet-making moment",
    title: "Bouquet-making moment",
    caption: "Inspiration — the feel of wrapping a small bouquet to take home (stock photo)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g4",
    imageSrc: "/images/inspiration/office-flowers.jpg",
    imageAlt: "Inspiration image of flowers suited to a workplace gathering",
    title: "Office flower market",
    caption: "Inspiration — workplace and celebration gatherings (not a previous client event)",
    credit: "Photo via Pexels",
  },
  {
    id: "g5",
    imageSrc: "/images/inspiration/brand-styling.jpg",
    imageAlt: "Inspiration image of a styled bouquet for a brand or campaign moment",
    title: "Brand activation styling",
    caption: "Inspiration — photography-ready floral detail for campaigns (stock photo)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g6",
    imageSrc: "/images/inspiration/winter-blooms.jpg",
    imageAlt: "Inspiration image of winter foliage and seasonal blooms",
    title: "Seasonal atmosphere",
    caption: "Inspiration — festive stems and seasonal foliage (stock photo)",
    credit: "Photo via Unsplash",
  },
];
