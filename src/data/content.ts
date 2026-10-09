/** Kept for modular stall visuals — not advertised publicly. */
export type MarketId = "bloom" | "harvest" | "celebration";

export const bloomMarket = {
  id: "bloom" as const,
  name: "The Little Bloom Market",
  shortName: "Bloom Market",
  description:
    "A premium self-serve flower bar hire for London weddings, birthdays, corporate events and brand activations. We deliver it fully styled and ready for guests. Guests select stems, wrap a small bouquet and take it home. We return later to collect the structure.",
  occasions: [
    "Weddings & bridal showers",
    "Birthday celebrations",
    "Corporate offices",
    "Brand activations",
    "Christmas parties",
    "Private celebrations",
  ],
  secondaryUses: ["Hen dos", "Baby showers", "PR & press days"],
  accent: "#d8b4b2",
  accentSoft: "#f3e7e1",
};

/** Occasion pages for SEO and clear hire intent. */
export const hireOccasions = [
  {
    id: "weddings",
    title: "Wedding flower bar hire",
    copy: "A beautiful self-serve moment for bridal showers, welcome drinks or reception guests — each person leaves with a small bouquet.",
  },
  {
    id: "birthdays",
    title: "Birthday flower bar hire",
    copy: "Give guests a hands-on celebration activity that feels special, photogenic and personal without running a full workshop.",
  },
  {
    id: "corporate",
    title: "Corporate & office events",
    copy: "Ideal for workplace celebrations, People-team gatherings and client entertaining across London offices.",
  },
  {
    id: "private",
    title: "Private parties & celebrations",
    copy: "Hen dos, baby showers and intimate gatherings where guests can build their own bouquet to take home.",
  },
];

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

/** Curated stem mixes for self-serve bouquet bars — seasonal substitutions may apply. */
export const flowerPalettes = [
  {
    id: "soft-blush",
    name: "Soft Blush",
    tagline: "Romantic, warm and easy for guests to arrange.",
    bestFor: "Office celebrations, bridal showers, beauty events",
    colours: ["#f3e7e1", "#d8b4b2", "#a86b6f", "#2a4336"],
    heroes: ["Spray roses", "Lisianthus", "Ranunculus (in season)"],
    fillers: ["Alstroemeria", "Stock"],
    foliage: ["Eucalyptus", "Ruscus"],
    accent: "Waxflower",
    guestGuide: "Pick 8–12 stems, add foliage, wrap and finish with ribbon.",
    enquiryValue: "Soft Blush",
  },
  {
    id: "neutral-luxe",
    name: "Neutral Luxe",
    tagline: "Cream, white and soft green for a polished corporate look.",
    bestFor: "Boardrooms, client entertaining, brand activations",
    colours: ["#f6f1e8", "#efe6d6", "#cbb892", "#2a4336"],
    heroes: ["White / cream roses", "Lisianthus", "Carnations"],
    fillers: ["Chrysanthemums", "Snapdragons"],
    foliage: ["Eucalyptus", "Pittosporum"],
    accent: "Thistle or dried texture",
    guestGuide: "Start with foliage, add 2–3 hero stems, then fillers.",
    enquiryValue: "Neutral Luxe",
  },
  {
    id: "winter-bloom",
    name: "Winter Bloom",
    tagline: "Festive stems for Christmas parties and seasonal gifting.",
    bestFor: "December offices, client gifts, winter brand moments",
    colours: ["#f6f1e8", "#2a4336", "#a86b6f", "#cbb892"],
    heroes: ["Cream roses or spray roses", "Seasonal white blooms"],
    fillers: ["Hypericum berries", "Skimmia"],
    foliage: ["Eucalyptus", "Fir or pine touches"],
    accent: "Deep ribbon, optional dried orange",
    guestGuide: "Choose a few winter stems, add greenery, wrap with festive ribbon.",
    enquiryValue: "Winter Bloom",
  },
] as const;

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
    q: "Can guests really build their own bouquets?",
    a: "Yes. That is the heart of The Little Bloom Market. We prepare a curated stem selection with foliage, wrapping and simple guest instructions so people can create a small bouquet to take home — without needing a full workshop.",
  },
  {
    q: "What flower palettes do you offer?",
    a: "We currently prepare Soft Blush, Neutral Luxe and Winter Bloom palettes. Each includes hero flowers, fillers, foliage and an accent. Seasonal substitutions may apply so stems stay fresh on the day.",
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
    a: "Standard hire includes same-day setup and collection, with guests usually enjoying the market for around 4–6 hours. Next-morning collection or extended hire can be quoted if needed.",
  },
  {
    q: "Do you hire flower bars for weddings and birthdays?",
    a: "Yes. The Little Bloom Market works beautifully for weddings, bridal showers, birthdays, hen dos and private celebrations, as well as corporate and Christmas events across London.",
  },
  {
    q: "Is a damage deposit required?",
    a: "Yes. A refundable damage deposit is typically required and returned after collection, subject to the condition of the hire.",
  },
];

export const eventTypes = [
  "Wedding / bridal shower",
  "Birthday celebration",
  "Private party / hen do",
  "Corporate office / workplace",
  "Brand activation",
  "PR / press day",
  "Product launch",
  "Christmas / seasonal party",
  "Other",
];

export const packageChoices = [
  "Styled Bloom Market",
  "Branded Bloom Market",
  "Not sure yet",
];

export const yesNoChoices = ["Yes", "No"] as const;

/**
 * Gallery items use licensed stock for atmosphere only.
 * Replace `imageSrc` with real event photography when available.
 * Captions must never imply previous client bookings.
 */
export type GalleryItem = {
  id: string;
  /** Photo path under /public */
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
    caption: "Inspiration — workplace and People-team gatherings (not a previous client event)",
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
    title: "Winter Bloom atmosphere",
    caption: "Inspiration — festive stems and seasonal foliage (stock photo)",
    credit: "Photo via Unsplash",
  },
];
