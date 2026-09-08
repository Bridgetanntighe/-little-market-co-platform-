/** Kept for modular stall visuals — not advertised publicly. */
export type MarketId = "bloom" | "harvest" | "celebration";

export const bloomMarket = {
  id: "bloom" as const,
  name: "The Little Bloom Market",
  shortName: "Bloom Market",
  description:
    "A premium self-serve flower market delivered to London offices, events and brand activations. We deliver it fully styled and ready for guests. Guests select stems, wrap a small bouquet and take it home. We return later to collect the structure.",
  occasions: [
    "Corporate offices",
    "Workplace & People teams",
    "Brand activations",
    "PR & experiential",
    "Beauty, fashion & wellness",
    "Event planners",
  ],
  secondaryUses: ["Private celebrations", "Weddings"],
  accent: "#e6c7bd",
  accentSoft: "#f0d9d1",
};

export const experienceBenefits = [
  {
    title: "A memorable guest activity",
    copy: "Guests select seasonal stems and create their own small bouquet — a hands-on moment that feels considered, not staged.",
  },
  {
    title: "A styled feature for the event",
    copy: "The market arrives as a finished floral installation, prepared around your event or brand palette.",
  },
  {
    title: "A bouquet for every guest",
    copy: "Everyone leaves with a wrapped take-home gift, without needing a full-length workshop.",
  },
];

export const hireOptions = [
  {
    id: "styled-bloom",
    name: "Styled Bloom Market",
    price: "From £695",
    note: "for up to 20 guests",
    description:
      "The Little Bloom Market delivered, styled and ready for guests — with curated flowers, wrapping and clear instructions.",
    includes: [
      "The Little Bloom Market structure",
      "Curated seasonal flowers and foliage",
      "Wrapping paper and ribbon",
      "Coordinated styling",
      "Guest instruction signage",
      "Delivery setup and later collection",
      "A choice of curated colour palette",
    ],
    cta: "Check Availability",
    enquiryValue: "Styled Bloom Market",
  },
  {
    id: "branded-bloom",
    name: "Branded Bloom Market",
    price: "From £895",
    note: "for up to 20 guests",
    description:
      "Everything in the Styled Bloom Market, with brand-led styling suited to launches, press days and customer gifting.",
    includes: [
      "Everything in the Styled Bloom Market",
      "Removable logo signage",
      "Brand or campaign colour direction",
      "Personalised bouquet tags or stickers",
      "Branded wrapping details",
      "Styling suitable for content and photography",
      "Support for launches, press days and customer gifting",
    ],
    cta: "Plan a Brand Activation",
    enquiryValue: "Branded Bloom Market",
  },
];

export const winterBloom = {
  heading: "The Winter Bloom Market",
  lead: "A festive self-serve flower experience for office Christmas celebrations, client gifting and seasonal brand activations.",
  copy: "Guests can drop in, select winter-inspired stems and foliage, wrap their bouquet and add a ribbon or message card. It gives them a thoughtful gift to take home without requiring a full-length workshop.",
  includes: [
    "Curated winter flower palette",
    "Seasonal foliage",
    "Bouquet wrapping and ribbon",
    "Optional company branding",
    "Message cards or personalised tags",
    "Full setup and collection",
    "Suitable for approximately 20 guests upwards",
  ],
  cta: "Check December Availability",
};

export const howItWorks = [
  {
    step: "01",
    title: "Tell us about your event",
    copy: "Share the date, location, guest number and the experience you are planning.",
  },
  {
    step: "02",
    title: "Choose your package",
    copy: "Select the Styled Bloom Market or a fully branded activation.",
  },
  {
    step: "03",
    title: "We prepare every detail",
    copy: "We source and condition the flowers then prepare the wrapping, signage and styling.",
  },
  {
    step: "04",
    title: "We deliver and collect",
    copy: "The market is assembled before guests arrive and collected at the agreed time.",
  },
];

