import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  colourStories,
  colourStoryChoices,
  everyBookingIncludes,
  eventTypes,
  faqs,
  galleryItems,
  hireOptions,
  howItWorks,
  memorableMoments,
  packageChoices,
} from "../data/content";
import { NETLIFY_FORM_NAME, submitEnquiry } from "../data/contact";
import { site } from "../data/site";
import {
  enquireWithOption,
  ENQUIRY_PREFILL_KEY,
  scrollToId,
  useReveal,
  type EnquiryPrefill,
} from "../hooks/useReveal";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { StallScene } from "../components/StallScene";
import { WorkWithUs } from "../components/WorkWithUs";

function Packages() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section packages reveal ${visible ? "is-visible" : ""}`}
      id="packages"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Packages</span>
        <h2 className="section-title">Choose your flower market</h2>
        <p className="section-lead">
          Our flower bar hire starts from £395. Flowers are then tailored to your guest numbers and
          chosen bouquet style. The final price depends on guest numbers, flowers, location and
          branding.
        </p>
        <div className="packages__grid packages__grid--three">
          {hireOptions.map((pkg) => (
            <article className={`package ${pkg.popular ? "package--popular" : ""}`} key={pkg.id}>
              {pkg.popular && <span className="package__badge">Most popular</span>}
              <h3>{pkg.name}</h3>
              <div className="package__price">{pkg.price}</div>
              <span className="package__note">{pkg.note}</span>
              <p>{pkg.description}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                className="btn btn-accent"
                type="button"
                onClick={() => enquireWithOption({ packageChoice: pkg.enquiryValue })}
              >
                {pkg.cta}
              </button>
            </article>
          ))}
        </div>
        <div className="pricing-notes">
          <p>
            Flower bar hire starts from £395. Flowers are then tailored to your guest numbers and
            chosen bouquet style.
          </p>
          <p className="pricing-notes__secondary">
            As a guide only: mini bouquet allowance from £18 per guest · fuller bouquet allowance
            from £25 per guest · branding from £150. Your final quote is based on the event.
          </p>
          <p>
            Planning a larger event? We can create a bespoke quote for larger guest numbers, florist
            assistance or additional branding.
          </p>
        </div>
        <button
          className="btn btn-primary packages__cta"
          type="button"
          onClick={() => scrollToId("enquire")}
        >
          Check availability
        </button>
      </div>
    </section>
  );
}

function ColourStories() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section colour-stories reveal ${visible ? "is-visible" : ""}`}
      id="colour-stories"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Colour stories</span>
        <h2 className="section-title">Choose your colour story</h2>
        <p className="section-lead">
          Pick a palette to suit the mood of your event. Seasonal substitutions may apply so stems
          stay fresh on the day.
        </p>
        <div className="colour-stories__grid">
          {colourStories.map((story) => (
            <article className="colour-card" key={story.id}>
              <div className="colour-card__swatches" aria-hidden="true">
                {story.colours.map((colour) => (
                  <span key={colour} style={{ background: colour }} />
                ))}
              </div>
              <h3>{story.name}</h3>
              <p>{story.copy}</p>
              <p className="colour-card__best">{story.bestFor}</p>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  enquireWithOption({
                    colourStory: story.enquiryValue,
                    packageChoice:
                      story.id === "brand-match" ? "The Brand Market" : undefined,
                  })
                }
              >
                Check availability
              </button>
            </article>
          ))}
        </div>
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
        <h2 className="section-title">Made for moments worth remembering</h2>
        <p className="section-lead">
          A self-serve flower bar for offices, parties, launches and brand events across London.
        </p>
        <div className="moments">
          {memorableMoments.map((moment) => (
            <span className="moment" key={moment}>
              {moment}
            </span>
          ))}
        </div>
        <button
          className="btn btn-primary occasions__cta"
          type="button"
          onClick={() => scrollToId("enquire")}
        >
          Check availability
        </button>
      </div>
    </section>
  );
}

function WeddingFeature() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section wedding-feature reveal ${visible ? "is-visible" : ""}`}
      id="weddings-feature"
      ref={ref}
    >
      <div className="container wedding-feature__panel">
        <div>
          <span className="section-eyebrow">Weddings</span>
          <h2 className="section-title">A little market for your big day</h2>
          <p className="section-lead">
            A beautiful wedding activity and a bouquet for guests to take home, styled around your
            celebration.
          </p>
          <Link className="btn btn-primary" to="/wedding-flower-bar-hire-london/">
            Explore wedding flower bars
          </Link>
        </div>
        <figure className="wedding-feature__figure">
          <ResponsiveImage
            src="/images/guests-making-bouquets-flower-market.jpg"
            webp="/images/guests-making-bouquets-flower-market.webp"
            alt="Styling concept of guests making take-home wedding bouquets"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 420px"
          />
          <figcaption>Styling concept — wedding bouquet atmosphere (inspiration image)</figcaption>
        </figure>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section reveal ${visible ? "is-visible" : ""}`}
      id="how-it-works"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Simple process</span>
        <h2 className="section-title">How it works</h2>
        <p className="section-lead">
          Guests choose their favourite stems, create their own bouquet and take it home as a
          beautiful reminder of the event.
        </p>
        <div className="steps steps--three">
          {howItWorks.map((s) => (
            <article className="step" key={s.step}>
              <div className="step__num">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => scrollToId("enquire")}
          style={{ marginTop: "2rem" }}
        >
          Check availability
        </button>
      </div>
    </section>
  );
}

