/**
 * After Vite build, write per-route HTML shells with unique meta tags
 * so crawlers receive correct title/description without waiting on JS.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexPath = join(dist, "index.html");

const pages = [
  {
    path: "/",
    file: "index.html",
    title: "Flower Bar Hire for Weddings & Events London | The Little Market Co",
    description:
      "Hire a styled, self-serve flower market for weddings and celebrations in London. Guests choose seasonal stems, wrap a bouquet and take it home.",
  },
  {
    path: "/wedding-flower-bar-hire-london",
    file: "wedding-flower-bar-hire-london/index.html",
    title: "Wedding Flower Bar Hire London | The Little Market Co",
    description:
      "A self-serve wedding flower bar in London, styled around your celebration. Guests choose seasonal stems, wrap a bouquet and take it home.",
  },
  {
    path: "/celebrations",
    file: "celebrations/index.html",
    title: "Private Celebration Flower Bar Hire London | The Little Market Co",
    description:
      "Hire a self-serve flower market for bridal showers, baby showers and birthdays in London. Guests wrap a bouquet and take it home.",
  },
  {
    path: "/corporate-flower-bar-london",
    file: "corporate-flower-bar-london/index.html",
    title: "Corporate Flower Bar Hire London | The Little Market Co",
    description:
      "Flower experiences for teams, launches and brand activations in London. Self-serve Little Bloom Markets with optional branded finishing.",
  },
  {
    path: "/packages",
    file: "packages/index.html",
    title: "Flower Market Packages | The Little Market Co",
    description:
      "Compare The Little Bar, The Bloom Market and The Brand Market — inclusive bouquet packages for weddings and celebrations in London.",
  },
  {
    path: "/enquire",
    file: "enquire/index.html",
    title: "Enquire | The Little Market Co",
    description:
      "Tell us about your celebration. We’ll check availability and help you choose the right Little Bloom Market.",
  },
  {
    path: "/partner-with-us",
    file: "partner-with-us/index.html",
    title: "Partner With Us | The Little Market Co",
    description:
      "Explore partnerships with The Little Market Co for venues, wedding planners, event agencies and creative businesses across London.",
  },
  {
    path: "/privacy",
    file: "privacy/index.html",
    title: "Privacy Policy | The Little Market Co",
    description:
      "How The Little Market Co collects and uses enquiry and freelance application information.",
  },
];

const site = "https://little-market-co.netlify.app";
const ogImage = `${site}/images/og-flower-bar-hire-london.jpg`;
let html = readFileSync(indexPath, "utf8");

function replaceMeta(doc, { title, description, path }) {
  const canonical = path === "/" ? `${site}/` : `${site}${path}/`;
  let out = doc;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${description}" />`,
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
    `<meta property="og:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  out = out.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${description}" />`,
  );
  if (!out.includes('property="og:image"')) {
    out = out.replace(
      '<meta name="twitter:card"',
      `<meta property="og:image" content="${ogImage}" />\n    <meta name="twitter:image" content="${ogImage}" />\n    <meta name="twitter:card"`,
    );
  } else {
    out = out.replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${ogImage}" />`,
    );
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
