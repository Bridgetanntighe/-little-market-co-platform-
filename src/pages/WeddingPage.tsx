import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { FloralStylePreview } from "../components/FloralStyleSelector";
import { hireOptions } from "../data/content";
import { breadcrumbList, canonicalFor, faqPageJsonLd, pageSeo } from "../data/pageSeo";
import { site } from "../data/site";
import {
  weddingFaqs,
  weddingImages,
  weddingIncludes,
  weddingSteps,
  weddingTouches,
} from "../data/wedding";
import { enquireHref, useReveal } from "../hooks/useReveal";

const weddingEnquire = enquireHref({ eventType: "Wedding" });
const seo = pageSeo.weddings;

export default function WeddingPage() {
  const pageUrl = canonicalFor(seo.path);
  const { ref: experienceRef, visible: experienceVisible } = useReveal<HTMLElement>();
  const { ref: colourRef, visible: colourVisible } = useReveal<HTMLElement>();
  const { ref: includeRef, visible: includeVisible } = useReveal<HTMLElement>();
  const { ref: pricingRef, visible: pricingVisible } = useReveal<HTMLElement>();
  const { ref: touchRef, visible: touchVisible } = useReveal<HTMLElement>();
  const { ref: galleryRef, visible: galleryVisible } = useReveal<HTMLElement>();
  const { ref: faqRef, visible: faqVisible } = useReveal<HTMLElement>();
  const { ref: ctaRef, visible: ctaVisible } = useReveal<HTMLElement>();

  const jsonLd = [
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Weddings", path: seo.path },
    ]),
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${site.url}/#organization` },
      about: { "@id": `${site.url}/#business` },
    },
    faqPageJsonLd(weddingFaqs),
  ];

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image={seo.ogImage}
        jsonLd={jsonLd}
      />
      <main className="wedding-page">
        <header className="section wedding-hero">
          <div className="container wedding-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>Weddings</span>
              </nav>
              <span className="hero__eyebrow">The Little Bloom Market for Weddings</span>
              <h1>{seo.h1}</h1>
              <p className="wedding-hero__kicker">A little flower market for your big day</p>
              <p className="wedding-hero__copy">{seo.lead}</p>
              <div className="hero__actions">
                <Link className="btn btn-primary" to={weddingEnquire}>
                  Check your wedding date
                </Link>
                <a className="btn btn-secondary" href="#wedding-experience">
                  Explore the experience
                </a>
              </div>
            </div>
            <figure className="wedding-hero__figure">
              <ResponsiveImage
                src={weddingImages[0].src}
                webp={weddingImages[0].webp}
                alt={weddingImages[0].alt}
                width={weddingImages[0].width}
                height={weddingImages[0].height}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 520px"
              />
              <figcaption>{weddingImages[0].caption}</figcaption>
            </figure>
          </div>
        </header>

        <section
          className={`section reveal ${experienceVisible ? "is-visible" : ""}`}
          id="wedding-experience"
          ref={experienceRef}
        >
          <div className="container">
            <span className="section-eyebrow">The experience</span>
            <h2 className="section-title">An experience and a wedding favour in one</h2>
            <p className="section-lead">
              Guests choose their favourite stems, gather a little bouquet and wrap it to take home.
              A relaxed activity during your drinks reception, a thoughtful wedding favour or a
              colourful addition to your evening celebration. Our standard booking is self-serve —
              a florist does not stay on site after setup.
            </p>
            <div className="steps steps--three">
              {weddingSteps.map((s) => (
                <article className="step" key={s.step}>
                  <div className="step__num">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </article>
              ))}
            </div>
            <div className="wedding-split">
              <figure>
                <ResponsiveImage
                  src={weddingImages[1].src}
                  webp={weddingImages[1].webp}
                  alt={weddingImages[1].alt}
                  width={weddingImages[1].width}
                  height={weddingImages[1].height}
                  sizes="(max-width: 900px) 100vw, 480px"
                />
                <figcaption>{weddingImages[1].caption}</figcaption>
              </figure>
              <figure>
                <ResponsiveImage
                  src={weddingImages[2].src}
                  webp={weddingImages[2].webp}
                  alt={weddingImages[2].alt}
                  width={weddingImages[2].width}
                  height={weddingImages[2].height}
                  sizes="(max-width: 900px) 100vw, 360px"
                />
                <figcaption>{weddingImages[2].caption}</figcaption>
              </figure>
            </div>
            <Link className="btn btn-primary" style={{ marginTop: "2rem" }} to={weddingEnquire}>
              Check your wedding date
            </Link>
          </div>
        </section>

        <section
          className={`section colour-stories reveal ${colourVisible ? "is-visible" : ""}`}
          ref={colourRef}
        >
          <div className="container">
            <span className="section-eyebrow">Colours and styling</span>
            <h2 className="section-title">Find your floral style</h2>
            <p className="section-lead">
              Soft and romantic, fresh and understated, or full of colour. Choose a starting point
              and we’ll shape the flowers around your wedding.
            </p>
            <FloralStylePreview />
            <p className="wedding-palette-note">
              Flower varieties vary with the season. Open the full style selector on packages to
              choose Soft Meadow, Modern Neutral or Colour Pop before you enquire.
            </p>
            <Link className="btn btn-secondary" to={weddingEnquire}>
              Check your wedding date
            </Link>
          </div>
        </section>

        <section
          className={`section included reveal ${includeVisible ? "is-visible" : ""}`}
          ref={includeRef}
        >
          <div className="container">
            <span className="section-eyebrow">What’s included</span>
            <h2 className="section-title">Every wedding booking includes</h2>
            <ul className="included__list">
              {weddingIncludes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="section-lead">
              Our standard experience is self-serve. Assisted options can be discussed when you
              enquire.
            </p>
            <Link className="btn btn-primary" to={weddingEnquire}>
              Check your wedding date
            </Link>
          </div>
        </section>

        <section
          className={`section packages reveal ${pricingVisible ? "is-visible" : ""}`}
          id="wedding-packages"
          ref={pricingRef}
        >
          <div className="container">
            <span className="section-eyebrow">Packages</span>
            <h2 className="section-title">A flower market sized for your celebration</h2>
            <p className="section-lead">
              Packages show how many take-home bouquets are included — not how many wedding guests
              you can invite. A 100-person wedding might book 20 or 30 bouquets for a selected
              group; larger bouquet counts can be quoted separately.
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
                      eventType: "Wedding",
                      packageChoice: pkg.enquiryValue,
                    })}
                  >
                    Check your wedding date
                  </Link>
                </article>
              ))}
            </div>
            <p className="packages__note">
              Planning a larger wedding or more than 40 bouquets? Share your numbers when you
              enquire and we’ll quote accordingly. Delivery, setup and collection within London and
              surrounding areas are included with every package.
            </p>
            <Link className="btn btn-secondary packages__cta" to="/packages/">
              Compare packages
            </Link>
          </div>
        </section>

        <section
          className={`section reveal ${touchVisible ? "is-visible" : ""}`}
          ref={touchRef}
        >
          <div className="container">
            <span className="section-eyebrow">Personal touches</span>
            <h2 className="section-title">Make it yours</h2>
            <p className="section-lead">
              Personalised signs and tags are available by quotation — share what you’d love and
              we’ll advise.
            </p>
            <div className="partner-cards__grid">
              {weddingTouches.map((item) => (
                <article className="partner-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <Link
              className="btn btn-primary"
              style={{ marginTop: "1.75rem" }}
              to={weddingEnquire}
            >
              Check your wedding date
            </Link>
          </div>
        </section>

        <section
          className={`section gallery reveal ${galleryVisible ? "is-visible" : ""}`}
          ref={galleryRef}
        >
          <div className="container">
            <span className="section-eyebrow">Atmosphere</span>
            <h2 className="section-title">Styling concepts for your celebration</h2>
            <p className="section-lead">
              These images are licensed inspiration and styling concepts only. They are not
              photographs of previous wedding bookings.
            </p>
            <div className="gallery__grid">
              {weddingImages.map((item) => (
                <article className="gallery-card gallery-card--bloom" key={item.src}>
                  <div className="gallery-card__visual">
                    <ResponsiveImage
                      src={item.src}
                      webp={item.webp}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 720px) 100vw, 360px"
                    />
                    <span className="preview-label">Styling concept</span>
                  </div>
                  <div className="gallery-card__body">
                    <p>{item.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section faq reveal ${faqVisible ? "is-visible" : ""}`}
          ref={faqRef}
        >
          <div className="container">
            <span className="section-eyebrow">Good to know</span>
            <h2 className="section-title">Wedding flower bar FAQs</h2>
            <FaqList items={weddingFaqs} />
            <Link className="btn btn-primary" style={{ marginTop: "2rem" }} to={weddingEnquire}>
              Check your wedding date
            </Link>
          </div>
        </section>

        <section
          className={`section final-cta reveal ${ctaVisible ? "is-visible" : ""}`}
          id="wedding-enquire"
          ref={ctaRef}
        >
          <div className="container narrow">
            <span className="section-eyebrow">Wedding enquiries</span>
            <h2 className="section-title">Tell us about your big day</h2>
            <p className="section-lead">
              Share your date, venue and approximate bouquet numbers. We’ll check availability and
              help you choose the right market — submitting an enquiry does not reserve your date.
            </p>
            <Link className="btn btn-primary" to={weddingEnquire}>
              Check your wedding date
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
