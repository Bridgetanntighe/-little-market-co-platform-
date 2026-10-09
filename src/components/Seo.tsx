import { Helmet } from "react-helmet-async";
import { site } from "../data/site";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function Seo({
  title,
  description,
  path = "/",
  image = site.ogImage,
  type = "website",
  jsonLd,
}: SeoProps) {
  const normalized =
    path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const canonical = `${site.url}${normalized === "/" ? "/" : normalized}`;
  const graph = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {graph.length > 0 && (
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        })}</script>
      )}
    </Helmet>
  );
}
