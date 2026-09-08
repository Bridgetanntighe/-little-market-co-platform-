import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import {
  bloomMarket,
  eventTypes,
  experienceBenefits,
  faqs,
  galleryItems,
  hireOptions,
  howItWorks,
  packageChoices,
  winterBloom,
  yesNoChoices,
} from "./data/content";
import { contact, submitEnquiry } from "./data/contact";
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
  { id: "bloom-market", label: "The Bloom Market" },
  { id: "packages", label: "Packages" },
  { id: "christmas", label: "Christmas" },
  { id: "brands", label: "For Brands" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQs" },
  { id: "enquire", label: "Enquire" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <a
          href="#christmas"
          onClick={(e) => {
            e.preventDefault();
            scrollToId("christmas");
          }}
        >
          Christmas 2026 bookings are now open — limited December dates available
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

function Experience() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      className={`section experience reveal ${visible ? "is-visible" : ""}`}
      id="bloom-market"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">The experience</span>
        <h2 className="section-title">
          Part flower bar. Part guest experience. Part take-home gift.
        </h2>
        <p className="section-lead">
          The Little Bloom Market gives guests the chance to select seasonal stems and create their
          own small bouquet. Every market is prepared around your event or brand palette with
          wrapping, ribbon and simple guest instructions included. We set everything up before your
          event and return later to collect it.
        </p>
        <div className="experience__panel">
          <div className="experience__art">
            <StallScene market="bloom" />
            <span className="preview-label">Concept Preview</span>
          </div>
          <div className="experience__content">
            <h3>{bloomMarket.name}</h3>
            <p>{bloomMarket.description}</p>
            <div className="block-title">Well suited to</div>
            <div className="chip-row">
              {bloomMarket.occasions.map((o) => (
                <span className="chip" key={o}>
                  {o}
                </span>
              ))}
            </div>
            <p className="experience__secondary">
              Also lovely for {bloomMarket.secondaryUses.join(" and ").toLowerCase()}.
            </p>
          </div>
        </div>
        <div className="benefits">
          {experienceBenefits.map((b) => (
            <article className="benefit" key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section className={`section reveal ${visible ? "is-visible" : ""}`} id="how-it-works" ref={ref}>
      <div className="container">
        <span className="section-eyebrow">Simple process</span>
        <h2 className="section-title">How It Works</h2>
        <p className="section-lead">
          From first enquiry to collection day, every Bloom Market is prepared with clarity and care.
        </p>
        <div className="steps">
          {howItWorks.map((s) => (
            <article className="step" key={s.step}>
              <div className="step__num">{s.step}</div>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
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
        <h2 className="section-title">Two ways to book</h2>
        <p className="section-lead">
          Choose a styled flower market for your guests, or a fully branded activation for your
          campaign.
        </p>
        <div className="packages__grid">
          {hireOptions.map((pkg) => (
            <article className="package" key={pkg.id}>
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
                onClick={() =>
                  enquireWithOption({
                    packageChoice: pkg.enquiryValue,
                    brandPersonalisation: pkg.id === "branded-bloom" ? "Yes" : undefined,
                  })
                }
              >
                {pkg.cta}
              </button>
            </article>
          ))}
        </div>
        <p className="packages__note">
          Additional guests, premium flower requests and extended hire can be quoted separately.
          Delivery is calculated according to location and access.
        </p>
      </div>
    </section>
  );
}

function Christmas() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section christmas reveal ${visible ? "is-visible" : ""}`}
      id="christmas"
      ref={ref}
    >
      <div className="container christmas__panel">
        <div>
          <span className="section-eyebrow">Christmas 2026</span>
          <h2 className="section-title">{winterBloom.heading}</h2>
          <p className="section-lead">{winterBloom.lead}</p>
          <p className="christmas__copy">{winterBloom.copy}</p>
          <ul className="christmas__list">
            {winterBloom.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() =>
              enquireWithOption({
                christmasBooking: "Yes",
                packageChoice: "Styled Bloom Market",
              })
            }
          >
            {winterBloom.cta}
          </button>
        </div>
        <aside className="christmas__aside" aria-hidden="true">
          <span>Winter stems</span>
          <span>Office parties</span>
          <span>Client gifts</span>
          <span>Brand moments</span>
        </aside>
      </div>
    </section>
  );
}

function Brands() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section className={`section brands reveal ${visible ? "is-visible" : ""}`} id="brands" ref={ref}>
      <div className="container brands__panel">
        <div>
          <span className="section-eyebrow">For brands &amp; campaigns</span>
          <h2 className="section-title">A flower market made for your brand</h2>
          <p className="section-lead">
            Turn The Little Bloom Market into a branded guest experience for product launches, press
            days, retail moments and client events. We can coordinate the flowers, signage, wrapping
            and take-home details with your campaign.
          </p>
          <p className="brands__detail">
            Logo panels, campaign colours, branded bouquet sleeves, tags and custom guest messaging
            can all be prepared so the market works for content, photography and guest gifting.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() =>
              enquireWithOption({
                packageChoice: "Branded Bloom Market",
                brandPersonalisation: "Yes",
              })
            }
          >
            Plan a Brand Activation
          </button>
        </div>
        <aside className="brands__aside" aria-hidden="true">
          <span>Logo panels</span>
          <span>Campaign colour</span>
          <span>Branded sleeves</span>
          <span>Custom tags</span>
        </aside>
      </div>
    </section>
  );
}

function About() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section className={`section about reveal ${visible ? "is-visible" : ""}`} id="about" ref={ref}>
      <div className="container about__grid">
        <div className="about__mark" aria-hidden="true">
          <span>A little market. Made for your event.</span>
        </div>
        <div>
          <span className="section-eyebrow">About us</span>
          <h2 className="section-title">Mother-and-daughter care. Flower experiences.</h2>
          <p>
            The Little Market Co is an independent mother-and-daughter event studio based in London.
            We create thoughtful flower experiences that feel warm, considered and beautifully put
            together. Every Bloom Market is prepared with the same care we would give to our own
            celebration.
          </p>
        </div>
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
        <span className="section-eyebrow">Concept Preview</span>
        <h2 className="section-title">Bloom Market atmosphere</h2>
        <p className="section-lead">
          These visuals are concept previews showing intended atmosphere only. They are not previous
          client bookings. Real event photography can replace each preview when available.
        </p>
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <article className="gallery-card gallery-card--bloom" key={item.id}>
              <div className="gallery-card__visual">
                {item.imageSrc ? (
                  <img src={item.imageSrc} alt={item.imageAlt} loading="lazy" />
                ) : (
                  <>
                    <span className="preview-label">Concept Preview</span>
                    <span className="visually-hidden">{item.imageAlt}</span>
                  </>
                )}
              </div>
              <div className="gallery-card__body">
                <h3>{item.title}</h3>
                <p>{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type FormState = "idle" | "submitting" | "success" | "error";

function Enquiry() {
  const empty = {
    name: "",
    email: "",
    phone: "",
    company: "",
    eventType: "",
    packageChoice: "",
    eventDate: "",
    venue: "",
    guests: "",
    christmasBooking: "",
    brandPersonalisation: "",
    additional: "",
  };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});
  const { ref, visible } = useReveal<HTMLElement>();

  useEffect(() => {
    const apply = (detail: EnquiryPrefill) => {
      setStatus("idle");
      setErrorMessage("");
      setForm((f) => ({
        ...f,
        ...(detail.packageChoice ? { packageChoice: detail.packageChoice } : {}),
        ...(detail.christmasBooking ? { christmasBooking: detail.christmasBooking } : {}),
        ...(detail.brandPersonalisation
          ? { brandPersonalisation: detail.brandPersonalisation }
          : {}),
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
    if (!form.phone.trim()) errs.phone = "Please enter a phone number.";
    if (!form.company.trim()) errs.company = "Please enter your company or organisation.";
    if (!form.eventType) errs.eventType = "Please select an event type.";
    if (!form.packageChoice) errs.packageChoice = "Please select a package.";
    if (!form.eventDate) errs.eventDate = "Please choose an event date.";
    if (!form.venue.trim()) errs.venue = "Please enter the venue and postcode.";
    if (!form.guests.trim()) errs.guests = "Please enter the guest number.";
    else if (!/^\d+$/.test(form.guests.trim()) || Number(form.guests) < 1)
      errs.guests = "Please enter a valid guest number.";
    if (!form.christmasBooking) errs.christmasBooking = "Please select yes or no.";
    if (!form.brandPersonalisation) errs.brandPersonalisation = "Please select yes or no.";
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

    if (!contact.formConfigured) {
      setStatus("error");
      setErrorMessage(
        "Enquiries cannot be sent yet — a form delivery service has not been connected. Please share your preferred enquiry email or form endpoint so this can be completed.",
      );
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        eventType: form.eventType,
        packageChoice: form.packageChoice,
        eventDate: form.eventDate,
        venue: form.venue.trim(),
        guests: form.guests.trim(),
        christmasBooking: form.christmasBooking,
        brandPersonalisation: form.brandPersonalisation,
        additional: form.additional.trim(),
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
          <h2 className="section-title">Check your date</h2>
          <p className="section-lead">
            Tell us about your office event, Christmas celebration or brand activation and we will
            come back with availability and a tailored quote.
          </p>
          {!contact.formConfigured && (
            <p className="enquire__notice" role="status">
              Form delivery is not connected in this build yet. Submissions will show an error until
              a real form endpoint or enquiry email is provided.
            </p>
          )}
        </div>
        <div className="enquire__form">
          {status === "success" ? (
            <div className="form-success">
              <h3>Thank you</h3>
              <p>
                Your enquiry has been sent. We will reply with availability and next steps for your
                Bloom Market.
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
            <form onSubmit={submit} noValidate>
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
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                  />
                  {fieldErrors.name && (
                    <span className="field-error" id="name-error">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.email ? "has-error" : ""}`}>
                  <label htmlFor="email">Work email or email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                  />
                  {fieldErrors.email && (
                    <span className="field-error" id="email-error">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.phone ? "has-error" : ""}`}>
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                  />
                  {fieldErrors.phone && (
                    <span className="field-error" id="phone-error">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.company ? "has-error" : ""}`}>
                  <label htmlFor="company">Company or organisation</label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    value={form.company}
                    onChange={set("company")}
                    aria-invalid={Boolean(fieldErrors.company)}
                    aria-describedby={fieldErrors.company ? "company-error" : undefined}
                  />
                  {fieldErrors.company && (
                    <span className="field-error" id="company-error">
                      {fieldErrors.company}
                    </span>
                  )}
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
                    aria-describedby={fieldErrors.eventType ? "eventType-error" : undefined}
                  >
                    <option value="">Select…</option>
                    {eventTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                  {fieldErrors.eventType && (
                    <span className="field-error" id="eventType-error">
                      {fieldErrors.eventType}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.packageChoice ? "has-error" : ""}`}>
                  <label htmlFor="packageChoice">Styled or Branded Bloom Market</label>
                  <select
                    id="packageChoice"
                    name="packageChoice"
                    required
                    value={form.packageChoice}
                    onChange={set("packageChoice")}
                    aria-invalid={Boolean(fieldErrors.packageChoice)}
                    aria-describedby={fieldErrors.packageChoice ? "packageChoice-error" : undefined}
                  >
                    <option value="">Select…</option>
                    {packageChoices.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  {fieldErrors.packageChoice && (
                    <span className="field-error" id="packageChoice-error">
                      {fieldErrors.packageChoice}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.eventDate ? "has-error" : ""}`}>
                  <label htmlFor="eventDate">Event date</label>
                  <input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    required
                    value={form.eventDate}
                    onChange={set("eventDate")}
                    aria-invalid={Boolean(fieldErrors.eventDate)}
                    aria-describedby={fieldErrors.eventDate ? "eventDate-error" : undefined}
                  />
                  {fieldErrors.eventDate && (
                    <span className="field-error" id="eventDate-error">
                      {fieldErrors.eventDate}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.venue ? "has-error" : ""}`}>
                  <label htmlFor="venue">Venue and postcode</label>
                  <input
                    id="venue"
                    name="venue"
                    required
                    value={form.venue}
                    onChange={set("venue")}
                    aria-invalid={Boolean(fieldErrors.venue)}
                    aria-describedby={fieldErrors.venue ? "venue-error" : undefined}
                  />
                  {fieldErrors.venue && (
                    <span className="field-error" id="venue-error">
                      {fieldErrors.venue}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.guests ? "has-error" : ""}`}>
                  <label htmlFor="guests">Guest number</label>
                  <input
                    id="guests"
                    name="guests"
                    inputMode="numeric"
                    required
                    value={form.guests}
                    onChange={set("guests")}
                    aria-invalid={Boolean(fieldErrors.guests)}
                    aria-describedby={fieldErrors.guests ? "guests-error" : undefined}
                  />
                  {fieldErrors.guests && (
                    <span className="field-error" id="guests-error">
                      {fieldErrors.guests}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.christmasBooking ? "has-error" : ""}`}>
                  <label htmlFor="christmasBooking">Christmas booking</label>
                  <select
                    id="christmasBooking"
                    name="christmasBooking"
                    required
                    value={form.christmasBooking}
                    onChange={set("christmasBooking")}
                    aria-invalid={Boolean(fieldErrors.christmasBooking)}
                    aria-describedby={
                      fieldErrors.christmasBooking ? "christmasBooking-error" : undefined
                    }
                  >
                    <option value="">Select…</option>
                    {yesNoChoices.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {fieldErrors.christmasBooking && (
                    <span className="field-error" id="christmasBooking-error">
                      {fieldErrors.christmasBooking}
                    </span>
                  )}
                </div>
                <div className={`field ${fieldErrors.brandPersonalisation ? "has-error" : ""}`}>
                  <label htmlFor="brandPersonalisation">Brand personalisation required</label>
                  <select
                    id="brandPersonalisation"
                    name="brandPersonalisation"
                    required
                    value={form.brandPersonalisation}
                    onChange={set("brandPersonalisation")}
                    aria-invalid={Boolean(fieldErrors.brandPersonalisation)}
                    aria-describedby={
                      fieldErrors.brandPersonalisation ? "brandPersonalisation-error" : undefined
                    }
                  >
                    <option value="">Select…</option>
                    {yesNoChoices.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                  {fieldErrors.brandPersonalisation && (
                    <span className="field-error" id="brandPersonalisation-error">
                      {fieldErrors.brandPersonalisation}
                    </span>
                  )}
                </div>
                <div className="field full">
                  <label htmlFor="additional">Additional information</label>
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
                {status === "submitting" ? "Sending…" : "Submit enquiry"}
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
        <div className="faq__list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
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
          {contact.instagramUrl ? (
            <div>
              <div className="site-footer__label">Instagram</div>
              <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
                {contact.instagramHandle || "Instagram"}
              </a>
            </div>
          ) : (
            <div>
              <div className="site-footer__label">Instagram</div>
              <p>Details coming soon</p>
            </div>
          )}
          {contact.email ? (
            <div>
              <div className="site-footer__label">Email</div>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          ) : (
            <div>
              <div className="site-footer__label">Email</div>
              <p>Use the enquiry form above</p>
            </div>
          )}
        </div>
        <p className="site-footer__tagline">A little market. Made for your event.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div>
              <span className="hero__eyebrow">London Flower Bar Hire</span>
              <h1 id="hero-heading">The Little Bloom Market</h1>
              <p className="hero__copy">
                A self-serve flower market for London events, offices and brand activations. We
                deliver it beautifully styled and ready for your guests to choose their stems and
                leave with a bouquet.
              </p>
              <div className="hero__actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToId("enquire")}
                >
                  Check Your Date
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToId("packages")}
                >
                  View Packages
                </button>
              </div>
              <p className="hero__support">Delivered, styled and collected across London.</p>
            </div>
            <div className="hero__visual">
              <div className="hero__frame">
                <div className="scallop" aria-hidden="true" />
                <StallScene market="bloom" />
                <div className="hero__badge">Concept Preview — The Little Bloom Market</div>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <HowItWorks />
        <Packages />
        <Christmas />
        <Brands />
        <About />
        <Gallery />
        <Enquiry />
        <FAQ />
      </main>
      <Footer />
      <div className="sticky-cta">
        <button className="btn btn-accent" type="button" onClick={() => scrollToId("enquire")}>
          Check Your Date
        </button>
      </div>
    </>
  );
}
