export type MarketId = "bloom" | "harvest" | "celebration";

export const markets = [
  {
    id: "bloom" as MarketId,
    name: "The Bloom Market",
    shortName: "Bloom",
    description:
      "A beautiful self-serve flower experience where guests can select stems, fill a picking basket and take home their own bouquet.",
    occasions: [
      "Bridal showers",
      "Weddings",
      "Private celebrations",
      "Brand experiences",
      "Press days",
      "Team events",
    ],
    accent: "#e6c7bd",
    accentSoft: "#f0d9d1",
  },
  {
    id: "harvest" as MarketId,
    name: "The Harvest Market",
    shortName: "Harvest",
    description:
      "An abundant market-style installation filled with fruit, vegetables, herbs or artisan produce—ideal for celebrations, hospitality and brand activations.",
    occasions: [
      "Hospitality events",
      "Summer celebrations",
      "Brand activations",
      "Wellness gatherings",
      "Editorial shoots",
      "Venue installations",
    ],
    accent: "#c55d48",
    accentSoft: "#e7c96b",
  },
  {
    id: "celebration" as MarketId,
    name: "The Celebration Market",
    shortName: "Celebration",
    description:
      "A personalised market display for favours, gifts, sweets, products and guest welcome items.",
    occasions: [
      "Wedding favours",
      "Guest welcome gifts",
      "Product launches",
      "Corporate gifting",
      "Seasonal celebrations",
      "Private events",
    ],
    accent: "#e7c96b",
    accentSoft: "#e6c7bd",
  },
];

export const hireOptions = [
  {
    id: "market-hire",
    name: "Market Hire",
    price: "From £275",
    note: "plus delivery",
    description:
      "We deliver and assemble the market structure and its standard accessories. You provide and arrange the contents.",
    includes: [
      "Market structure",
      "Standard display accessories",
      "Plain or Little Market Co. signage",
      "Setup and collection",
      "Personalised panels available as an add-on",
    ],
    cta: "Hire the Market",
    enquiryValue: "Market Hire",
  },
  {
    id: "styled-market",
    name: "Styled Market",
    price: "From £695",
    note: "plus delivery",
    description:
      "We personalise, source, fill and style everything to the agreed theme. Your market arrives completely ready for guests to enjoy.",
    includes: [
      "Market structure and accessories",
      "Styling and colour direction",
      "Personalised removable signage",
      "Agreed flowers, produce, favours or products",
      "Guest instruction signage",
      "Setup and collection",
    ],
    cta: "Have It Styled",
    enquiryValue: "Styled Market",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Choose your market",
    copy: "Select Bloom, Harvest or Celebration — three curated installations from one signature structure.",
  },
  {
    step: "02",
    title: "Choose how you book",
    copy: "Hire the equipment alone, or commission a fully personalised and styled market.",
  },
  {
    step: "03",
    title: "Personalise the details",
    copy: "Agree theme, colours, signage and — where required — the contents we source and arrange.",
  },
  {
    step: "04",
    title: "We deliver, set up and collect",
    copy: "Your installation arrives assembled and prepared, then we return at the agreed time for collection.",
  },
];

export const faqs = [
  {
    q: "Which areas do you cover?",
    a: "We deliver, set up and collect across London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm availability.",
  },
  {
    q: "What is the difference between Market Hire and Styled Market?",
    a: "Market Hire is the structure and standard accessories only — you provide and arrange the contents. Styled Market includes agreed personalisation, sourcing, filling and styling so the installation arrives ready for guests.",
  },
  {
    q: "Is delivery included?",
    a: "Delivery and collection are quoted according to location and access. Guide prices are shown plus delivery.",
  },
  {
    q: "Can we supply our own contents?",
    a: "Yes. Market Hire is designed for clients who wish to fill the installation themselves. With Styled Market you may still supply selected items; we agree the approach in advance.",
  },
  {
    q: "Can the market be personalised?",
    a: "Yes. Removable signage, campaign colours and branding can be added. Personalised panels are available as an add-on on Market Hire and included as agreed on Styled Market.",
  },
  {
    q: "Do contents affect the price?",
    a: "Yes. Final pricing depends on guest numbers, quantities, contents, location and personalisation. We never promise unlimited flowers, produce, favours or guest quantities.",
  },
  {
    q: "Will someone stay with the market during the event?",
    a: "Our standard service is unattended following setup. We deliver, assemble and prepare your market, provide clear guest instructions and return for collection. Optional attendants may be quoted separately where required.",
  },
  {
    q: "How long is the hire period?",
    a: "Standard hire covers the event day, with delivery and collection arranged around your schedule. Extended periods can be discussed.",
  },
  {
    q: "Is a damage deposit required?",
    a: "Yes. A refundable damage deposit is typically required and returned after collection, subject to the condition of the hire.",
  },
  {
    q: "Can you create branded installations for brands?",
    a: "Yes. Brand activations receive a tailored quote covering removable panels, campaign colours, custom packaging and personalised take-home details as agreed.",
  },
];

export const customerTypes = [
  "Private celebration",
  "Wedding",
  "Corporate event",
  "Venue",
  "Event planner or stylist",
  "Caterer",
  "Production or photography",
  "Other",
];

export const enquiryOptions = [
  "Market Hire",
  "Styled Market",
  "Brand activation",
  "Not sure yet",
];

export const enquiryMarkets = [
  "Bloom Market",
  "Harvest Market",
  "Celebration Market",
  "Bespoke idea",
];

export const personalisationChoices = [
  "No, keep it plain",
  "The Little Market Co. styling",
  "Personal event wording",
  "Corporate branding",
];

export const supplyingOwnChoices = ["Yes", "No", "Partly / to discuss"];

export const galleryItems = [
  {
    id: "g1",
    market: "bloom" as MarketId,
    title: "Self-serve stem station",
    caption: "Concept Preview — bloom market atmosphere",
  },
  {
    id: "g2",
    market: "bloom" as MarketId,
    title: "Ribbon and wrap detail",
    caption: "Concept Preview — finishing touches for take-home bouquets",
  },
  {
    id: "g3",
    market: "bloom" as MarketId,
    title: "Picking basket moment",
    caption: "Concept Preview — guests composing their own arrangements",
  },
  {
    id: "g4",
    market: "harvest" as MarketId,
    title: "Abundant produce installation",
    caption: "Concept Preview — market colour for hospitality settings",
  },
  {
    id: "g5",
    market: "harvest" as MarketId,
    title: "Herb and crate display",
    caption: "Concept Preview — curated harvest styling",
  },
  {
    id: "g6",
    market: "harvest" as MarketId,
    title: "Editorial market layout",
    caption: "Concept Preview — brand and press-day atmosphere",
  },
  {
    id: "g7",
    market: "celebration" as MarketId,
    title: "Favour presentation",
    caption: "Concept Preview — personalised guest gifts",
  },
  {
    id: "g8",
    market: "celebration" as MarketId,
    title: "Product welcome display",
    caption: "Concept Preview — launches and sampling",
  },
  {
    id: "g9",
    market: "celebration" as MarketId,
    title: "Seasonal celebration market",
    caption: "Concept Preview — gifts and welcome items",
  },
];
