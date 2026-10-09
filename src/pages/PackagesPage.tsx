import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { FloralStyleSelector } from "../components/FloralStyleSelector";
import { Seo } from "../components/Seo";
import { hireOptions, packageFaqs } from "../data/content";
import { breadcrumbList, canonicalFor, faqPageJsonLd, pageSeo } from "../data/pageSeo";
import { enquireHref, scrollToId, useReveal } from "../hooks/useReveal";

const rows = [
  { key: "bouquets", label: "Bouquets included" },
  { key: "flowers", label: "Flower and wrapping allowance" },
  { key: "wrapping", label: "Wrapping" },
  { key: "display", label: "Display and styling" },
  { key: "personalisation", label: "Personalisation" },
  { key: "setup", label: "Setup and collection" },
  { key: "delivery", label: "Delivery conditions" },
  { key: "assistance", label: "Assistance" },
] as const;

const seo = pageSeo.packages;

export default function PackagesPage() {
  const location = useLocation();
  const { ref, visible } = useReveal<HTMLElement>();
  const { ref: faqRef, visible: faqVisible } = useReveal<HTMLElement>();

  useEffect(() => {
    if (location.hash === "#floral-style") {
      requestAnimationFrame(() => scrollToId("floral-style"));
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image={seo.ogImage}
        jsonLd={[
          breadcrumbList([
            { name: "Home", path: "/" },
            { name: "Packages", path: seo.path },
          ]),
          faqPageJsonLd(packageFaqs),
          {
            "@type": "OfferCatalog",
            name: "Little Bloom Market packages",
            itemListElement: hireOptions.map((pkg, index) => ({
              "@type": "Offer",
              position: index + 1,
              name: pkg.name,
              description: `${pkg.bouquets}. ${pkg.description}`,
              priceCurrency: "GBP",
              price: String(pkg.price.replace(/[^\d]/g, "")),
              url: canonicalFor(seo.path),
            })),
          },
        ]}
      />
      <main className="packages-page">
        <header className="section">
          <div className="container narrow">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Packages</span>
            </nav>
            <span className="section-eyebrow">Packages</span>
            <h1 className="section-title">{seo.h1}</h1>
            <p className="section-lead">{seo.lead}</p>
            <p className="section-lead">
              Browse by occasion:{" "}
              <Link to="/wedding-flower-bar-hire-london/">weddings</Link>,{" "}
              <Link to="/celebrations/">parties and showers</Link>, or{" "}
              <Link to="/corporate-flower-bar-london/">corporate and brands</Link>.
            </p>
          </div>
        </header>

        <section className="section packages" ref={ref}>
          <div className={`container reveal ${visible ? "is-visible" : ""}`}>
            <div className="packages__grid packages__grid--three">
              {hireOptions.map((pkg) => (
                <article className="package" key={pkg.id}>
                  <h2>{pkg.name}</h2>
                  <div className="package__price">{pkg.price}</div>
                  <span className="package__note">{pkg.bouquets}</span>
                  <p>{pkg.description}</p>
                  <ul>
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    className="btn btn-accent"
                    to={enquireHref({ packageChoice: pkg.enquiryValue })}
                  >
                    Check availability
                  </Link>
                </article>
              ))}
            </div>
            <p className="packages__note">
              Prices shown are inclusive package starting points for the bouquet allowances above.
              They are not a £395 setup fee plus separate per-person charges. Further travel outside
              our usual London service area, assisted staffing and personalised extras are quoted
              individually. Planning more than 40 bouquets? Tell us your numbers when you enquire.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="section-title">Compare packages</h2>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Detail</th>
                    {hireOptions.map((pkg) => (
                      <th scope="col" key={pkg.id}>
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Starting price</th>
                    {hireOptions.map((pkg) => (
                      <td key={pkg.id}>{pkg.price}</td>
                    ))}
                  </tr>
                  {rows.map((row) => (
                    <tr key={row.key}>
                      <th scope="row">{row.label}</th>
                      {hireOptions.map((pkg) => (
                        <td key={pkg.id}>{pkg.comparison[row.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section colour-stories" id="floral-style">
          <div className="container">
            <span className="section-eyebrow">Styling</span>
            <h2 className="section-title">Find your floral style</h2>
            <p className="section-lead">
              Soft and romantic, fresh and understated, or full of colour. Choose a starting point
              and we’ll shape the flowers around your celebration.
            </p>
            <FloralStyleSelector />
          </div>
        </section>

        <section
          className={`section faq reveal ${faqVisible ? "is-visible" : ""}`}
          ref={faqRef}
        >
          <div className="container">
            <h2 className="section-title">Package FAQs</h2>
            <FaqList items={packageFaqs} />
            <Link className="btn btn-primary" style={{ marginTop: "2rem" }} to={enquireHref()}>
              Check availability
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
