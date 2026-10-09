import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
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
} from "./data/content";
import { contact, NETLIFY_FORM_NAME, submitEnquiry } from "./data/contact";
import {
  enquireWithOption,
  ENQUIRY_PREFILL_KEY,
  scrollToId,
  useReveal,
  type EnquiryPrefill,
} from "./hooks/useReveal";
import { StallScene } from "./components/StallScene";
import "./styles/global.css";
import "./styles/sections.css";

const nav = [
  { id: "packages", label: "Packages" },
  { id: "colour-stories", label: "Colour stories" },
  { id: "occasions", label: "Occasions" },
  { id: "how-it-works", label: "How it works" },
  { id: "included", label: "Included" },
  { id: "faq", label: "FAQs" },
  { id: "enquire", label: "Check availability" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <a
          href="#enquire"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("enquire");
          }}
        >
          Flower bar hire from £395 — tell us your date and guest numbers for a clear quote
        </a>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          href="#top"
          className="brand"
          onClick={(e) => {
            e.preventDefault();
            go("top");
          }}
        >
          <span className="brand__name">The Little Market Co.</span>
          <span className="brand__tag">Flower Bar Hire · London</span>
        </a>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {nav.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

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
                <img src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
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

  useEffect(() => {
    const scriptId = "tlmc-faq-schema";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    const data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };
    const script = existing ?? document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    if (!existing) document.head.appendChild(script);
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  return (
    <section className={`section faq reveal ${visible ? "is-visible" : ""}`} id="faq" ref={ref}>
      <div className="container">
        <span className="section-eyebrow">Good to know</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">The Little Market Co.</div>
            <p>{contact.serviceArea}</p>
            <p>The Little Bloom Market · Flower bar hire</p>
          </div>
          <div>
            <div className="site-footer__label">Email</div>
            {contact.email ? (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ) : (
              <p>Use the enquiry form above</p>
            )}
          </div>
          <div>
            <div className="site-footer__label">Book</div>
            <button
              className="btn btn-accent"
              type="button"
              onClick={() => scrollToId("enquire")}
            >
              Check availability
            </button>
          </div>
        </div>
        <p className="site-footer__tagline">A flower market your guests can take home.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <div className="site-top">
        <Announcement />
        <Header />
      </div>
      <main>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div>
              <span className="hero__eyebrow">Flower bar hire London</span>
              <h1 id="hero-heading">A flower market your guests can take home</h1>
              <p className="hero__copy">
                A beautifully styled, self-serve flower experience for offices, parties, launches
                and brand events across London.
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
        <ColourStories />
        <Occasions />
        <HowItWorks />
        <Included />
        <Gallery />
        <Enquiry />
        <FAQ />
      </main>
      <Footer />
      <div className="sticky-cta">
        <button className="btn btn-accent" type="button" onClick={() => scrollToId("enquire")}>
          Check availability
        </button>
      </div>
    </>
  );
}
