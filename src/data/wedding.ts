import { floralCollections, hireOptions } from "./content";

/** Reuse homepage package data so wedding prices cannot drift. */
export const weddingPackages = hireOptions;

export const weddingPalettes = floralCollections.map((collection) => ({
  id: collection.id,
  name: collection.name,
  copy: collection.copy,
  enquiryValue: collection.enquiryValue,
}));

export const weddingSteps = [
  {
    step: "01",
    title: "Choose your flowers",
    copy: "Guests browse seasonal stems and pick the colours that catch their eye.",
  },
  {
    step: "02",
    title: "Wrap your bouquet",
    copy: "Wrap and ribbon are ready and easy to use — each guest gathers a little bouquet at their own pace.",
  },
  {
    step: "03",
    title: "Take a little of the celebration home",
    copy: "A beautiful reminder of your day — and a wedding favour that feels personal.",
  },
];

export const weddingIncludes = [
  "A styled flower market display",
  "Prepared seasonal flowers and foliage",
  "Easy wrap and ribbon for self-serve take-home",
  "Simple instructions for guests",
  "Flower care cards",
  "Setup and collection",
];

export const weddingTouches = [
  {
    title: "Personalised welcome sign",
    copy: "A styled welcome note for your flower market, quoted to suit your wording.",
  },
  {
    title: "Names and wedding date on tags",
    copy: "Bouquet tags with your names and date — available by quotation.",
  },
  {
    title: "Ribbon to complement your colours",
    copy: "Ribbon chosen to sit with your palette — wrap stays simple so guests can take bouquets home easily.",
  },
  {
    title: "A custom flower palette",
    copy: "Seasonal stems suggested around the colours you’re planning.",
  },
];

export const weddingFaqs = [
  {
    q: "Can guests take their bouquets home?",
    a: "Yes. Guests choose stems, wrap a bouquet and take it home as a beautiful reminder of your celebration.",
  },
  {
    q: "Is the flower bar self-serve?",
    a: "Our standard experience is self-serve after setup. We deliver, style the market and leave clear guest guidance, then return for collection. Assisted options can be discussed when you enquire.",
  },
  {
    q: "How many bouquets should we book?",
    a: "Packages include up to 20, 30 or 40 take-home bouquets — not unlimited guest participation. Your wedding can have more guests than bouquets; for example, a 100-person wedding might book 30 bouquets for a selected group. Tell us how many bouquets you would like to provide and we will quote accordingly.",
  },
  {
    q: "Can you match our wedding colours?",
    a: "We can suggest seasonal flowers around Soft Meadow, Modern Neutral, Colour Pop or your own palette. Exact varieties depend on season and availability.",
  },
  {
    q: "How much space does the display need?",
    a: "Space needs vary by package and venue layout. Share your floorplan or a few photos when you enquire and we will advise on a comfortable footprint for guests.",
  },
  {
    q: "Can it be set up outdoors?",
    a: "Outdoor setups can be considered depending on weather protection, access and ground surface. Tell us about your venue and we will confirm what is practical for your date.",
  },
  {
    q: "Do you deliver, set up and collect?",
    a: "Yes. Delivery, setup and collection across London and surrounding areas are included with every booking. Share your venue or postcode so we can confirm timing.",
  },
];

export const weddingImages = [
  {
    src: "/images/seasonal-flower-stems-self-serve-bar-london.jpg",
    webp: "/images/seasonal-flower-stems-self-serve-bar-london.webp",
    alt: "Styling concept of a complete self-serve flower market display with seasonal stems",
    caption: "Styling concept — complete flower market setup (inspiration image, not a previous booking)",
    width: 1200,
    height: 1200,
  },
  {
    src: "/images/guests-making-bouquets-flower-market.jpg",
    webp: "/images/guests-making-bouquets-flower-market.webp",
    alt: "Styling concept close-up of a takeaway bouquet of seasonal blooms",
    caption: "Styling concept — takeaway bouquet moment (stock inspiration)",
    width: 1200,
    height: 800,
  },
  {
    src: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
    webp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
    alt: "Styling concept of bouquet wrapping paper and ribbon for personalised wedding tags",
    caption: "Styling concept — wrapping and ribbon details for personalised tags (stock inspiration)",
    width: 900,
    height: 1200,
  },
];