export const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We deliver, set up and collect across London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm availability.",
  },
  {
    q: "What is The Little Bloom Market?",
    a: "It is a premium self-serve flower market. Guests select seasonal stems, wrap a small bouquet and take it home. We deliver it fully styled, then return later to collect the structure.",
  },
  {
    q: "What is the difference between Styled and Branded?",
    a: "Styled Bloom Market includes the structure, curated flowers, wrapping, styling, signage, setup and collection. Branded Bloom Market adds logo signage, campaign colour direction, personalised tags or stickers and wrapping details suited to launches and press days.",
  },
  {
    q: "Is delivery included?",
    a: "Delivery is calculated according to location and access. Guide package prices are shown from the base guest number; delivery is quoted separately.",
  },
  {
    q: "Can the market be personalised for a brand?",
    a: "Yes. Removable logo panels, campaign colours, branded bouquet sleeves, tags and custom guest messaging can all be coordinated with your campaign.",
  },
  {
    q: "Do guest numbers affect the price?",
    a: "Yes. Packages start from pricing for up to 20 guests. Additional guests, premium flower requests and extended hire can be quoted separately.",
  },
  {
    q: "Will someone stay with the market during the event?",
    a: "Our standard service is unattended following setup. We deliver, assemble and prepare the market, provide clear guest instructions and return for collection. Optional attendants may be quoted separately where required.",
  },
  {
    q: "Do you offer a Christmas version?",
    a: "Yes. The Winter Bloom Market is designed for office Christmas celebrations, client gifting and seasonal brand activations, with a winter flower palette and optional company branding.",
  },
  {
    q: "How long is the hire period?",
    a: "Standard hire covers the event day, with delivery and collection arranged around your schedule. Extended periods can be discussed.",
  },
  {
    q: "Is a damage deposit required?",
    a: "Yes. A refundable damage deposit is typically required and returned after collection, subject to the condition of the hire.",
  },
];

export const eventTypes = [
  "Corporate office / workplace",
  "Brand activation",
  "PR / press day",
  "Product launch",
  "Private celebration",
  "Wedding",
  "Other",
];

export const packageChoices = [
  "Styled Bloom Market",
  "Branded Bloom Market",
  "Not sure yet",
];

export const yesNoChoices = ["Yes", "No"] as const;

/**
 * Gallery items are concept previews only.
 * Replace `imageSrc` with real event photography when available;
 * leave undefined to keep the atmospheric placeholder treatment.
 */
export type GalleryItem = {
  id: string;
  /** Optional real photo path under /public — swap in when ready */
  imageSrc?: string;
  imageAlt: string;
  title: string;
  caption: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    imageAlt: "Concept preview of a self-serve flower bar with seasonal stems",
    title: "Self-serve stem station",
    caption: "Concept preview — guests choosing seasonal stems",
  },
  {
    id: "g2",
    imageAlt: "Concept preview of bouquet wrapping paper and ribbon details",
    title: "Ribbon and wrap detail",
    caption: "Concept preview — finishing touches for take-home bouquets",
  },
  {
    id: "g3",
    imageAlt: "Concept preview of guests composing small take-home bouquets",
    title: "Bouquet-making moment",
    caption: "Concept preview — wrapping a small bouquet to take home",
  },
  {
    id: "g4",
    imageAlt: "Concept preview of The Little Bloom Market styled for a London office event",
    title: "Office flower market",
    caption: "Concept preview — workplace and People-team gatherings",
  },
  {
    id: "g5",
    imageAlt: "Concept preview of a branded flower bar for a campaign activation",
    title: "Brand activation styling",
    caption: "Concept preview — campaign colours and photography-ready detail",
  },
  {
    id: "g6",
    imageAlt: "Concept preview of a winter flower market with seasonal foliage",
    title: "Winter Bloom atmosphere",
    caption: "Concept preview — festive stems and seasonal foliage",
  },
];
