import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { WorkWithUs } from "../components/WorkWithUs";
import {
  bloomMarket,
  experienceSteps,
  hireOptions,
} from "../data/content";
import { pageSeo } from "../data/pageSeo";
import { site } from "../data/site";
import { enquireHref, scrollToId, useReveal } from "../hooks/useReveal";
import { FloralStylePreview } from "../components/FloralStyleSelector";

const occasions = [
  {
    id: "weddings",
    title: "Weddings",
    copy: "A thoughtful guest activity and a wedding favour in one.",
    to: "/wedding-flower-bar-hire-london/",
    cta: "Explore weddings",
    featured: true,
    image: {
      src: "/images/guests-making-bouquets-flower-market.jpg",
      webp: "/images/guests-making-bouquets-flower-market.webp",
      alt: "Styling concept of wedding guests creating take-home bouquets",
    },
  },
  {
    id: "celebrations",
    title: "Private celebrations",
    copy: "For bridal showers, baby showers and birthdays with a personal touch.",
    to: "/celebrations/",
    cta: "Explore celebrations",
    featured: false,
    image: {
      src: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
      webp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
      alt: "Styling concept of bouquet wrapping for a private celebration",
    },
  },
  {
    id: "corporate",
    title: "Corporate & brands",
    copy: "Flower experiences for teams, launches and client events.",
    to: "/corporate-flower-bar-london/",
    cta: "Explore corporate events",
    featured: false,
    image: {
      src: "/images/london-corporate-flower-bar-office-event.jpg",
      webp: "/images/london-corporate-flower-bar-office-event.webp",
      alt: "Styling concept of a corporate flower market for a London office event",
    },
  },
];

function Experience() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section experience reveal ${visible ? "is-visible" : ""}`}
      id="experience"
      ref={ref}
    >
      <div className="container experience__layout">
        <div>
          <span className="section-eyebrow">The experience</span>
          <h2 className="section-title">Something to enjoy. Something to take home.</h2>
          <p className="section-lead">
            More than a pretty display, our little market gives guests a moment to get creative and
            a bouquet to remember the celebration by.
          </p>
          <div className="steps steps--three">
            {experienceSteps.map((s) => (
              <article className="step" key={s.step}>
                <div className="step__num">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="experience__figure">
          <ResponsiveImage
            src="/images/guests-making-bouquets-flower-market.jpg"
            webp="/images/guests-making-bouquets-flower-market.webp"
            alt="Styling concept close-up showing indicative takeaway bouquet size"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 420px"
          />
          <figcaption>
            Styling concept — indicative takeaway bouquet size (inspiration image)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Occasions() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section occasions reveal ${visible ? "is-visible" : ""}`}
      id="occasions"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Occasions</span>
        <h2 className="section-title">What are you celebrating?</h2>
        <p className="snap-rail__hint" aria-hidden="true">
          Swipe for more
        </p>
        <div className="occasions__cards">
          {occasions.map((item) => (
            <article
              className={`occasion-card ${item.featured ? "occasion-card--featured" : ""}`}
              key={item.id}
            >
              <div className="occasion-card__media">
                <ResponsiveImage
                  src={item.image.src}
                  webp={item.image.webp}
                  alt={item.image.alt}
                  width={1200}
                  height={800}
                  sizes="(max-width: 900px) 100vw, 360px"
                />
                <span className="preview-label">Styling concept</span>
              </div>
              <div className="occasion-card__body">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <Link className="btn btn-secondary" to={item.to}>
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Styling() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section colour-stories reveal ${visible ? "is-visible" : ""}`}
      id="styling"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Styling</span>
        <h2 className="section-title">Find your floral style</h2>
        <p className="section-lead">
          Soft and romantic, fresh and understated, or full of colour. Choose a starting point and
          we’ll shape the flowers around your celebration.
        </p>
        <FloralStylePreview />
      </div>
    </section>
  );
}

function PackagePreview() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section packages reveal ${visible ? "is-visible" : ""}`}
      id="packages"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Packages</span>
        <h2 className="section-title">Find your little market</h2>
        <p className="section-lead">
          Inclusive packages for the styled display and seasonal flowers — choose how many
          take-home bouquets you would like.
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
                to={enquireHref({ packageChoice: pkg.enquiryValue })}
              >
                Check availability
              </Link>
            </article>
          ))}
        </div>
        <Link className="btn btn-secondary packages__cta" to="/packages/">
          Compare packages
        </Link>
      </div>
    </section>
  );
}

function FinalCta() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section final-cta reveal ${visible ? "is-visible" : ""}`}
      id="final-cta"
      ref={ref}
    >
      <div className="container narrow">
        <span className="section-eyebrow">Enquiries</span>
        <h2 className="section-title">Let’s make your celebration bloom</h2>
        <p className="section-lead">
          Share your date, venue and approximate numbers. We’ll check availability and help you
          choose the right flower market.
        </p>
        <Link className="btn btn-primary" to="/enquire/">
          Check your date
        </Link>
      </div>
    </section>
  );
}

const homeJsonLd = [
  {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.service,
    areaServed: site.serviceArea,
    logo: `${site.url}/favicon.svg`,
  },
  {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.service,
    image: site.ogImage,
    priceRange: "££",
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Greater London" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
    parentOrganization: { "@id": `${site.url}/#organization` },
  },
  {
    "@type": "Service",
    "@id": `${site.url}/#bloom-market`,
    name: bloomMarket.name,
    serviceType: "Flower bar hire",
    provider: { "@id": `${site.url}/#business` },
    areaServed: "London",
    description: bloomMarket.description,
  },
];

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const id = location.hash.replace("#", "");
    if (!id) return;
    if (id === "packages") {
      navigate("/packages/", { replace: true });
      return;
    }
    if (id === "enquire") {
      navigate("/enquire/", { replace: true });
      return;
    }
    requestAnimationFrame(() => scrollToId(id));
  }, [location.hash, navigate]);

  return (
    <>
      <Seo
        title={pageSeo.home.title}
        description={pageSeo.home.description}
        path={pageSeo.home.path}
        image={pageSeo.home.ogImage}
        jsonLd={homeJsonLd}
      />
      <main>
        <section className="hero hero--compact" id="top" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div>
              <span className="hero__eyebrow">Flower bar hire for weddings & celebrations</span>
              <h1 id="hero-heading">
                A little flower market.
                <br />
                A beautiful part of your celebration.
              </h1>
              <p className="hero__copy">
                Guests choose their favourite stems, wrap a bouquet and take a little of your day
                home. A beautifully styled, self-serve flower experience across London.
              </p>
              <div className="hero__actions">
                <Link className="btn btn-primary" to="/enquire/">
                  Check your date
                </Link>
                <Link className="btn btn-secondary" to="/wedding-flower-bar-hire-london/">
                  Explore weddings
                </Link>
              </div>
              <p className="hero__support">
                Seasonal flowers · Thoughtful styling · Setup & collection
              </p>
            </div>
            <figure className="hero__visual hero__visual--photo">
              <ResponsiveImage
                src="/images/seasonal-flower-stems-self-serve-bar-london.jpg"
                webp="/images/seasonal-flower-stems-self-serve-bar-london.webp"
                alt="Styling concept of a compact flower market with wrapping area and takeaway bouquets"
                width={1200}
                height={1200}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 480px"
              />
              <figcaption>
                Styling concept — compact flower market with wrapping area (inspiration image)
              </figcaption>
            </figure>
          </div>
        </section>
        <Experience />
        <Occasions />
        <Styling />
        <PackagePreview />
        <FinalCta />
        <WorkWithUs />
      </main>
    </>
  );
}