function Included() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section included reveal ${visible ? "is-visible" : ""}`}
      id="included"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">What’s included</span>
        <h2 className="section-title">Every booking includes</h2>
        <ul className="included__list">
          {everyBookingIncludes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => scrollToId("enquire")}
        >
          Check availability
        </button>
      </div>
    </section>
  );
}

function SeoCopy() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section seo-copy reveal ${visible ? "is-visible" : ""}`}
      id="about-hire"
      ref={ref}
    >
      <div className="container seo-copy__grid">
        <div>
          <span className="section-eyebrow">London flower experiences</span>
          <h2 className="section-title">Styled flower market hire for real events</h2>
          <p>
            The Little Market Co specialises in{" "}
            <Link to="/flower-bar-hire-london/">flower bar hire in London</Link> for hosts who want
            guests to leave with something they made. Our Little Bloom Market is a self-serve
            station of seasonal stems, wrapping and care cards — delivered to your venue, styled for
            photographs, then collected when the evening ends.
          </p>
          <p>
            Teams book us for an{" "}
            <Link to="/corporate-flower-bar-london/">office flower activity</Link> that feels calmer
            than typical entertainment, while producers look to us for a{" "}
            <Link to="/brand-activation-flower-bar/">brand activation flower bar</Link> with custom
            colour stories. Private celebrations and{" "}
            <Link to="/flower-workshop-london/">bouquet-making workshops</Link> use the same market
            format with a little more guidance when needed.
          </p>
          <p>
            If you are planning a festive party, explore our{" "}
            <Link to="/christmas-flower-bar-london/">Christmas flower bar</Link> options, or compare{" "}
            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("packages");
              }}
            >
              packages
            </a>{" "}
            for guest numbers from intimate dinners to larger corporate rooms. We also support{" "}
            <strong>bouquet bar hire London</strong> briefs and{" "}
            <strong>flower market hire London</strong> requests where the brief is simply a
            beautiful, interactive floral moment.
          </p>
          <p>
            Whether you need a polished <strong>corporate flower bar London</strong> setup or a fully{" "}
            <strong>branded flower bar</strong> for a launch, tell us your date and we will recommend
            the right package with a clear quote.
          </p>
        </div>
        <figure className="seo-copy__figure">
          <ResponsiveImage
            src="/images/london-corporate-flower-bar-office-event.jpg"
            webp="/images/london-corporate-flower-bar-office-event.webp"
            alt="Corporate flower bar hire styled for an office event in London"
            width={1200}
            height={800}
            sizes="(max-width: 900px) 100vw, 480px"
          />
          <figcaption>
            Inspiration image — atmosphere for London office and celebration bookings (stock photo)
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Gallery() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section gallery reveal ${visible ? "is-visible" : ""}`}
      id="gallery"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Inspiration</span>
        <h2 className="section-title">Bloom Market atmosphere</h2>
        <p className="section-lead">
          These photos are licensed stock used as inspiration for atmosphere and styling only. They
          are not photographs of previous client events.
        </p>
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article className="gallery-card gallery-card--bloom" key={item.id}>
              <div className="gallery-card__visual">
                <ResponsiveImage
                  src={item.imageSrc}
                  webp={item.imageWebp}
                  alt={item.imageAlt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 720px) 100vw, 360px"
                />
                <span className="preview-label">Inspiration</span>
              </div>
              <div className="gallery-card__body">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => scrollToId("enquire")}
          style={{ marginTop: "2rem" }}
        >
          Check availability
        </button>
      </div>
    </section>
  );
}

type FormState = "idle" | "submitting" | "success" | "error";

function todayIsoDate() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function Enquiry() {
  const empty = {
    name: "",
    email: "",
    company: "",
    eventDate: "",
    venue: "",
    guests: "",
    eventType: "",
    packageChoice: "",
    colourStory: "",
    additional: "",
    "bot-field": "",
  };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});
  const { ref, visible } = useReveal<HTMLElement>();
  const minEventDate = todayIsoDate();

  useEffect(() => {
    const apply = (detail: EnquiryPrefill) => {
      setStatus("idle");
      setErrorMessage("");
      setForm((f) => ({
        ...f,
        ...(detail.packageChoice ? { packageChoice: detail.packageChoice } : {}),
        ...(detail.colourStory ? { colourStory: detail.colourStory } : {}),
      }));
    };

    const stored = sessionStorage.getItem(ENQUIRY_PREFILL_KEY);
    if (stored) {
      try {
        apply(JSON.parse(stored) as EnquiryPrefill);
      } catch {
        apply({ packageChoice: stored });
      }
    }

    const onPrefill = (e: Event) => apply((e as CustomEvent<EnquiryPrefill>).detail);
    window.addEventListener("tlmc-enquiry-prefill", onPrefill);
    return () => window.removeEventListener("tlmc-enquiry-prefill", onPrefill);
  }, []);

  const set =
    (key: keyof typeof empty) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setFieldErrors((errs) => {
        if (!errs[key]) return errs;
        const next = { ...errs };
        delete next[key];
        return next;
      });
    };

  const validate = () => {
    const errs: Partial<Record<keyof typeof empty, string>> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim()) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email address.";
    if (!form.eventDate) errs.eventDate = "Please choose an event date.";
    else if (form.eventDate < minEventDate)
      errs.eventDate = "Please choose today or a future event date.";
    if (!form.venue.trim()) errs.venue = "Please enter the event location.";
    if (!form.guests.trim()) errs.guests = "Please enter approximate guest numbers.";
    else if (!/^\d+$/.test(form.guests.trim()) || Number(form.guests) < 1)
      errs.guests = "Please enter a valid guest number.";
    if (!form.eventType) errs.eventType = "Please select an event type.";
    if (!form.packageChoice) errs.packageChoice = "Please select a package.";
    if (!form.colourStory) errs.colourStory = "Please select a colour story.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    if (!validate()) {
      setStatus("error");
      setErrorMessage("Please check the highlighted fields and try again.");
      return;
    }
    if (form["bot-field"].trim()) {
      setStatus("error");
      setErrorMessage("We could not send your enquiry. Please try again shortly.");
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        company: form.company.trim(),
        eventDate: form.eventDate,
        venue: form.venue.trim(),
        guests: form.guests.trim(),
        eventType: form.eventType,
        packageChoice: form.packageChoice,
        colourStory: form.colourStory,
        additional: form.additional.trim(),
        "bot-field": form["bot-field"],
      });
      sessionStorage.removeItem(ENQUIRY_PREFILL_KEY);
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      className={`section enquire reveal ${visible ? "is-visible" : ""}`}
      id="enquire"
      ref={ref}
    >
      <div className="container enquire__layout">
        <div>
          <span className="section-eyebrow">Enquiries</span>
          <h2 className="section-title">Let’s plan your flower market</h2>
          <p className="section-lead">
            Tell us a little about your event and we’ll check availability, recommend the right
            package and reply with a clear quote.
          </p>
        </div>
        <div className="enquire__form">
          {status === "success" ? (
            <div className="form-success" role="status">
              <h3>Thank you</h3>
              <p>
                Thank you. We’ll check your date and reply with package options within one working
                day.
              </p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setErrorMessage("");
                }}
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form
              name={NETLIFY_FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={submit}
              noValidate
            >
              <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
              <p className="honeypot" aria-hidden="true">
                <label htmlFor="bot-field">
                  Do not fill this out
                  <input
                    id="bot-field"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form["bot-field"]}
                    onChange={set("bot-field")}
                  />
                </label>
              </p>
              <div className="form-grid">
                <div className={`field ${fieldErrors.name ? "has-error" : ""}`}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={set("name")}
                    aria-invalid={Boolean(fieldErrors.name)}
                  />
                  {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                </div>
                <div className={`field ${fieldErrors.email ? "has-error" : ""}`}>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    aria-invalid={Boolean(fieldErrors.email)}
                  />
                  {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="company">
                    Company <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={set("company")}
                  />
                </div>
                <div className={`field ${fieldErrors.eventDate ? "has-error" : ""}`}>
                  <label htmlFor="eventDate">Event date</label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    min={minEventDate}
                    value={form.eventDate}
                    onChange={set("eventDate")}
                    aria-invalid={Boolean(fieldErrors.eventDate)}
                  />
                  {fieldErrors.eventDate && (
                    <span className="field-error">{fieldErrors.eventDate}</span>
                  )}
                </div>
                <div className={`field ${fieldErrors.venue ? "has-error" : ""}`}>
                  <label htmlFor="venue">Event location</label>
                  <input
                    id="venue"
                    name="venue"
                    required
                    value={form.venue}
                    onChange={set("venue")}
                    aria-invalid={Boolean(fieldErrors.venue)}
                  />
                  {fieldErrors.venue && <span className="field-error">{fieldErrors.venue}</span>}
                </div>
                <div className={`field ${fieldErrors.guests ? "has-error" : ""}`}>
                  <label htmlFor="guests">Approximate guest numbers</label>
                  <input
                    id="guests"
                    name="guests"
                    inputMode="numeric"
                    required
                    value={form.guests}
                    onChange={set("guests")}
                    aria-invalid={Boolean(fieldErrors.guests)}
                  />
                  {fieldErrors.guests && <span className="field-error">{fieldErrors.guests}</span>}
                </div>
                <div className={`field ${fieldErrors.eventType ? "has-error" : ""}`}>
                  <label htmlFor="eventType">Event type</label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={set("eventType")}
                    aria-invalid={Boolean(fieldErrors.eventType)}
                  >
                    <option value="">Select…</option>
                    {eventTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  {fieldErrors.eventType && (
                    <span className="field-error">{fieldErrors.eventType}</span>
                  )}
                </div>
                <div className={`field ${fieldErrors.packageChoice ? "has-error" : ""}`}>
                  <label htmlFor="packageChoice">Package of interest</label>
                  <select
                    id="packageChoice"
                    name="packageChoice"
                    required
                    value={form.packageChoice}
                    onChange={set("packageChoice")}
                    aria-invalid={Boolean(fieldErrors.packageChoice)}
                  >
                    <option value="">Select…</option>
                    {packageChoices.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  {fieldErrors.packageChoice && (
                    <span className="field-error">{fieldErrors.packageChoice}</span>
                  )}
                </div>
                <div className={`field ${fieldErrors.colourStory ? "has-error" : ""}`}>
                  <label htmlFor="colourStory">Colour story</label>
                  <select
                    id="colourStory"
                    name="colourStory"
                    required
                    value={form.colourStory}
                    onChange={set("colourStory")}
                    aria-invalid={Boolean(fieldErrors.colourStory)}
                  >
                    <option value="">Select…</option>
                    {colourStoryChoices.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  {fieldErrors.colourStory && (
                    <span className="field-error">{fieldErrors.colourStory}</span>
                  )}
                </div>
                <div className="field full">
                  <label htmlFor="additional">Additional details</label>
                  <textarea
                    id="additional"
                    name="additional"
                    value={form.additional}
                    onChange={set("additional")}
                  />
                </div>
              </div>
              {status === "error" && errorMessage && (
                <p className="form-error" role="alert">
                  {errorMessage}
                </p>
              )}
              <button
                className="btn btn-accent"
                type="submit"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Check availability"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section className={`section faq reveal ${visible ? "is-visible" : ""}`} id="faq" ref={ref}>
      <div className="container">
        <span className="section-eyebrow">Good to know</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <FaqList items={faqs} />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => scrollToId("enquire")}
          style={{ marginTop: "2rem" }}
        >
          Check availability
        </button>
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
    name: "The Little Bloom Market",
    serviceType: "Flower bar hire",
    provider: { "@id": `${site.url}/#business` },
    areaServed: "London",
    description:
      "Self-serve flower bar hire in London for offices, brand activations, launches, parties and celebrations. Guests create a take-home bouquet.",
  },
  {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
];

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => scrollToId(id));
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title={site.defaultTitle}
        description={site.defaultDescription}
        path="/"
        jsonLd={homeJsonLd}
      />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div>
              <span className="hero__eyebrow">Flower bar hire London</span>
              <h1 id="hero-heading">Flower Bar Hire in London for Unforgettable Events</h1>
              <p className="hero__copy">
                A beautifully styled, self-serve flower experience for offices, parties, launches
                and brand events across London. Guests choose stems, wrap a bouquet and take it
                home.
              </p>
              <div className="hero__actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToId("enquire")}
                >
                  Plan your flower bar
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToId("packages")}
                >
                  See packages
                </button>
              </div>
              <p className="hero__support">
                Flower bar hire from £395
                <span className="hero__support-note">
                  The final price depends on guest numbers, flowers, location and branding.
                </span>
              </p>
            </div>
            <div className="hero__visual">
              <div className="hero__frame">
                <div className="scallop" aria-hidden="true" />
                <StallScene market="bloom" />
                <div className="hero__badge">The Little Bloom Market</div>
              </div>
            </div>
          </div>
        </section>
        <Packages />
        <SeoCopy />
        <ColourStories />
        <Occasions />
        <WeddingFeature />
        <HowItWorks />
        <Included />
        <Gallery />
        <Enquiry />
        <WorkWithUs />
        <FAQ />
      </main>
    </>
  );
}
