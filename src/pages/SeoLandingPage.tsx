import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { packagesFor, type SeoPageContent } from "../data/seoPages";
import { site } from "../data/site";
import { goHomeSection, homeSectionHref } from "../hooks/useReveal";

export function SeoLandingPage({ page }: { page: SeoPageContent }) {
  const packages = packagesFor(page.packageIds);
  const canonicalPath = page.path;
  const pageUrl = `${site.url}${page.path}`;

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.h1,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": `${site.url}/#organization` },
      about: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "FAQPage",
      mainEntity: page.faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title={page.title}
        description={page.description}
        path={canonicalPath}
        image={`${site.url}${page.image.src}`}
        jsonLd={jsonLd}
      />
      <main className="seo-page">
        <article>
          <header className="seo-hero section">
            <div className="container seo-hero__grid">
              <div>
                <nav className="breadcrumbs" aria-label="Breadcrumb">
                  <Link to="/">Home</Link>
                  <span aria-hidden="true"> / </span>
                  <span>{page.h1}</span>
                </nav>
                <h1>{page.h1}</h1>
                <p className="seo-hero__intro">{page.intro}</p>
                <div className="hero__actions">
                  <a className="btn btn-primary" href={homeSectionHref("enquire")}>
                    Check availability
                  </a>
                  <a className="btn btn-secondary" href={homeSectionHref("packages")}>
                    See packages
                  </a>
                </div>
              </div>
              <figure className="seo-hero__figure">
                <ResponsiveImage
                  src={page.image.src}
                  webp={page.image.webp}
                  alt={page.image.alt}
                  width={page.image.width}
                  height={page.image.height}
                  loading="eager"
                  sizes="(max-width: 900px) 100vw, 520px"
                />
              </figure>
            </div>
          </header>

          {page.sections.map((section) => (
            <section className="section seo-section" key={section.heading}>
              <div className="container narrow">
                <h2 className="section-title">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)} className="seo-section__p">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section className="section packages" id="page-packages">
            <div className="container">
              <span className="section-eyebrow">Packages</span>
              <h2 className="section-title">Relevant flower market packages</h2>
              <p className="section-lead">
                Flower bar hire starts from £395. Flowers are tailored to guest numbers and bouquet
                style for events across London and surrounding areas.
              </p>
              <div className="packages__grid packages__grid--three">
                {packages.map((pkg) => (
                  <article
                    className={`package ${pkg.popular ? "package--popular" : ""}`}
                    key={pkg.id}
                  >
                    {pkg.popular && <span className="package__badge">Most popular</span>}
                    <h3>{pkg.name}</h3>
                    <div className="package__price">{pkg.price}</div>
                    <span className="package__note">{pkg.note}</span>
                    <ul>
                      {pkg.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <a
                      className="btn btn-accent"
                      href={homeSectionHref("enquire")}
                      onClick={() => {
                        sessionStorage.setItem(
                          "tlmc-enquiry-prefill",
                          JSON.stringify({ packageChoice: pkg.enquiryValue }),
                        );
                      }}
                    >
                      Check availability
                    </a>
                  </article>
                ))}
              </div>
              <p className="packages__note">
                Compare all options on the{" "}
                <a
                  href="/#packages"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("packages");
                  }}
                >
                  homepage packages
                </a>{" "}
                section, or{" "}
                <a
                  href="/#enquire"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("enquire");
                  }}
                >
                  contact us
                </a>{" "}
                with your date and guest numbers.
              </p>
            </div>
          </section>

          <section className="section faq">
            <div className="container narrow">
              <span className="section-eyebrow">FAQs</span>
              <h2 className="section-title">Questions about this experience</h2>
              <FaqList items={page.faqs} />
              <a
                className="btn btn-primary"
                style={{ marginTop: "2rem" }}
                href={homeSectionHref("enquire")}
              >
                Check availability
              </a>
            </div>
          </section>

          <section className="section">
            <div className="container narrow">
              <h2 className="section-title">Explore related experiences</h2>
              <ul className="related-links">
                <li>
                  <Link to="/">Homepage — The Little Market Co</Link>
                </li>
                {page.related.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/#packages"
                    onClick={(e) => {
                      e.preventDefault();
                      goHomeSection("packages");
                    }}
                  >
                    See packages
                  </a>
                </li>
                <li>
                  <a
                    href="/#enquire"
                    onClick={(e) => {
                      e.preventDefault();
                      goHomeSection("enquire");
                    }}
                  >
                    Contact / Check availability
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-accent"
                style={{ marginTop: "1.5rem" }}
                href={homeSectionHref("enquire")}
              >
                Plan your flower bar
              </a>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
