/**
 * After Vite build, write per-route HTML shells with unique meta tags
 * so crawlers receive correct title/description without waiting on JS.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexPath = join(dist, "index.html");

const pages = [
  {
    path: "/",
    file: "index.html",
    title: "Flower Bar Hire London | The Little Market Co",
    description:
      "Hire a beautifully styled flower bar in London for office events, brand activations, launches, parties and celebrations. Guests create their own bouquet to take home.",
  },
  {
    path: "/flower-bar-hire-london",
    file: "flower-bar-hire-london/index.html",
    title: "Flower Bar Hire London | Self-Serve Bloom Market | The Little Market Co",
    description:
      "Book flower bar hire in London for parties, weddings and celebrations. Guests choose stems, wrap a bouquet and take it home. Delivered, styled and collected across London.",
  },
  {
    path: "/corporate-flower-bar-london",
    file: "corporate-flower-bar-london/index.html",
    title: "Corporate Flower Bar London | Office Events & Team Experiences",
    description:
      "Book a corporate flower bar in London for office wellbeing days, client entertainment and team celebrations. A polished self-serve bloom market delivered to your workplace.",
  },
  {
    path: "/brand-activation-flower-bar",
    file: "brand-activation-flower-bar/index.html",
    title: "Branded Flower Bar Hire London | Activations & PR Events",
    description:
      "Create a branded flower bar for product launches, PR events and campaign activations in London. Custom palettes, signage and wrap matched to your brand.",
  },
  {
    path: "/christmas-flower-bar-london",
    file: "christmas-flower-bar-london/index.html",
    title: "Christmas Flower Bar London | Festive Office & Party Hire",
    description:
      "Hire a Christmas flower bar in London for festive office parties and winter celebrations. Seasonal stems, warm palettes and take-home bouquets for December events.",
  },
  {
    path: "/flower-workshop-london",
    file: "flower-workshop-london/index.html",
    title: "Flower Workshop London | Bouquet-Making Experiences",
    description:
      "Host a bouquet-making flower workshop in London with The Little Market Co. A guided or self-serve bloom market for teams, celebrations and brand events.",
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

// Ensure forms skeleton remains available
try {
  copyFileSync(join(dist, "__forms.html"), join(dist, "__forms.html"));
} catch {
  /* already present from public/ */
}
