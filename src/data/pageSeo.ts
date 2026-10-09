import { SITE_URL } from "./site";

/**
 * Single source of truth for public page SEO.
 * Keep scripts/seo-html.mjs in sync when editing titles/descriptions.
 * Domain: update SITE_URL here when a custom domain is connected.
 */
export type PageSeo = {
  path: string;
  title: string;
  description: string;
  /** Used in static HTML shells for non-JS crawlers */
  h1: string;
  /** Short lead for static HTML shells */
  lead: string;
  /** Include in sitemap.xml */
  inSitemap: boolean;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: number;
  ogImage?: string;
};

const og = `${SITE_URL}/images/og-flower-bar-hire-london.jpg`;

export const pageSeo = {
  home: {
    path: "/",
    title: "Flower Bar Hire London | The Little Market Co",
    description:
      "Hire a styled, self-serve flower bar in London for weddings and celebrations. Guests choose seasonal stems, wrap a bouquet and take it home.",
    h1: "A little flower market. A beautiful part of your celebration.",
    lead: "Flower bar hire for weddings and celebrations across London. Guests choose stems, wrap a bouquet and take a little of your day home.",
    inSitemap: true,
    changefreq: "weekly",
    priority: 1,
    ogImage: og,
  },
  weddings: {
    path: "/wedding-flower-bar-hire-london/",
    title: "Wedding Flower Bar Hire London | The Little Market Co",
    description:
      "Wedding flower bar hire in London — a self-serve Little Bloom Market for drinks receptions and celebrations. Guests wrap a take-home bouquet.",
    h1: "Wedding flower bar hire in London",
    lead: "A styled, self-serve flower market for your wedding. Guests choose seasonal stems, wrap a bouquet and take a little of your day home.",
    inSitemap: true,
    changefreq: "weekly",
    priority: 0.95,
    ogImage: og,
  },
  celebrations: {
    path: "/celebrations/",
    title: "Flower Bar Hire for Parties & Showers London | The Little Market Co",
    description:
      "Flower bar hire for bridal showers, baby showers and birthday parties in London. A compact self-serve market with bouquets to take home.",
    h1: "Flower bar hire for parties and showers in London",
    lead: "A relaxed Little Bloom Market for bridal showers, baby showers and special birthdays — personal colours and a bouquet to take home.",
    inSitemap: true,
    changefreq: "weekly",
    priority: 0.9,
    ogImage: og,
  },
  corporate: {
    path: "/corporate-flower-bar-london/",
    title: "Corporate & Branded Flower Bar Hire London | The Little Market Co",
    description:
      "Corporate and branded flower bar hire in London for team events, client hospitality and brand activations. Self-serve markets with optional branding.",
    h1: "Corporate and branded flower bar hire in London",
    lead: "Flower experiences for offices, agencies and brands — employee celebrations, client events, launches and activations across London.",
    inSitemap: true,
    changefreq: "monthly",
    priority: 0.85,
    ogImage: og,
  },
  packages: {
    path: "/packages/",
    title: "Flower Bar Hire Packages & Prices | The Little Market Co",
    description:
      "Compare Little Bloom Market packages and prices for London flower bar hire — from £495 with bouquet allowances, styling, setup and collection.",
    h1: "Flower bar hire packages and prices",
    lead: "Inclusive packages for The Little Bar, The Bloom Market and The Brand Market — bouquets included, delivery and setup within London.",
    inSitemap: true,
    changefreq: "weekly",
    priority: 0.9,
    ogImage: og,
  },
  enquire: {
    path: "/enquire/",
    title: "Enquire | The Little Market Co",
    description:
      "Enquire about flower bar hire in London. Share your date, venue and bouquet numbers for a tailored Little Bloom Market quote.",
    h1: "Tell us about your celebration",
    lead: "We’ll check availability and send a tailored quote. Submitting an enquiry does not reserve your date.",
    inSitemap: true,
    changefreq: "monthly",
    priority: 0.8,
    ogImage: og,
  },
  partner: {
    path: "/partner-with-us/",
    title: "Partner With Us | The Little Market Co",
    description:
      "Partner with The Little Market Co — venues, wedding planners, agencies and creative businesses across London.",
    h1: "Partner with us",
    lead: "Explore partnerships with The Little Market Co for venues, wedding planners, event agencies and creative businesses.",
    inSitemap: true,
    changefreq: "monthly",
    priority: 0.55,
    ogImage: og,
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy Policy | The Little Market Co",
    description:
      "How The Little Market Co collects and uses enquiry, partnership and freelance application information.",
    h1: "Privacy policy",
    lead: "How we collect and use information you share through our website forms.",
    inSitemap: true,
    changefreq: "yearly",
    priority: 0.3,
    ogImage: og,
  },
} as const satisfies Record<string, PageSeo>;

export const sitemapPages = Object.values(pageSeo).filter((p) => p.inSitemap);

export function canonicalFor(path: string) {
  const normalized = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

export function breadcrumbList(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: canonicalFor(item.path),
    })),
  };
}

export function faqPageJsonLd(faqs: { q: string; a: string }[]): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
