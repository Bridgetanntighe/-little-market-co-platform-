import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { FaqList } from "../components/FaqList";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { WEDDING_FORM_NAME, submitWeddingEnquiry } from "../data/contact";
import { site } from "../data/site";
import {
  weddingFaqs,
  weddingImages,
  weddingIncludes,
  weddingPackages,
  weddingPalettes,
  weddingSteps,
  weddingTouches,
} from "../data/wedding";
import { scrollToId, useReveal } from "../hooks/useReveal";

type FormState = "idle" | "submitting" | "success" | "error";

const empty = {
  name: "",
  email: "",
  weddingDate: "",
  venue: "",
  guests: "",
  bouquets: "",
  colourIdeas: "",
  additional: "",
  "bot-field": "",
};

function WeddingEnquiryForm() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});

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
    if (!form.venue.trim()) errs.venue = "Please enter your venue or location.";
    if (!form.guests.trim()) errs.guests = "Please enter approximate guest numbers.";
    else if (!/^\d+$/.test(form.guests.trim()) || Number(form.guests) < 1)
      errs.guests = "Please enter a valid guest number.";
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
      setErrorMessage("We could not send your wedding enquiry. Please try again shortly.");
      return;
    }

    setStatus("submitting");
    try {
      await submitWeddingEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        weddingDate: form.weddingDate,
        venue: form.venue.trim(),
        guests: form.guests.trim(),
        bouquets: form.bouquets.trim(),
        colourIdeas: form.colourIdeas.trim(),
        additional: form.additional.trim(),
        "bot-field": form["bot-field"],
      });
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you</h3>
        <p>
          Thank you for sharing your wedding plans. We’ll check your date and reply with package
          thoughts within one working day.
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
    );
  }

  return (
    <form
      name={WEDDING_FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value={WEDDING_FORM_NAME} />
      <input type="hidden" name="enquiryType" value="Wedding" />
      <p className="honeypot" aria-hidden="true">
        <label htmlFor="wedding-bot-field">
          Do not fill this out
          <input
            id="wedding-bot-field"
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
          <label htmlFor="wedding-name">Name</label>
          <input
            id="wedding-name"
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
          <label htmlFor="wedding-email">Email</label>
          <input
            id="wedding-email"
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
          <label htmlFor="wedding-date">
            Wedding date <span className="optional">(optional if undecided)</span>
          </label>
          <input
            id="wedding-date"
            name="weddingDate"
            type="date"
            value={form.weddingDate}
            onChange={set("weddingDate")}
          />
        </div>
        <div className={`field ${fieldErrors.venue ? "has-error" : ""}`}>
          <label htmlFor="wedding-venue">Venue or location</label>
          <input
            id="wedding-venue"
            name="venue"
            required
            value={form.venue}
            onChange={set("venue")}
            aria-invalid={Boolean(fieldErrors.venue)}
          />
          {fieldErrors.venue && <span className="field-error">{fieldErrors.venue}</span>}
        </div>
        <div className={`field ${fieldErrors.guests ? "has-error" : ""}`}>
          <label htmlFor="wedding-guests">Approximate guest numbers</label>
          <input
            id="wedding-guests"
            name="guests"
            inputMode="numeric"
            required
            value={form.guests}
            onChange={set("guests")}
            aria-invalid={Boolean(fieldErrors.guests)}
          />
          {fieldErrors.guests && <span className="field-error">{fieldErrors.guests}</span>}
        </div>
        <div className="field">
          <label htmlFor="wedding-bouquets">
            Number of bouquets wanted <span className="optional">(optional)</span>
          </label>
          <input
            id="wedding-bouquets"
            name="bouquets"
            inputMode="numeric"
            value={form.bouquets}
            onChange={set("bouquets")}
          />
        </div>
        <div className="field full">
          <label htmlFor="wedding-colourIdeas">
            Colour palette or styling ideas <span className="optional">(optional)</span>
          </label>
          <input
            id="wedding-colourIdeas"
            name="colourIdeas"
            value={form.colourIdeas}
            onChange={set("colourIdeas")}
          />
        </div>
        <div className="field full">
          <label htmlFor="wedding-additional">
            Anything else <span className="optional">(optional)</span>
          </label>
          <textarea
            id="wedding-additional"
            name="additional"
            rows={4}
            value={form.additional}
            onChange={set("additional")}
          />
        </div>
      </div>
      <p className="wedding-page__privacy">
        We’ll use your details to check availability and reply about wedding flower bar options. See
        our <Link to="/privacy/">privacy policy</Link>.
      </p>
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
        {status === "submitting" ? "Sending…" : "Check your wedding date"}
      </button>
    </form>
  );
}

