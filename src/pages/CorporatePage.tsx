import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { brandMatchCollection, corporateFaqs, hireOptions } from "../data/content";
import { breadcrumbList, faqPageJsonLd, pageSeo } from "../data/pageSeo";
import { enquireHref, useReveal } from "../hooks/useReveal";

const seo = pageSeo.corporate;

export default function CorporatePage() {
  const { ref, visible } = useReveal<HTMLElement>();
  const { ref: faqRef, visible: faqVisible } = useReveal<HTMLElement>();

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
            { name: "Corporate & Brands", path: seo.path },
          ]),
          faqPageJsonLd(corporateFaqs),
        ]}
      />
      <main className="corporate-page">
        <header className="section wedding-hero">
          <div className="container wedding-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>Corporate & Brands</span>
              </nav>
              <span className="hero__eyebrow">Teams · Launches · Activations</span>
              <h1>{seo.h1}</h1>
              <p className="wedding-hero__copy">{seo.lead}</p>
              <div className="hero__actions">
                <Link
                  className="btn btn-primary"
                  to={enquireHref({ eventType: "Corporate event" })}
                >
                  Check your date
                </Link>
                <Link className="btn btn-secondary" to="/packages/">
                  See packages
                </Link>
              </div>
            </div>
            <figure className="wedding-hero__figure">
              <ResponsiveImage
                src="/images/london-corporate-flower-bar-office-event.jpg"
                webp="/images/london-corporate-flower-bar-office-event.webp"
                alt="Styling concept of a corporate flower bar for an office event in London"
                width={1200}
                height={800}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 520px"
              />
              <figcaption>Styling concept — workplace flower market atmosphere (stock inspiration)</figcaption>
            </figure>
          </div>
        </header>

        <section className={`section reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <div className="container">
            <h2 className="section-title">Where a flower market fits</h2>
            <div className="partner-cards__grid">
              <article className="partner-card">
                <h3>Employee celebrations</h3>
                <p>Wellbeing hours, team thank-yous and office gatherings with a calm creative pause.</p>
              </article>
              <article className="partner-card">
                <h3>Client events</h3>
                <p>A polished, interactive moment for hospitality evenings and partner thank-yous.</p>
              </article>
              <article className="partner-card">
                <h3>Launches and activations</h3>
                <p>Photography-ready colour for press days, influencer previews and campaign moments.</p>
              </article>
              <article className="partner-card">
                <h3>Branded finishing</h3>
                <p>
                  The Brand Market can include branded signage and packaging — quoted around your
                  artwork and timeline.
                </p>
              </article>
            </div>
            <div className="brand-match-panel">
              <h3>{brandMatchCollection.name}</h3>
              <p>{brandMatchCollection.copy}</p>
              <Link
                className="btn btn-secondary"
                to={enquireHref({
                  eventType: "Brand activation",
                  colourIdeas: brandMatchCollection.enquiryValue,
                  packageChoice: "The Brand Market",
                })}
              >
                Enquire about Brand Match
              </Link>
            </div>
            <p className="section-lead" style={{ marginTop: "1.5rem" }}>
              Looking for a private party instead? Explore{" "}
              <Link to="/celebrations/">celebrations</Link> or compare{" "}
              <Link to="/packages/">packages and prices</Link>. Agencies and venues can also{" "}
              <Link to="/partner-with-us/">partner with us</Link>.
            </p>
          </div>
        </section>

        <section className="section packages">
          <div className="container">
            <h2 className="section-title">Packages for corporate hire</h2>
            <p className="section-lead">
              Same inclusive bouquet packages as our celebrations hire. Standard bookings are
              self-serve after setup.
            </p>
            <p className="snap-rail__hint" aria-hidden="true">
              Swipe for more
            </p>
            <div className="packages__grid packages__grid--three">
              {hireOptions.map((pkg) => (
                <article className="package" key={pkg.id}>
                  <h3>{pkg.name}</h3>
                  <div className="package__price">{pkg.price}</div>
                  <span className="package__note">{pkg.bouquets}</span>
                  <p>{pkg.description}</p>
                  <Link
                    className="btn btn-accent"
                    to={enquireHref({
                      eventType:
                        pkg.id === "brand-market" ? "Brand activation" : "Corporate event",
                      packageChoice: pkg.enquiryValue,
                    })}
                  >
                    Check your date
                  </Link>
                </article>
              ))}
            </div>
            <Link className="btn btn-secondary packages__cta" to="/packages/">
              Compare packages
            </Link>
          </div>
        </section>

        <section
          className={`section faq reveal ${faqVisible ? "is-visible" : ""}`}
          ref={faqRef}
        >
          <div className="container">
            <h2 className="section-title">Corporate FAQs</h2>
            <FaqList items={corporateFaqs} />
            <Link
              className="btn btn-primary"
              style={{ marginTop: "2rem" }}
              to={enquireHref({ eventType: "Corporate event" })}
            >
              Check your date
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
