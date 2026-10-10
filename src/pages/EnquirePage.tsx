import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import {
  bouquetChoices,
  eventTypes,
  hireOptions,
  packageChoices,
} from "../data/content";
import { NETLIFY_FORM_NAME, submitEnquiry } from "../data/contact";
import { breadcrumbList, pageSeo } from "../data/pageSeo";
import {
  ENQUIRY_PREFILL_KEY,
  type EnquiryPrefill,
} from "../hooks/useReveal";

const seo = pageSeo.enquire;

type FormState = "idle" | "submitting" | "success" | "error";

const empty = {
  name: "",
  email: "",
  eventType: "",
  venue: "",
  bouquets: "",
  eventDate: "",
  dateUndecided: false,
  guests: "",
  packageChoice: "",
  colourIdeas: "",
  additional: "",
  "bot-field": "",
};

function bouquetsForPackage(packageChoice: string) {
  const pkg = hireOptions.find((p) => p.enquiryValue === packageChoice);
  if (!pkg) return undefined;
  if (pkg.bouquetCount === 20) return "Up to 20";
  if (pkg.bouquetCount === 30) return "Up to 30";
  if (pkg.bouquetCount === 40) return "Up to 40";
  return undefined;
}

export default function EnquirePage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});
  const [showExtras, setShowExtras] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const fromQuery: EnquiryPrefill = {
      eventType: searchParams.get("eventType") ?? undefined,
      packageChoice: searchParams.get("package") ?? undefined,
      colourIdeas: searchParams.get("colour") ?? undefined,
      bouquets: searchParams.get("bouquets") ?? undefined,
    };
    let stored: EnquiryPrefill = {};
    try {
      const raw = sessionStorage.getItem(ENQUIRY_PREFILL_KEY);
      if (raw) stored = JSON.parse(raw) as EnquiryPrefill;
    } catch {
      /* ignore */
    }
    const merged = { ...stored, ...fromQuery };
    const mappedBouquets =
      merged.bouquets ||
      (merged.packageChoice ? bouquetsForPackage(merged.packageChoice) : undefined);
    setForm((f) => ({
      ...f,
      ...(merged.eventType ? { eventType: merged.eventType } : {}),
      ...(merged.packageChoice ? { packageChoice: merged.packageChoice } : {}),
      ...(merged.colourIdeas ? { colourIdeas: merged.colourIdeas } : {}),
      ...(mappedBouquets ? { bouquets: mappedBouquets } : {}),
    }));
    if (merged.colourIdeas || merged.packageChoice) setShowExtras(true);
  }, [searchParams]);

  const set =
    (key: keyof typeof empty) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value =
        e.target instanceof HTMLInputElement && e.target.type === "checkbox"
          ? e.target.checked
          : e.target.value;
      setForm((f) => {
        const next = {
          ...f,
          [key]: value,
          ...(key === "dateUndecided" && value === true ? { eventDate: "" } : {}),
        };
        if (key === "packageChoice" && typeof value === "string") {
          const mapped = bouquetsForPackage(value);
          if (mapped && !f.bouquets) next.bouquets = mapped;
        }
        return next;
      });
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
    if (!form.eventType) errs.eventType = "Please select an event type.";
    if (!form.venue.trim()) errs.venue = "Please enter your venue or area.";
    if (!form.bouquets) errs.bouquets = "Please tell us how many bouquets you need.";
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
        eventType: form.eventType,
        venue: form.venue.trim(),
        bouquets: form.bouquets,
        eventDate: form.dateUndecided ? "" : form.eventDate,
        dateUndecided: form.dateUndecided ? "Yes" : "No",
        guests: form.guests.trim(),
        packageChoice: form.packageChoice,
        colourIdeas: form.colourIdeas.trim(),
        additional: form.additional.trim(),
        "bot-field": form["bot-field"],
      });
      sessionStorage.removeItem(ENQUIRY_PREFILL_KEY);
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  };

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
            { name: "Enquire", path: seo.path },
          ]),
        ]}
      />
      <main className="section enquire-page">
        <div className="container enquire__layout">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span aria-hidden="true"> / </span>
              <span>Enquire</span>
            </nav>
            <span className="section-eyebrow">Book</span>
            <h1 className="section-title">{seo.h1}</h1>
            <p className="section-lead">{seo.lead}</p>
            <ol className="enquire-steps" aria-label="How booking works">
              <li>
                <span className="enquire-steps__num">1</span>
                <span>Your day</span>
              </li>
              <li>
                <span className="enquire-steps__num">2</span>
                <span>Your details</span>
              </li>
              <li>
                <span className="enquire-steps__num">3</span>
                <span>We reply with a quote</span>
              </li>
            </ol>
          </div>
          <div className="enquire__form">
            {status === "success" ? (
              <div className="form-success" role="status">
                <h2>You’re on the list</h2>
                <p>
                  Thank you — we’ll check your date and send package options shortly. Exciting days
                  ahead.
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
                  <label htmlFor="enquiry-bot-field">
                    Do not fill this out
                    <input
                      id="enquiry-bot-field"
                      name="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form["bot-field"]}
                      onChange={set("bot-field")}
                    />
                  </label>
                </p>

                <p className="enquire-form__group-label">Your day</p>
                <div className="form-grid">
                  <div className={`field ${fieldErrors.eventType ? "has-error" : ""}`}>
                    <label htmlFor="enquiry-eventType">Event type</label>
                    <select
                      id="enquiry-eventType"
                      name="eventType"
                      required
                      value={form.eventType}
                      onChange={set("eventType")}
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
                  <div className={`field ${fieldErrors.venue ? "has-error" : ""}`}>
                    <label htmlFor="enquiry-venue">Venue or area</label>
                    <input
                      id="enquiry-venue"
                      name="venue"
                      required
                      value={form.venue}
                      onChange={set("venue")}
                    />
                    {fieldErrors.venue && <span className="field-error">{fieldErrors.venue}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="enquiry-eventDate">Date</label>
                    <input
                      id="enquiry-eventDate"
                      name="eventDate"
                      type="date"
                      disabled={form.dateUndecided}
                      value={form.eventDate}
                      onChange={set("eventDate")}
                    />
                    <label className="checkbox-field" htmlFor="enquiry-dateUndecided">
                      <input
                        id="enquiry-dateUndecided"
                        name="dateUndecided"
                        type="checkbox"
                        checked={form.dateUndecided}
                        onChange={set("dateUndecided")}
                      />
                      Not decided yet
                    </label>
                  </div>
                  <div className={`field ${fieldErrors.bouquets ? "has-error" : ""}`}>
                    <label htmlFor="enquiry-bouquets">Bouquets wanted</label>
                    <select
                      id="enquiry-bouquets"
                      name="bouquets"
                      required
                      value={form.bouquets}
                      onChange={set("bouquets")}
                    >
                      <option value="">Select…</option>
                      {bouquetChoices.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                    <span className="field-hint">
                      Not the same as guest count — a larger party can still choose fewer bouquets.
                    </span>
                    {fieldErrors.bouquets && (
                      <span className="field-error">{fieldErrors.bouquets}</span>
                    )}
                  </div>
                </div>

                <p className="enquire-form__group-label">Your details</p>
                <div className="form-grid">
                  <div className={`field ${fieldErrors.name ? "has-error" : ""}`}>
                    <label htmlFor="enquiry-name">Name</label>
                    <input
                      id="enquiry-name"
                      name="name"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={set("name")}
                    />
                    {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
                  </div>
                  <div className={`field ${fieldErrors.email ? "has-error" : ""}`}>
                    <label htmlFor="enquiry-email">Email</label>
                    <input
                      id="enquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={set("email")}
                    />
                    {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
                  </div>
                </div>

                <div className="enquire-extras">
                  <button
                    className="enquire-extras__toggle"
                    type="button"
                    aria-expanded={showExtras}
                    onClick={() => setShowExtras((v) => !v)}
                  >
                    {showExtras ? "Hide optional details" : "Add package or colour ideas (optional)"}
                  </button>
                  {showExtras ? (
                    <div className="form-grid enquire-extras__grid">
                      <div className="field">
                        <label htmlFor="enquiry-package">Package</label>
                        <select
                          id="enquiry-package"
                          name="packageChoice"
                          value={form.packageChoice}
                          onChange={set("packageChoice")}
                        >
                          <option value="">Select…</option>
                          {packageChoices.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <div className="field">
                        <label htmlFor="enquiry-guests">Guest count</label>
                        <input
                          id="enquiry-guests"
                          name="guests"
                          inputMode="numeric"
                          value={form.guests}
                          onChange={set("guests")}
                        />
                      </div>
                      <div className="field">
                        <label htmlFor="enquiry-colourIdeas">Colour ideas</label>
                        <input
                          id="enquiry-colourIdeas"
                          name="colourIdeas"
                          value={form.colourIdeas}
                          onChange={set("colourIdeas")}
                        />
                      </div>
                      <div className="field full">
                        <label htmlFor="enquiry-additional">Anything else</label>
                        <textarea
                          id="enquiry-additional"
                          name="additional"
                          rows={3}
                          value={form.additional}
                          onChange={set("additional")}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <input type="hidden" name="packageChoice" value={form.packageChoice} />
                      <input type="hidden" name="guests" value={form.guests} />
                      <input type="hidden" name="colourIdeas" value={form.colourIdeas} />
                      <input type="hidden" name="additional" value={form.additional} />
                    </>
                  )}
                </div>

                <p className="enquire-page__privacy">
                  We’ll reply with availability and a clear quote.{" "}
                  <Link to="/privacy/">Privacy</Link>
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
                  {status === "submitting" ? "Sending…" : "Check your date"}
                </button>
                <p className="enquire-page__help">
                  Prefer to browse first?{" "}
                  <Link to="/packages/">See packages</Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
