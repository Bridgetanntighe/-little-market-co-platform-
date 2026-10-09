export const SITE_URL = "https://little-market-co.netlify.app";

export const site = {
  name: "The Little Market Co",
  url: SITE_URL,
  email: "hello.littlemarketco@gmail.com",
  serviceArea: "London and surrounding areas",
  service:
    "Flower bar hire, corporate flower experiences and branded floral activations",
  ogImage: `${SITE_URL}/images/og-flower-bar-hire-london.jpg`,
  defaultTitle: "Flower Bar Hire London | The Little Market Co",
  defaultDescription:
    "Hire a beautifully styled flower bar in London for office events, brand activations, launches, parties and celebrations. Guests create their own bouquet to take home.",
};

export const seoRoutes = [
  {
    path: "/flower-bar-hire-london",
    slug: "flower-bar-hire-london",
  },
  {
    path: "/corporate-flower-bar-london",
    slug: "corporate-flower-bar-london",
  },
  {
    path: "/brand-activation-flower-bar",
    slug: "brand-activation-flower-bar",
  },
  {
    path: "/christmas-flower-bar-london",
    slug: "christmas-flower-bar-london",
  },
  {
    path: "/flower-workshop-london",
    slug: "flower-workshop-london",
  },
] as const;
