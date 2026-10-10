/**
 * After Vite build, write per-route HTML shells with unique meta tags
 * and a static content fallback so crawlers see meaningful HTML without JS.
 *
 * Titles/descriptions must stay aligned with src/data/pageSeo.ts.
 * Domain: update SITE below when a custom domain is connected.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexPath = join(dist, "index.html");

const SITE = "https://little-market-co.netlify.app";
const ogImage = `${SITE}/images/og-flower-bar-hire-london.jpg`;

const pages = [
  {
    path: "/",
    file: "index.html",
    title: "Mobile Flower Market Hire London | The Little Market Co",
    description:
      "We bring a styled, self-serve flower market to your London wedding or event venue. Setup and collection included.",
    h1: "A flower market for your wedding or event.",
    lead: "Mobile flower market hire across London — we set up at your venue, guests make take-home bouquets, we collect.",
    changefreq: "weekly",
    priority: "1.0",
    links: [
      { href: "/wedding-flower-bar-hire-london/", label: "Weddings" },
      { href: "/celebrations/", label: "Celebrations" },
      { href: "/corporate-flower-bar-london/", label: "Corporate & Brands" },
      { href: "/packages/", label: "Packages" },
      { href: "/enquire/", label: "Enquire" },
    ],
  },
  {
    path: "/wedding-flower-bar-hire-london",
    file: "wedding-flower-bar-hire-london/index.html",
    title: "Wedding Flower Bar Hire London | The Little Market Co",
    description:
      "Wedding flower bar hire in London — a self-serve Little Bloom Market for drinks receptions and celebrations. Guests wrap a take-home bouquet.",
    h1: "Wedding flower bar hire in London",
    lead: "A styled, self-serve flower market for your wedding. Guests choose seasonal stems, wrap a bouquet and take a little of your day home.",
    changefreq: "weekly",
    priority: "0.95",
    links: [
      { href: "/packages/", label: "Packages & prices" },
      { href: "/enquire/?eventType=Wedding", label: "Check your wedding date" },
      { href: "/celebrations/", label: "Private celebrations" },
    ],
  },
  {
    path: "/celebrations",
    file: "celebrations/index.html",
    title: "Flower Bar Hire for Parties & Showers London | The Little Market Co",
    description:
      "Flower bar hire for bridal showers, baby showers and birthday parties in London. A compact self-serve market with bouquets to take home.",
    h1: "Flower bar hire for parties and showers in London",
    lead: "A relaxed Little Bloom Market for bridal showers, baby showers and special birthdays — personal colours and a bouquet to take home.",
    changefreq: "weekly",
    priority: "0.9",
    links: [
      { href: "/packages/", label: "Packages & prices" },
      { href: "/enquire/", label: "Check your date" },
      { href: "/wedding-flower-bar-hire-london/", label: "Weddings" },
    ],
  },
  {
    path: "/corporate-flower-bar-london",
    file: "corporate-flower-bar-london/index.html",
    title: "Corporate & Branded Flower Bar Hire London | The Little Market Co",
    description:
      "Corporate and branded flower bar hire in London for team events, client hospitality and brand activations. Self-serve markets with optional branding.",
    h1: "Corporate and branded flower bar hire in London",
    lead: "Flower experiences for offices, agencies and brands — employee celebrations, client events, launches and activations across London.",
    changefreq: "monthly",
    priority: "0.85",
    links: [
      { href: "/packages/", label: "Packages & prices" },
      { href: "/enquire/?eventType=Corporate+event", label: "Check your date" },
      { href: "/partner-with-us/", label: "Partner with us" },
    ],
  },
  {
    path: "/packages",
    file: "packages/index.html",
    title: "Flower Bar Hire Packages & Prices | The Little Market Co",
    description:
      "Compare Little Bloom Market packages and prices for London flower bar hire — from £495 with bouquet allowances, styling, setup and collection.",
    h1: "Flower bar hire packages and prices",
    lead: "Inclusive packages for The Little Bar, The Bloom Market and The Brand Market — bouquets included, delivery and setup within London.",
    changefreq: "weekly",
    priority: "0.9",
    links: [
      { href: "/enquire/", label: "Check your date" },
      { href: "/wedding-flower-bar-hire-london/", label: "Weddings" },
      { href: "/celebrations/", label: "Celebrations" },
      { href: "/corporate-flower-bar-london/", label: "Corporate & Brands" },
    ],
  },
  {
    path: "/enquire",
    file: "enquire/index.html",
    title: "Check Your Date | The Little Market Co",
    description:
      "Check your date for a mobile flower market in London. Share your venue and bouquet numbers — we’ll reply with a clear quote.",
    h1: "Check your date",
    lead: "Three quick details. We’ll confirm availability and send package options.",
    changefreq: "monthly",
    priority: "0.8",
    links: [
      { href: "/packages/", label: "Compare packages" },
      { href: "/wedding-flower-bar-hire-london/", label: "Weddings" },
      { href: "/celebrations/", label: "Celebrations" },
    ],
  },
  {
    path: "/partner-with-us",
    file: "partner-with-us/index.html",
    title: "Partner With Us | The Little Market Co",
    description:
      "Partner with The Little Market Co — venues, wedding planners, agencies and creative businesses across London.",
    h1: "Partner with us",
    lead: "Explore partnerships with The Little Market Co for venues, wedding planners, event agencies and creative businesses.",
    changefreq: "monthly",
    priority: "0.55",
    links: [
      { href: "/enquire/", label: "Client enquiries" },
      { href: "/", label: "Home" },
    ],
  },
  {
    path: "/privacy",
    file: "privacy/index.html",
    title: "Privacy Policy | The Little Market Co",
    description:
      "How The Little Market Co collects and uses enquiry, partnership and freelance application information.",
    h1: "Privacy policy",
    lead: "How we collect and use information you share through our website forms.",
    changefreq: "yearly",
    priority: "0.3",
    links: [{ href: "/", label: "Home" }],
  },
];

let html = readFileSync(indexPath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function staticBlock(page) {
  const links = page.links
    .map((l) => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`)
    .join("");
  return `
    <div id="seo-static" class="seo-static">
      <article>
        <h1>${escapeHtml(page.h1)}</h1>
        <p>${escapeHtml(page.lead)}</p>
        <nav aria-label="Popular pages">
          <ul>${links}</ul>
        </nav>
      </article>
    </div>`;
}

function replaceMeta(doc, page) {
  const canonical = page.path === "/" ? `${SITE}/` : `${SITE}${page.path}/`;
  const title = page.title;
  const description = page.description;
  let out = doc;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  );
  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${ogImage}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${ogImage}" />`,
  );

  // Inject or replace static SEO content for crawlers without JS
  if (out.includes('id="seo-static"')) {
    out = out.replace(
      /<div id="seo-static"[\s\S]*?<\/div>\s*/,
      `${staticBlock(page)}\n    `,
    );
  } else {
    out = out.replace("<div id=\"root\"></div>", `${staticBlock(page)}\n    <div id="root"></div>`);
  }
  return out;
}

for (const page of pages) {
  const outHtml = replaceMeta(html, page);
  const outPath = join(dist, page.file);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, outHtml);
  console.log("Wrote", page.file);
}

// Refresh sitemap from the same page list
const sitemapUrls = pages
  .map((page) => {
    const loc = page.path === "/" ? `${SITE}/` : `${SITE}${page.path}/`;
    return `  <url>
    <loc>${loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
);
console.log("Wrote sitemap.xml");
