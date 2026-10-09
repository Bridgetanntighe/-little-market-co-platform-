export const SITE_URL = "https://little-market-co.netlify.app";

export const site = {
  name: "The Little Market Co",
  url: SITE_URL,
  email: "hello.littlemarketco@gmail.com",
  serviceArea: "London and surrounding areas",
  service:
    "Flower bar hire for weddings, private celebrations and corporate events across London",
  ogImage: `${SITE_URL}/images/og-flower-bar-hire-london.jpg`,
  defaultTitle: "Flower Bar Hire for Weddings & Events London | The Little Market Co",
  defaultDescription:
    "Hire a styled, self-serve flower market for weddings and celebrations in London. Guests choose seasonal stems, wrap a bouquet and take it home.",
};

/** Primary indexable routes used for sitemap and SEO shells. */
export const primaryRoutes = [
  { path: "/", slug: "home" },
  { path: "/wedding-flower-bar-hire-london/", slug: "weddings" },
  { path: "/celebrations/", slug: "celebrations" },
  { path: "/corporate-flower-bar-london/", slug: "corporate" },
  { path: "/packages/", slug: "packages" },
  { path: "/enquire/", slug: "enquire" },
  { path: "/partner-with-us/", slug: "partner" },
  { path: "/privacy/", slug: "privacy" },
] as const;
