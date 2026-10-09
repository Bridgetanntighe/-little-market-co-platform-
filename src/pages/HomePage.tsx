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
    shortTitle: "Weddings",
    copy: "Reception moment and guest favour in one.",
    to: "/wedding-flower-bar-hire-london/",
    cta: "View",
    featured: true,
    image: {
      src: "/images/guests-making-bouquets-flower-market.jpg",
      webp: "/images/guests-making-bouquets-flower-market.webp",
      alt: "Wedding guests creating take-home bouquets at a flower market",
    },
  },
  {
    id: "celebrations",
    title: "Private celebrations",
    shortTitle: "Celebrations",
    copy: "Showers, birthdays and private parties.",
    to: "/celebrations/",
    cta: "View",
    featured: false,
    image: {
      src: "/images/bouquet-wrapping-ribbon-flower-bar-london.jpg",
      webp: "/images/bouquet-wrapping-ribbon-flower-bar-london.webp",
      alt: "Bouquet wrapping at a private celebration flower stall",
    },
  },
  {
    id: "corporate",
    title: "Corporate & brands",
    shortTitle: "Corporate",
    copy: "Launches, team days and client events.",
    to: "/corporate-flower-bar-london/",
    cta: "View",
    featured: false,
    image: {
      src: "/images/london-corporate-flower-bar-office-event.jpg",
      webp: "/images/london-corporate-flower-bar-office-event.webp",
      alt: "Corporate flower market at a London office event",
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
          <span className="section-eyebrow">How it works</span>
          <h2 className="section-title">We bring the market. You host the day.</h2>
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
            alt="Guests making bouquets at a self-serve flower market"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 420px"
          />
        </figure>
      </div>
    </section>
  );
}

function Occasions() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section occasions occasions--chooser reveal ${visible ? "is-visible" : ""}`}
      id="occasions"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Occasions</span>
        <h2 className="section-title">Where we set up</h2>
        <div className="occasions__cards">
          {occasions.map((item) => (
            <Link
              className={`occasion-card ${item.featured ? "occasion-card--featured" : ""}`}
              to={item.to}
              key={item.id}
            >
              <div className="occasion-card__media">
                <ResponsiveImage
                  src={item.image.src}
                  webp={item.image.webp}
                  alt=""
                  width={1200}
                  height={800}
                  sizes="(max-width: 720px) 33vw, 360px"
                />
              </div>
              <div className="occasion-card__body">
                <h3>
                  <span className="occasion-card__title-full">{item.title}</span>
                  <span className="occasion-card__title-short">{item.shortTitle}</span>
                </h3>
                <p>{item.copy}</p>
                <span className="occasion-card__cta">
                  <span className="occasion-card__cta-full">{item.cta}</span>
                  <span className="occasion-card__cta-short">Explore</span>
                </span>
              </div>
            </Link>
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
        <h2 className="section-title">Choose a palette</h2>
        <p className="section-lead">
          Three starting points. We dress the market to match your day.
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
        <h2 className="section-title">Clear packages. From £495.</h2>
        <p className="section-lead">
          Display, seasonal flowers and take-home bouquets — setup and collection included.
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
              <p>{pkg.note}</p>
              <Link
                className="btn btn-accent"
                to={enquireHref({ packageChoice: pkg.enquiryValue })}
              >
                Check date
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
        <span className="section-eyebrow">Book</span>
        <h2 className="section-title">Tell us your date and venue</h2>
        <p className="section-lead">
          We’ll confirm availability and send a clear quote.
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
    serviceType: "Mobile flower market hire",
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
        <section className="hero hero--compact hero--bloom" id="top" aria-labelledby="hero-heading">
          <div className="hero__atmosphere" aria-hidden="true">
            <ResponsiveImage
              src="/images/seasonal-flower-stems-self-serve-bar-london.jpg"
              webp="/images/seasonal-flower-stems-self-serve-bar-london.webp"
              alt=""
              width={1200}
              height={1200}
              loading="eager"
              sizes="100vw"
            />
          </div>
          <div className="container hero__grid">
            <div className="hero__content">
              <span className="hero__eyebrow">Mobile flower market hire · London</span>
              <h1 id="hero-heading">
                A flower market for your wedding or event.
              </h1>
              <p className="hero__copy">
                We bring a styled, self-serve flower stall to your venue. Guests make a bouquet to
                take home — we set up and collect.
              </p>
              <div className="hero__actions">
                <Link className="btn btn-primary" to="/enquire/">
                  Check your date
                </Link>
                <Link className="btn btn-secondary" to="/packages/">
                  View packages
                </Link>
              </div>
              <p className="hero__support">
                Setup & collection included · London & surrounding areas
              </p>
            </div>
            <figure className="hero__visual hero__visual--photo">
              <ResponsiveImage
                src="/images/seasonal-flower-stems-self-serve-bar-london.jpg"
                webp="/images/seasonal-flower-stems-self-serve-bar-london.webp"
                alt="Styled mobile flower market with seasonal stems and wrapping area"
                width={1200}
                height={1200}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </figure>
          </div>
        </section>
        <Occasions />
        <Experience />
        <Styling />
        <PackagePreview />
        <FinalCta />
        <WorkWithUs />
      </main>
    </>
  );
}