export default function WeddingPage() {
  const pageUrl = `${site.url}/wedding-flower-bar-hire-london/`;
  const { ref: experienceRef, visible: experienceVisible } = useReveal<HTMLElement>();
  const { ref: colourRef, visible: colourVisible } = useReveal<HTMLElement>();
  const { ref: includeRef, visible: includeVisible } = useReveal<HTMLElement>();
  const { ref: pricingRef, visible: pricingVisible } = useReveal<HTMLElement>();
  const { ref: touchRef, visible: touchVisible } = useReveal<HTMLElement>();
  const { ref: galleryRef, visible: galleryVisible } = useReveal<HTMLElement>();
  const { ref: faqRef, visible: faqVisible } = useReveal<HTMLElement>();
  const { ref: formSectionRef, visible: formVisible } = useReveal<HTMLElement>();

  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Wedding flower bar hire London",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Wedding Flower Bar Hire London | The Little Market Co",
      description:
        "A self-serve wedding flower bar in London, styled around your celebration. Guests choose seasonal stems, wrap a bouquet and take it home.",
      isPartOf: { "@id": `${site.url}/#organization` },
      about: { "@id": `${site.url}/#business` },
    },
    {
      "@type": "FAQPage",
      mainEntity: weddingFaqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <>
      <Seo
        title="Wedding Flower Bar Hire London | The Little Market Co"
        description="A self-serve wedding flower bar in London, styled around your celebration. Guests choose seasonal stems, wrap a bouquet and take it home."
        path="/wedding-flower-bar-hire-london/"
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
              <h1>Wedding Flower Bar Hire in London</h1>
              <p className="wedding-hero__kicker">A little flower market for your big day</p>
              <p className="wedding-hero__copy">
                Give your guests something beautiful to make and take home. Our self-serve flower
                market brings fresh seasonal flowers, thoughtful styling and a personal touch to
                your wedding.
              </p>
              <div className="hero__actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToId("wedding-enquire")}
                >
                  Check your wedding date
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToId("wedding-experience")}
                >
                  Explore the experience
                </button>
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
              colourful addition to your evening celebration.
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
            <button
              className="btn btn-primary"
              type="button"
              style={{ marginTop: "2rem" }}
              onClick={() => scrollToId("wedding-enquire")}
            >
              Check your wedding date
            </button>
          </div>
        </section>

        <section
          className={`section colour-stories reveal ${colourVisible ? "is-visible" : ""}`}
          ref={colourRef}
        >
          <div className="container">
            <span className="section-eyebrow">Colours and styling</span>
            <h2 className="section-title">Styled around your wedding</h2>
            <p className="section-lead">
              Particular flower varieties depend on season and availability — we suggest stems that
              keep the story fresh on your date.
            </p>
            <div className="colour-stories__grid wedding-palettes">
              {weddingPalettes.map((palette) => (
                <article className="colour-card" key={palette.id}>
                  <div className="colour-card__swatches" aria-hidden="true">
                    {palette.colours.map((colour) => (
                      <span key={colour} style={{ background: colour }} />
                    ))}
                  </div>
                  <h3>{palette.name}</h3>
                  <p>{palette.copy}</p>
                </article>
              ))}
            </div>
            <p className="wedding-palette-note">
              Have your own colour palette? Tell us what you’re planning and we’ll suggest seasonal
              flowers to complement it.
            </p>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => scrollToId("wedding-enquire")}
            >
              Check your wedding date
            </button>
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
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => scrollToId("wedding-enquire")}
            >
              Check your wedding date
            </button>
          </div>
        </section>

        <section
          className={`section packages reveal ${pricingVisible ? "is-visible" : ""}`}
          id="wedding-packages"
          ref={pricingRef}
        >
          <div className="container">
            <span className="section-eyebrow">Pricing</span>
            <h2 className="section-title">A flower market sized for your guest list</h2>
            <p className="section-lead">
              Packages and guest allowances match our homepage, so the quote stays consistent.
              Flower bar hire starts from £395, with flowers tailored to bouquet numbers and style.
            </p>
            <div className="packages__grid packages__grid--three">
              {weddingPackages.map((pkg) => (
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
                  <button
                    className="btn btn-accent"
                    type="button"
                    onClick={() => scrollToId("wedding-enquire")}
                  >
                    Check your wedding date
                  </button>
                </article>
              ))}
            </div>
            <p className="packages__note">
              Planning for a larger wedding? We’ll quote for the number of bouquets you would like
              to provide, your flower choices, styling and venue location. Package guest numbers are
              bouquet allowances — not unlimited wedding guest lists.
            </p>
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
              These additions are available by quotation — share what you’d love and we’ll advise.
            </p>
            <div className="partner-cards__grid">
              {weddingTouches.map((item) => (
                <article className="partner-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
            <button
              className="btn btn-primary"
              type="button"
              style={{ marginTop: "1.75rem" }}
              onClick={() => scrollToId("wedding-enquire")}
            >
              Check your wedding date
            </button>
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
            <button
              className="btn btn-primary"
              type="button"
              style={{ marginTop: "2rem" }}
              onClick={() => scrollToId("wedding-enquire")}
            >
              Check your wedding date
            </button>
          </div>
        </section>

        <section
          className={`section enquire reveal ${formVisible ? "is-visible" : ""}`}
          id="wedding-enquire"
          ref={formSectionRef}
        >
          <div className="container enquire__layout">
            <div>
              <span className="section-eyebrow">Wedding enquiries</span>
              <h2 className="section-title">Tell us about your big day</h2>
              <p className="section-lead">
                Share your date, venue and guest numbers and we’ll check availability with a clear
                package recommendation.
              </p>
            </div>
            <div className="enquire__form">
              <WeddingEnquiryForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
