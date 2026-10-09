import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { pageSeo } from "../data/pageSeo";
import {
  PARTNER_FORM_NAME,
  partnerBusinessTypes,
  submitPartnerEnquiry,
} from "../data/contact";
import { site } from "../data/site";
import { scrollToId, useReveal } from "../hooks/useReveal";

type FormState = "idle" | "submitting" | "success" | "error";

const partnerCards = [
  {
    title: "Venues",
    copy: "Offer couples and clients a flower experience that complements your space.",
  },
  {
    title: "Wedding and event planners",
    copy: "Bring a thoughtful activity and take-home gift into your clients’ celebrations.",
  },
  {
    title: "Event and creative agencies",
    copy: "Work with us on flower experiences for launches, brand activations and corporate events.",
  },
  {
    title: "Florists and complementary businesses",
    copy: "Explore joint events and packages with florists, caterers, photographers and other creative suppliers.",
  },
];

const waysTogether = [
  "Recommend our flower markets to your clients",
  "Include us in your venue or event packages",
  "Create a styled shoot or showcase together",
  "Collaborate on a bespoke event experience",
];

const empty = {
  name: "",
  businessName: "",
  email: "",
  website: "",
  businessType: "",
  partnershipIdea: "",
  "bot-field": "",
};

function PartnerForm() {
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
    if (!form.businessName.trim()) errs.businessName = "Please enter your business name.";
    if (!form.email.trim()) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = "Please enter a valid email address.";
    if (!form.businessType) errs.businessType = "Please select a business type.";
    if (!form.partnershipIdea.trim())
      errs.partnershipIdea = "Please tell us how you’d like to partner.";
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
      setErrorMessage("We could not send your partnership enquiry. Please try again shortly.");
      return;
    }

    setStatus("submitting");
    try {
      await submitPartnerEnquiry({
        name: form.name.trim(),
        businessName: form.businessName.trim(),
        email: form.email.trim(),
        website: form.website.trim(),
        businessType: form.businessType,
        partnershipIdea: form.partnershipIdea.trim(),
        "bot-field": form["bot-field"],
      });
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      // Keep entered details so the applicant can retry without retyping.
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <h3>Thank you</h3>
        <p>
          Thank you for getting in touch. We’ll review your ideas and be in touch to discuss how we
          could work together.
        </p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            setStatus("idle");
            setErrorMessage("");
          }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={PARTNER_FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value={PARTNER_FORM_NAME} />
      <p className="honeypot" aria-hidden="true">
        <label htmlFor="partner-bot-field">
          Do not fill this out
          <input
            id="partner-bot-field"
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
          <label htmlFor="partner-name">Name</label>
          <input
            id="partner-name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={set("name")}
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
        </div>
        <div className={`field ${fieldErrors.businessName ? "has-error" : ""}`}>
          <label htmlFor="partner-businessName">Business name</label>
          <input
            id="partner-businessName"
            name="businessName"
            autoComplete="organization"
            required
            value={form.businessName}
            onChange={set("businessName")}
            aria-invalid={Boolean(fieldErrors.businessName)}
          />
          {fieldErrors.businessName && (
            <span className="field-error">{fieldErrors.businessName}</span>
          )}
        </div>
        <div className={`field ${fieldErrors.email ? "has-error" : ""}`}>
          <label htmlFor="partner-email">Email</label>
          <input
            id="partner-email"
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
          <label htmlFor="partner-website">
            Website or Instagram <span className="optional">(optional)</span>
          </label>
          <input
            id="partner-website"
            name="website"
            type="text"
            inputMode="url"
            placeholder="Website or @instagram"
            value={form.website}
            onChange={set("website")}
          />
        </div>
        <div className={`field full ${fieldErrors.businessType ? "has-error" : ""}`}>
          <label htmlFor="partner-businessType">Business type</label>
          <select
            id="partner-businessType"
            name="businessType"
            required
            value={form.businessType}
            onChange={set("businessType")}
            aria-invalid={Boolean(fieldErrors.businessType)}
          >
            <option value="">Select…</option>
            {partnerBusinessTypes.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {fieldErrors.businessType && (
            <span className="field-error">{fieldErrors.businessType}</span>
          )}
        </div>
        <div className={`field full ${fieldErrors.partnershipIdea ? "has-error" : ""}`}>
          <label htmlFor="partner-partnershipIdea">How would you like to partner with us?</label>
          <textarea
            id="partner-partnershipIdea"
            name="partnershipIdea"
            required
            rows={5}
            value={form.partnershipIdea}
            onChange={set("partnershipIdea")}
            aria-invalid={Boolean(fieldErrors.partnershipIdea)}
          />
          {fieldErrors.partnershipIdea && (
            <span className="field-error">{fieldErrors.partnershipIdea}</span>
          )}
        </div>
      </div>
      <p className="partner-page__privacy">
        By sending this enquiry, you agree that we may use your details to assess the partnership
        idea and contact you about working together. See our{" "}
        <Link to="/privacy/">privacy policy</Link>.
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
        {status === "submitting" ? "Sending…" : "Send partnership enquiry"}
      </button>
    </form>
  );
}

