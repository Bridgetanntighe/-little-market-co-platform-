import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { FloralStylePreview } from "../components/FloralStyleSelector";
import { celebrationFaqs, hireOptions } from "../data/content";
import { breadcrumbList, faqPageJsonLd, pageSeo } from "../data/pageSeo";
import { enquireHref, useReveal } from "../hooks/useReveal";

const seo = pageSeo.celebrations;

export default function CelebrationsPage() {
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
            { name: "Celebrations", path: seo.path },
          ]),
          faqPageJsonLd(celebrationFaqs),
        ]}
      />
      <main className="celebrations-page">
        <header className="section wedding-hero">
          <div className="container wedding-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>Celebrations</span>
              </nav>
              <span className="hero__eyebrow">Bridal showers · Baby showers · Birthdays</span>
              <h1>{seo.h1}</h1>
              <p className="wedding-hero__copy">{seo.lead}</p>
              <div className="hero__actions">
                <Link
                  className="btn btn-primary"
                  to={enquireHref({ eventType: "Birthday / private celebration" })}
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
                src="/images/guests-making-bouquets-flower-market.jpg"
                webp="/images/guests-making-bouquets-flower-market.webp"
                alt="Styling concept of guests wrapping take-home bouquets at a celebration"
                width={1200}
                height={800}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 520px"
              />
              <figcaption>Styling concept — celebration bouquet moment (inspiration image)</figcaption>
            </figure>
          </div>
        </header>

        <section className={`section reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <div className="container narrow">
            <h2 className="section-title">Simple planning, a personal touch</h2>
            <p className="section-lead">
              Ideal for bridal showers, baby showers and special birthdays. The market is
              self-serve after setup — we prepare, deliver, style and collect so you can host
              without managing flowers.
            </p>
            <ul className="partner-ways__list">
              <li>A relaxed shared activity guests can join at their own pace</li>
              <li>Personal colour choices from Soft Meadow, Modern Neutral or Colour Pop</li>
              <li>A bouquet to take home — more than a party bag</li>
              <li>Compact setup suited to homes, gardens and hired rooms</li>
            </ul>
            <p className="section-lead" style={{ marginTop: "1.25rem" }}>
              Planning a wedding instead? See{" "}
              <Link to="/wedding-flower-bar-hire-london/">wedding flower bar hire</Link>, or
              compare all{" "}
              <Link to="/packages/">packages and prices</Link>.
            </p>
            <Link
              className="btn btn-primary"
              to={enquireHref({ eventType: "Bridal shower" })}
            >
              Check your date
            </Link>
          </div>
        </section>

        <section className="section colour-stories">
          <div className="container">
            <h2 className="section-title">Find your floral style</h2>
            <p className="section-lead">
              Soft and romantic, fresh and understated, or full of colour — a starting point for
              your shower or birthday.
            </p>
            <FloralStylePreview />
          </div>
        </section>

        <section className="section packages">
          <div className="container">
            <h2 className="section-title">Packages for celebrations</h2>
            <p className="section-lead">
              Bouquet allowances match our shared pricing — your guest list can be larger than the
              number of bouquets you book.
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
                      eventType: "Birthday / private celebration",
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
            <h2 className="section-title">Celebration FAQs</h2>
            <FaqList items={celebrationFaqs} />
            <Link
              className="btn btn-primary"
              style={{ marginTop: "2rem" }}
              to={enquireHref({ eventType: "Birthday / private celebration" })}
            >
              Check your date
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
