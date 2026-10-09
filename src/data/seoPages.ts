import { hireOptions } from "./content";
import { SITE_URL } from "./site";

export type SeoFaq = { q: string; a: string };

export type SeoPageContent = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  packageIds: string[];
  faqs: SeoFaq[];
  image: {
    src: string;
    webp: string;
    alt: string;
    width: number;
    height: number;
  };
  related: { to: string; label: string }[];
};

const packageLookup = Object.fromEntries(hireOptions.map((p) => [p.id, p]));

export function packagesFor(ids: string[]) {
  return ids.map((id) => packageLookup[id]).filter(Boolean);
}

export const seoPages: SeoPageContent[] = [
  {
    slug: "flower-bar-hire-london",
    path: "/flower-bar-hire-london",
    title: "Flower Bar Hire London | Self-Serve Bloom Market | The Little Market Co",
    description:
      "Book flower bar hire in London for parties, weddings and celebrations. Guests choose stems, wrap a bouquet and take it home. Delivered, styled and collected across London.",
    h1: "Flower bar hire in London",
    intro:
      "Looking for flower bar hire in London that feels warm, styled and memorable? The Little Market Co brings The Little Bloom Market to your venue — a self-serve flower experience where guests build their own bouquet and take it home as a lasting reminder of the day.",
    sections: [
      {
        heading: "What is a self-serve flower bar?",
        paragraphs: [
          "A flower bar is a styled station of seasonal stems, foliage, wrapping paper, ribbon and care cards. Guests browse the display, choose their favourite flowers and create a small bouquet at their own pace. It is more interactive than a traditional centrepiece and more personal than a simple gift bag.",
          "Our flower market hire London service is designed for venues that want atmosphere without asking hosts to source flowers, vases or florist staffing for the whole evening. We deliver the market ready to enjoy, then return later to collect the structure so your team can focus on guests.",
        ],
      },
      {
        heading: "Ideal for celebrations across Greater London",
        paragraphs: [
          "We support private celebrations, birthdays, engagement parties, bridal showers and intimate wedding moments across London and surrounding areas. Whether your event is in a Shoreditch loft, a West London garden room or a riverside hotel suite, the market is styled to feel editorial and inviting.",
          "If you are comparing bouquet bar hire London options, our approach keeps the experience self-serve after setup. Guests leave with flowers; you leave with photographs that feel alive. For larger guest lists we can discuss a bespoke quote, florist assistance or an expanded stem selection.",
        ],
      },
      {
        heading: "How booking works",
        paragraphs: [
          "Share your date, venue postcode and approximate guest numbers. We recommend a package — The Little Bar, The Bloom Market or The Brand Market — and a colour story that suits the mood of your event. Flower bar hire starts from £395, with flowers tailored to guest numbers and bouquet style so the final quote stays transparent.",
          "On the day we arrive to set up, check stem freshness and leave clear guest guidance. After the event we collect the market structure. Wrapping materials, ribbons and care cards are included with every booking so guests can finish their bouquets beautifully.",
        ],
      },
      {
        heading: "Why hosts choose The Little Market Co",
        paragraphs: [
          "Hosts tell us they want something guests will talk about without turning the party into a formal workshop. Our self-serve format keeps the energy light: people gather, choose stems and wrap together. It works as a welcome activity, a mid-event moment or a take-home thank you at the end of the night.",
          "Explore our packages on the homepage, or read about corporate flower experiences and branded flower bar hire if your celebration sits alongside a company event. For festive dates, our Christmas flower bar page covers seasonal palettes and December booking tips.",
        ],
      },
    ],
    packageIds: ["little-bar", "bloom-market", "brand-market"],
    faqs: [
      {
        q: "What does flower bar hire in London include?",
        a: "Every booking includes seasonal flowers, a styled market display, wrapping materials, ribbons, care cards, delivery, setup and collection after the event across London and surrounding areas.",
      },
      {
        q: "How many guests suit each package?",
        a: "The Little Bar suits up to 20 guests, The Bloom Market up to 30 guests and The Brand Market up to 40 guests. Larger events can be quoted separately.",
      },
      {
        q: "Do you cover venues outside Zone 1?",
        a: "Yes. We deliver across Greater London and surrounding areas. Share your venue or postcode with your enquiry and we will confirm travel and timing.",
      },
      {
        q: "Is the flower bar attended?",
        a: "Standard hire is unattended after setup. We assemble the market, leave guest instructions and return for collection. Optional florist assistance can be quoted if you need extra support.",
      },
      {
        q: "Can guests take flowers home?",
        a: "Yes. The take-home bouquet is the heart of the experience. Guests choose stems, wrap their bouquet and leave with a beautiful reminder of the event.",
      },
      {
        q: "How far in advance should we book?",
        a: "Popular Fridays, Saturdays and December dates book early. Share your preferred date as soon as you can and we will check availability.",
      },
    ],
    image: {
      src: "/images/guests-making-bouquets-flower-market.jpg",
      webp: "/images/guests-making-bouquets-flower-market.webp",
      alt: "Guests making take-home bouquets at a styled flower market bar in London",
      width: 1200,
      height: 800,
    },
    related: [
      { to: "/corporate-flower-bar-london", label: "corporate flower experiences" },
      { to: "/brand-activation-flower-bar", label: "branded flower bar hire" },
      { to: "/christmas-flower-bar-london", label: "Christmas flower bar" },
      { to: "/flower-workshop-london", label: "bouquet-making workshops" },
    ],
  },
  {
    slug: "corporate-flower-bar-london",
    path: "/corporate-flower-bar-london",
    title: "Corporate Flower Bar London | Office Events & Team Experiences",
    description:
      "Book a corporate flower bar in London for office wellbeing days, client entertainment and team celebrations. A polished self-serve bloom market delivered to your workplace.",
    h1: "Corporate flower bar hire in London",
    intro:
      "A corporate flower bar London experience gives teams something tangible to make together — without the formality of a long workshop. The Little Market Co styles a self-serve bloom market in your office or hired venue so colleagues can choose stems, wrap a bouquet and take a moment of calm during a busy calendar.",
    sections: [
      {
        heading: "An office flower activity that feels premium",
        paragraphs: [
          "Wellbeing budgets often fund snacks or speaker talks. An office flower activity stands out because everyone leaves with something they created. Our market arrives styled with seasonal flowers and clear guidance, so people can join for five minutes or linger longer between meetings.",
          "We work with people teams, office managers and agency producers across London. Typical formats include lunchtime wellbeing hours, Friday socials, client thank-you evenings and away-day soft landings. The setup is compact enough for meeting rooms and reception spaces, yet photogenic enough for internal channels.",
        ],
      },
      {
        heading: "Built for workplaces and hired venues",
        paragraphs: [
          "Tell us about access, lift constraints and preferred timing. We schedule delivery and collection around your building rules and security process. Flower market hire London for corporates usually runs as a same-day hire with guests enjoying the market for around four to six hours.",
          "If your headcount is closer to twenty, The Little Bar keeps the station intimate. For thirty guests, The Bloom Market is our most popular workplace option with a larger stem selection and palette choice. Need brand colours on signage or wrap? Pair the experience with our branded flower bar packages.",
        ],
      },
      {
        heading: "Clear pricing for finance teams",
        paragraphs: [
          "Flower bar hire starts from £395. Flowers are then tailored to guest numbers and bouquet style, so a thirty-person office event is quoted on stems and wrap rather than a vague lump sum. Mini bouquet allowances from £18 per guest and fuller allowances from £25 per guest are guides only — your final quote reflects the event.",
          "We can invoice companies, work with purchase orders where agreed, and recommend a package that matches your budget band. Share approximate guest numbers and we will outline options before you commit.",
        ],
      },
      {
        heading: "Related experiences",
        paragraphs: [
          "Planning a launch rather than a team social? See our brand activation flower bar page. Hosting a festive party? Explore the Christmas flower bar. For private celebrations outside the office, start with flower bar hire in London on our dedicated page, or jump to packages on the homepage.",
        ],
      },
    ],
    packageIds: ["little-bar", "bloom-market", "brand-market"],
    faqs: [
      {
        q: "Can you set up inside an office building?",
        a: "Yes. We regularly deliver to London workplaces. Share loading bay details, lift access and security requirements so we can plan setup smoothly.",
      },
      {
        q: "How long does a corporate flower bar stay on site?",
        a: "Most office bookings enjoy the market for around 4–6 hours on the same day, with collection afterwards. Extended or next-morning collection can be quoted if needed.",
      },
      {
        q: "Is this suitable for client entertainment?",
        a: "Absolutely. A styled flower market feels generous and interactive for client evenings, press previews and partner thank-yous across London.",
      },
      {
        q: "Do you need a florist on site the whole time?",
        a: "Not for our standard service. We set up, leave instructions and collect later. Optional florist assistance is available as a quoted add-on.",
      },
      {
        q: "Can we match company colours?",
        a: "Yes. Soft Meadow, Modern Neutral and Brand Match palettes work especially well for workplaces. Full brand wrap and signs sit under The Brand Market.",
      },
      {
        q: "What guest numbers work best?",
        a: "Twenty to forty guests is the sweet spot for our core packages. Larger teams can be planned with a bespoke quote.",
      },
    ],
    image: {
      src: "/images/london-corporate-flower-bar-office-event.jpg",
      webp: "/images/london-corporate-flower-bar-office-event.webp",
      alt: "Corporate flower bar styled for an office wellbeing event in London",
      width: 1200,
      height: 800,
    },
    related: [
      { to: "/flower-bar-hire-london", label: "flower bar hire in London" },
      { to: "/brand-activation-flower-bar", label: "branded flower bar hire" },
      { to: "/flower-workshop-london", label: "bouquet-making workshops" },
      { to: "/christmas-flower-bar-london", label: "Christmas flower bar" },
    ],
  },
  {
    slug: "brand-activation-flower-bar",
    path: "/brand-activation-flower-bar",
    title: "Branded Flower Bar Hire London | Activations & PR Events",
    description:
      "Create a branded flower bar for product launches, PR events and campaign activations in London. Custom palettes, signage and wrap matched to your brand.",
    h1: "Branded flower bar for activations in London",
    intro:
      "A brand activation flower bar turns floral colour into a campaign moment. The Little Market Co builds a self-serve bloom market matched to your palette, with optional branded signs, stickers, tags and wrapping so every bouquet reinforces the story you are launching.",
    sections: [
      {
        heading: "Floral installations that guests can take home",
        paragraphs: [
          "Activations often look beautiful for an hour and then disappear. A branded flower bar keeps working after the event because guests leave wearing your colour story in their hands. It is ideal for product launches, press days, influencer previews and pop-up moments across London.",
          "We collaborate with brand, PR and experiential teams who need something photography-ready without hiring a full floral build for the entire room. The market becomes a natural gathering point — people select stems, wrap bouquets and create content that travels beyond the venue.",
        ],
      },
      {
        heading: "What branding can include",
        paragraphs: [
          "The Brand Market package is built for custom flower colour palettes, branded market signs, stickers or tags, custom wrapping and a bespoke stem selection. Branding guidance starts from £150 depending on print and finish, and is always quoted against your artwork and timeline rather than presented as a mandatory add-on.",
          "Share brand guidelines early and we will propose a colour story — Colour Pop for energetic launches, Modern Neutral for premium understatement, or a full Brand Match for campaign-accurate tones. Seasonal availability still applies so stems stay fresh on the day.",
        ],
      },
      {
        heading: "Logistics for PR and production teams",
        paragraphs: [
          "Tell us call times, media hours and when guests arrive. We can prioritise a polished set before doors open and keep collection discreet afterwards. Flower bar hire London for activations usually sits within a wider run of show; we stay flexible around photography windows and talent schedules.",
          "If you also need a quieter team thank-you the same week, pair the activation with a smaller corporate flower bar in the office. For festive campaign moments, explore our Christmas flower bar options with winter palettes.",
        ],
      },
      {
        heading: "Packages that scale with the brief",
        paragraphs: [
          "Not every activation needs full branding on day one. Some teams start with The Bloom Market and a palette choice, then upgrade wrap and signage when campaign assets land. Others go straight to The Brand Market for up to forty guests. We will recommend the lightest setup that still feels on-brand.",
          "Ready to plan? Check availability on the homepage enquiry form, or review packages first and then send artwork references with your date and venue.",
        ],
      },
    ],
    packageIds: ["bloom-market", "brand-market"],
    faqs: [
      {
        q: "What makes a flower bar ‘branded’?",
        a: "Branding can include custom colour palettes, market signage, stickers or tags and wrapping designed around your campaign. The Brand Market package is built for this level of detail.",
      },
      {
        q: "Can you match Pantone or hex colours?",
        a: "We match as closely as seasonal flowers allow and support the look with wrap, ribbon and signage. Exact dye-matching is not always possible with fresh stems.",
      },
      {
        q: "Do you work with PR agencies?",
        a: "Yes. We regularly support London PR and experiential teams with clear quotes, call sheets and photography-friendly setups.",
      },
      {
        q: "How quickly can branding be produced?",
        a: "Simple signs and stickers can often turn around within standard event lead times. Complex print finishes need earlier artwork. Share deadlines with your enquiry.",
      },
      {
        q: "Is the experience suitable for influencer events?",
        a: "Yes. Guests making bouquets creates natural content. We style the market to photograph cleanly against your brand colours.",
      },
      {
        q: "Can you support more than 40 guests?",
        a: "Yes, with a bespoke quote for additional stems, stations or florist assistance.",
      },
    ],
    image: {
      src: "/images/branded-flower-bar-product-launch-london.jpg",
      webp: "/images/branded-flower-bar-product-launch-london.webp",
      alt: "Branded flower bar styling for a product launch activation in London",
      width: 1200,
      height: 1600,
    },
    related: [
      { to: "/flower-bar-hire-london", label: "flower bar hire in London" },
      { to: "/corporate-flower-bar-london", label: "corporate flower experiences" },
      { to: "/christmas-flower-bar-london", label: "Christmas flower bar" },
      { to: "/flower-workshop-london", label: "bouquet-making workshops" },
    ],
  },
  {
    slug: "christmas-flower-bar-london",
    path: "/christmas-flower-bar-london",
    title: "Christmas Flower Bar London | Festive Office & Party Hire",
    description:
      "Hire a Christmas flower bar in London for festive office parties and winter celebrations. Seasonal stems, warm palettes and take-home bouquets for December events.",
    h1: "Christmas flower bar hire in London",
    intro:
      "December diaries fill quickly. A Christmas flower bar gives London offices and private hosts a festive activity that feels generous without another sit-down workshop. The Little Market Co styles a winter bloom market with seasonal stems, warm ribbons and care cards — guests wrap a bouquet and take the season home.",
    sections: [
      {
        heading: "Festive atmosphere without the clutter",
        paragraphs: [
          "Christmas party entertainment can tip into noise and plastic favours. A flower market keeps the room elegant: cream, forest green, plum and soft red tones, with textured foliage that photographs beautifully against fairy lights and venue woodwork.",
          "We recommend booking early for late November and December Fridays. Share your party date, guest numbers and whether the event is in an office, restaurant private room or hired space across London and surrounding areas.",
          "Hosts often place the market near the entrance or drinks station so guests can make a bouquet as they arrive, then enjoy the rest of the evening with flowers already wrapped and resting in water tubes or kraft wrap nearby.",
        ],
      },
      {
        heading: "Seasonal Market and winter colour stories",
        paragraphs: [
          "Our Seasonal Market palette for winter leans into cream, red, forest green and plum. Soft Meadow and Modern Neutral also work when you want festive calm rather than high contrast. For brand Christmas parties, Brand Match can echo campaign colours on wrap and signage.",
          "Stem lists flex with the wholesale market so quality stays high. If a specific flower is short in December, we substitute with a close seasonal alternative and keep the overall story intact.",
        ],
      },
      {
        heading: "Packages for festive guest lists",
        paragraphs: [
          "Small leadership dinners suit The Little Bar. Most office Christmas parties land on The Bloom Market for up to thirty guests. Larger celebrations and agency parties often choose The Brand Market for custom wrap and a stronger visual identity.",
          "Flower bar hire still starts from £395 before guest-tailored stems. Festive demand can affect flower availability and travel windows, so early enquiries help us lock both date and palette. Pair this page with corporate flower experiences if your Christmas event is primarily a workplace wellbeing moment.",
        ],
      },
      {
        heading: "Plan your December date",
        paragraphs: [
          "Check availability with your preferred December slot, venue postcode and headcount. If you also host a January kick-off or launch, we can discuss a second date for a brand activation flower bar once festive bookings settle.",
          "Browse packages on the homepage, or read about bouquet-making workshops if you want a more guided format instead of pure self-serve browsing.",
        ],
      },
    ],
    packageIds: ["little-bar", "bloom-market", "brand-market"],
    faqs: [
      {
        q: "When should we book a Christmas flower bar?",
        a: "As early as you can. December Fridays and mid-month party dates are the first to fill across London.",
      },
      {
        q: "What flowers do you use in winter?",
        a: "Seasonal stems and foliage suited to winter — often including cream blooms, richer berries or foliage, and supporting textures. Exact varieties depend on wholesale availability that week.",
      },
      {
        q: "Can you theme the market for Christmas?",
        a: "Yes. We style with a winter Seasonal Market palette or your preferred colour story, plus ribbons and wrap that feel festive without looking novelty.",
      },
      {
        q: "Do you cover Christmas Eve or bank holidays?",
        a: "Limited slots may be available. Share the date and we will confirm whether delivery and collection are possible.",
      },
      {
        q: "Is this suitable for family-friendly parties?",
        a: "Yes, with adult supervision for younger guests around water vessels and stems. Most bookings are adult office or private celebrations.",
      },
      {
        q: "Can we combine flowers with branded gifts?",
        a: "The Brand Market supports branded tags and wrap, which pairs well with existing client gifts at festive events.",
      },
    ],
    image: {
      src: "/images/christmas-flower-bar-winter-blooms-london.jpg",
      webp: "/images/christmas-flower-bar-winter-blooms-london.webp",
      alt: "Winter blooms and foliage styled for a Christmas flower bar in London",
      width: 1200,
      height: 800,
    },
    related: [
      { to: "/flower-bar-hire-london", label: "flower bar hire in London" },
      { to: "/corporate-flower-bar-london", label: "corporate flower experiences" },
      { to: "/brand-activation-flower-bar", label: "branded flower bar hire" },
      { to: "/flower-workshop-london", label: "bouquet-making workshops" },
    ],
  },
  {
    slug: "flower-workshop-london",
    path: "/flower-workshop-london",
    title: "Flower Workshop London | Bouquet-Making Experiences",
    description:
      "Host a bouquet-making flower workshop in London with The Little Market Co. A guided or self-serve bloom market for teams, celebrations and brand events.",
    h1: "Bouquet-making workshops and flower experiences in London",
    intro:
      "Not every brief needs a formal class — and not every team wants a silent demo. Our London flower workshops sit between guided bouquet-making and a self-serve flower market, so guests learn simple techniques while still choosing stems that feel personal.",
    sections: [
      {
        heading: "Workshop energy with market freedom",
        paragraphs: [
          "Traditional workshops often seat everyone for a fixed recipe. Our format keeps the beauty of a bloom market: guests move, select stems and wrap at their own pace, with optional short guidance on conditioning, spiral stems and finishing with ribbon.",
          "This works well for team away days, creative offsites, birthday gatherings and brand hospitality where you want conversation to flow. It is still flower bar hire London at heart — delivered, styled and collected — with a little more coaching when you request florist assistance.",
        ],
      },
      {
        heading: "When to choose a workshop-style booking",
        paragraphs: [
          "Choose a workshop emphasis when guests are new to flowers, when you want a shared starting demo, or when a brand wants a slightly longer engagement on the stand. Choose pure self-serve when the market is one of several entertainment options and people will drop in between drinks and speeches.",
          "For offices, pair this page with our corporate flower bar London offer. For launches, see branded flower bar hire. Private hosts can begin with flower bar hire in London and tell us if they prefer more guidance on the day.",
        ],
      },
      {
        heading: "What guests leave with",
        paragraphs: [
          "Every guest leaves with a take-home bouquet, wrapping and a care card. That tangible outcome is why bouquet-making workshops outperform many other creative activities for satisfaction scores — people can put flowers in water at home that evening.",
          "We supply the market display, seasonal stems and finishing materials. You supply the guest list energy. Venues across London and surrounding areas are welcome; share floorplans if space is tight and we will advise on footprint.",
        ],
      },
      {
        heading: "Packages and next steps",
        paragraphs: [
          "Most workshop-style events book The Bloom Market for up to thirty guests or The Brand Market when wrap and signage matter. The Little Bar suits smaller birthdays and leadership groups. Flower bar hire starts from £395, with stems tailored to headcount.",
          "Check availability with your date, venue and whether you would like optional florist assistance. You can also See packages on the homepage or explore a Christmas flower bar if your workshop falls in December.",
        ],
      },
    ],
    packageIds: ["little-bar", "bloom-market", "brand-market"],
    faqs: [
      {
        q: "Is this a sit-down florist class?",
        a: "It can include a short guided introduction, but the default experience is a self-serve flower market with optional assistance rather than a long formal class.",
      },
      {
        q: "How long should we allow for bouquet-making?",
        a: "Most guests enjoy 20–40 minutes at the market. The station can remain available longer so people rotate through during your event.",
      },
      {
        q: "Do you bring all materials?",
        a: "Yes. Flowers, display, wrapping, ribbons and care cards are included. You provide the venue space and guest list.",
      },
      {
        q: "Can beginners take part?",
        a: "Yes. The format is designed for mixed ability. Clear cues and optional guidance keep it approachable.",
      },
      {
        q: "Can brands use workshops for content days?",
        a: "Yes. A styled market is inherently visual. Ask about Brand Match palettes and branded wrap for content-led bookings.",
      },
      {
        q: "Do you travel outside central London?",
        a: "We cover London and surrounding areas. Include your postcode in the enquiry form and we will confirm.",
      },
      {
        q: "What is the difference versus standard flower bar hire?",
        a: "The market hardware is the same. Workshop-style bookings simply emphasise optional guidance and pacing for groups who want a little more tuition.",
      },
    ],
    image: {
      src: "/images/seasonal-flower-stems-self-serve-bar-london.jpg",
      webp: "/images/seasonal-flower-stems-self-serve-bar-london.webp",
      alt: "Seasonal flower stems arranged for a bouquet-making workshop and self-serve flower bar in London",
      width: 1200,
      height: 1200,
    },
    related: [
      { to: "/flower-bar-hire-london", label: "flower bar hire in London" },
      { to: "/corporate-flower-bar-london", label: "corporate flower experiences" },
      { to: "/brand-activation-flower-bar", label: "branded flower bar hire" },
      { to: "/christmas-flower-bar-london", label: "Christmas flower bar" },
    ],
  },
];

export function getSeoPage(slug: string) {
  return seoPages.find((p) => p.slug === slug);
}

export function seoPageCanonical(path: string) {
  return `${SITE_URL}${path.endsWith("/") ? path.slice(0, -1) : path}`;
}