export default function PartnerPage() {
  const { ref: cardsRef, visible: cardsVisible } = useReveal<HTMLElement>();
  const { ref: waysRef, visible: waysVisible } = useReveal<HTMLElement>();
  const { ref: formRef, visible: formVisible } = useReveal<HTMLElement>();

  const pageUrl = `${site.url}/partner-with-us/`;
  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${site.url}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Partner with us",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Partner With Us | The Little Market Co",
      description:
        "Explore partnerships with The Little Market Co for venues, wedding planners, event agencies and creative businesses across London.",
      isPartOf: { "@id": `${site.url}/#organization` },
      about: { "@id": `${site.url}/#business` },
    },
  ];

  return (
    <>
      <Seo
        title={pageSeo.partner.title}
        description={pageSeo.partner.description}
        path={pageSeo.partner.path}
        image={pageSeo.partner.ogImage}
        jsonLd={jsonLd}
      />
      <main className="partner-page">
        <header className="section partner-hero">
          <div className="container partner-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>Partner with us</span>
              </nav>
              <h1>Let’s create something beautiful together</h1>
              <p className="partner-hero__copy">
                We’d love to connect with venues, wedding planners, event agencies and creative
                businesses who see a little flower market fitting into their events.
              </p>
              <p className="partner-hero__copy">
                Whether you’re recommending us to a client or planning an experience together, we’d
                love to hear your ideas.
              </p>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => scrollToId("partnership-form")}
              >
                Start a conversation
              </button>
            </div>
          </div>
        </header>

        <section
          className={`section partner-cards reveal ${cardsVisible ? "is-visible" : ""}`}
          ref={cardsRef}
        >
          <div className="container">
            <span className="section-eyebrow">Community</span>
            <h2 className="section-title">Who we partner with</h2>
            <div className="partner-cards__grid">
              {partnerCards.map((card) => (
                <article className="partner-card" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section partner-ways reveal ${waysVisible ? "is-visible" : ""}`}
          ref={waysRef}
        >
          <div className="container narrow">
            <span className="section-eyebrow">Collaboration</span>
            <h2 className="section-title">Ways to work together</h2>
            <ul className="partner-ways__list">
              {waysTogether.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="partner-ways__note">
              Commercial details such as commissions, discounts, exclusivity or package terms are
              discussed individually — nothing here promises a fixed arrangement.
            </p>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => scrollToId("partnership-form")}
            >
              Start a conversation
            </button>
          </div>
        </section>

        <section
          className={`section partner-form-section reveal ${formVisible ? "is-visible" : ""}`}
          id="partnership-form"
          ref={formRef}
        >
          <div className="container partner-form-section__layout">
            <div>
              <span className="section-eyebrow">Partnerships</span>
              <h2 className="section-title">Tell us what you have in mind</h2>
              <p className="section-lead">
                Share a little about your business and how a Little Bloom Market might sit alongside
                your events across London.
              </p>
            </div>
            <div className="partner-form-section__panel">
              <PartnerForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
