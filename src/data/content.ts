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
    q: "How many guests can the flower bar accommodate?",
    a: "The Little Bar suits up to 20 guests, The Bloom Market up to 30 guests and The Brand Market up to 40 guests. Planning a larger event? We can create a bespoke quote for higher guest numbers or additional stations.",
  },
  {
    q: "How much does flower bar hire cost?",
    a: "Flower bar hire starts from £395. Flowers are then tailored to your guest numbers and chosen bouquet style. Package guides start from £495 for The Little Bar, £695 for The Bloom Market and £995 for The Brand Market. The final price depends on guests, flowers, location and branding.",
  },
  {
    q: "Do guests take the flowers home?",
    a: "Yes. Guests choose their favourite stems, create their own bouquet and take it home as a beautiful reminder of the event. That take-home moment is the heart of The Little Bloom Market.",
  },
  {
    q: "Do you provide wrapping?",
    a: "Yes. Every booking includes wrapping materials, ribbons and care cards so guests can finish their bouquets neatly. Premium and branded wrap options are available with higher packages.",
  },
  {
    q: "Do you stay during the event?",
    a: "Our standard service is unattended after setup. We deliver, assemble and prepare the market, leave clear guest instructions and return for collection. Optional florist assistance can be quoted separately if you would like someone on hand.",
  },
  {
    q: "Do you provide branded flower bars?",
    a: "Yes. The Brand Market includes a custom flower colour palette, branded market sign, stickers or tags and custom wrapping for activations, PR events and larger corporate bookings across London.",
  },
  {
    q: "Where do you cover?",
    a: "We deliver, set up and collect across London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm availability and timing.",
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
    imageAlt: "Seasonal flower stems arranged on a self-serve flower bar in London",
    width: 1200,
    height: 1200,
    title: "Self-serve stem station",
    caption: "Inspiration — seasonal stems ready for guests to select (not a previous client event)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g2",
    imageSrc: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
    imageWebp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
    imageAlt: "Bouquet wrapping paper and ribbon details for a London flower bar",
    width: 900,
    height: 1200,
    title: "Ribbon and wrap detail",
    caption: "Inspiration — finishing touches for take-home bouquets (stock photo)",
    credit: "Photo via Pexels",
  },
  {
    id: "g3",
    imageSrc: "/images/guests-making-bouquets-flower-market.jpg",
    imageWebp: "/images/guests-making-bouquets-flower-market.webp",
    imageAlt: "Guests making take-home bouquets at a flower market experience",
    width: 1200,
    height: 800,
    title: "Bouquet-making moment",
    caption: "Inspiration — the feel of wrapping a small bouquet to take home (stock photo)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g4",
    imageSrc: "/images/london-corporate-flower-bar-office-event.jpg",
    imageWebp: "/images/london-corporate-flower-bar-office-event.webp",
    imageAlt: "Corporate flower bar styled for an office event in London",
    width: 1200,
    height: 800,
    title: "Office flower market",
    caption: "Inspiration — workplace and celebration gatherings (not a previous client event)",
    credit: "Photo via Pexels",
  },
  {
    id: "g5",
    imageSrc: "/images/branded-flower-bar-product-launch-london.jpg",
    imageWebp: "/images/branded-flower-bar-product-launch-london.webp",
    imageAlt: "Branded flower bar styling for a product launch in London",
    width: 1200,
    height: 1600,
    title: "Brand activation styling",
    caption: "Inspiration — photography-ready floral detail for campaigns (stock photo)",
    credit: "Photo via Unsplash",
  },
  {
    id: "g6",
    imageSrc: "/images/christmas-flower-bar-winter-blooms-london.jpg",
    imageWebp: "/images/christmas-flower-bar-winter-blooms-london.webp",
    imageAlt: "Winter blooms suited to a Christmas flower bar in London",
    width: 1200,
    height: 800,
    title: "Seasonal atmosphere",
    caption: "Inspiration — festive stems and seasonal foliage (stock photo)",
    credit: "Photo via Unsplash",
  },
];
