import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import {
  WORK_WITH_US_FORM_NAME,
  submitWorkWithUs,
  workInterestOptions,
} from "../data/contact";
import { scrollToId, useReveal } from "../hooks/useReveal";

type FormState = "idle" | "submitting" | "success" | "error";

const empty = {
  name: "",
  email: "",
  travelAreas: "",
  interest: "",
  experience: "",
  portfolio: "",
  availability: "",
  "bot-field": "",
};

export function WorkWithUs() {
  const { ref, visible } = useReveal<HTMLElement>();
  const formRef = useRef<HTMLDivElement | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof typeof empty, string>>>({});

  useEffect(() => {
    const syncHash = () => {
      if (
        window.location.hash === "#work-with-us" ||
        window.location.hash === "#work-with-us-form"
      ) {
        setFormOpen(true);
      }
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const openForm = () => {
    setFormOpen(true);
    setStatus((s) => (s === "success" ? "idle" : s));
    requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

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
    if (!form.travelAreas.trim())
      errs.travelAreas = "Please tell us where you are based and can travel to.";
    if (!form.interest) errs.interest = "Please select an area of interest.";
    if (!form.experience.trim())
      errs.experience = "Please tell us a little about your experience.";
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
      setErrorMessage("We could not send your application. Please try again shortly.");
      return;
    }

    setStatus("submitting");
    try {
      await submitWorkWithUs({
        name: form.name.trim(),
        email: form.email.trim(),
        travelAreas: form.travelAreas.trim(),
        interest: form.interest,
        experience: form.experience.trim(),
        portfolio: form.portfolio.trim(),
        availability: form.availability.trim(),
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

  return (
    <section
      className={`section work-with-us reveal ${visible ? "is-visible" : ""}`}
      id="work-with-us"
      ref={ref}
    >
      <div className="container work-with-us__layout">
        <div>
          <span className="section-eyebrow">Collaborate</span>
          <h2 className="section-title">Help us bring the market to life</h2>
          <p className="section-lead">
            We’d love to hear from freelance florists, flower enthusiasts and event assistants
            across London who enjoy creating beautiful experiences.
          </p>
          <p className="work-with-us__copy">
            From preparing flowers and styling our markets to helping guests and setting up events,
            tell us what you do and how you’d like to get involved.
          </p>
          <p className="work-with-us__support">
            Register your interest for occasional freelance opportunities as our bookings grow.
          </p>
          {!formOpen && (
            <button className="btn btn-primary" type="button" onClick={openForm}>
              Work with us
            </button>
          )}
        </div>

        <div className="work-with-us__panel" ref={formRef} id="work-with-us-form">
          {formOpen || status === "success" ? (
            status === "success" ? (
              <div className="form-success" role="status">
                <h3>Thank you</h3>
                <p>
                  Thank you for getting in touch. We’ll review your details and contact you if a
                  suitable opportunity comes up.
                </p>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFormOpen(true);
                    setErrorMessage("");
                  }}
                >
                  Register another interest
                </button>
              </div>
            ) : (
              <form
                name={WORK_WITH_US_FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={submit}
                noValidate
              >
                <input type="hidden" name="form-name" value={WORK_WITH_US_FORM_NAME} />
                <p className="honeypot" aria-hidden="true">
                  <label htmlFor="wwu-bot-field">
                    Do not fill this out
                    <input
                      id="wwu-bot-field"
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
                    <label htmlFor="wwu-name">Name</label>
                    <input
                      id="wwu-name"
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
                    <label htmlFor="wwu-email">Email</label>
                    <input
                      id="wwu-email"
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
                  <div className={`field full ${fieldErrors.travelAreas ? "has-error" : ""}`}>
                    <label htmlFor="wwu-travelAreas">Based in / areas you can travel to</label>
                    <input
                      id="wwu-travelAreas"
                      name="travelAreas"
                      required
                      value={form.travelAreas}
                      onChange={set("travelAreas")}
                      aria-invalid={Boolean(fieldErrors.travelAreas)}
                    />
                    {fieldErrors.travelAreas && (
                      <span className="field-error">{fieldErrors.travelAreas}</span>
                    )}
                  </div>
                  <div className={`field full ${fieldErrors.interest ? "has-error" : ""}`}>
                    <label htmlFor="wwu-interest">Interested in</label>
                    <select
                      id="wwu-interest"
                      name="interest"
                      required
                      value={form.interest}
                      onChange={set("interest")}
                      aria-invalid={Boolean(fieldErrors.interest)}
                    >
                      <option value="">Select…</option>
                      {workInterestOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                    {fieldErrors.interest && (
                      <span className="field-error">{fieldErrors.interest}</span>
                    )}
                  </div>
                  <div className={`field full ${fieldErrors.experience ? "has-error" : ""}`}>
                    <label htmlFor="wwu-experience">Tell us about your experience</label>
                    <textarea
                      id="wwu-experience"
                      name="experience"
                      required
                      rows={4}
                      value={form.experience}
                      onChange={set("experience")}
                      aria-invalid={Boolean(fieldErrors.experience)}
                    />
                    {fieldErrors.experience && (
                      <span className="field-error">{fieldErrors.experience}</span>
                    )}
                  </div>
                  <div className="field full">
                    <label htmlFor="wwu-portfolio">
                      Instagram, portfolio or LinkedIn link{" "}
                      <span className="optional">(optional)</span>
                    </label>
                    <input
                      id="wwu-portfolio"
                      name="portfolio"
                      type="text"
                      inputMode="url"
                      placeholder="Instagram, website or LinkedIn"
                      value={form.portfolio}
                      onChange={set("portfolio")}
                    />
                  </div>
                  <div className="field full">
                    <label htmlFor="wwu-availability">
                      Typical availability <span className="optional">(optional)</span>
                    </label>
                    <input
                      id="wwu-availability"
                      name="availability"
                      value={form.availability}
                      onChange={set("availability")}
                    />
                  </div>
                </div>
                <p className="work-with-us__privacy">
                  By registering, you agree that we may use your details to assess suitability and
                  contact you about occasional freelance opportunities. See our{" "}
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
                  {status === "submitting" ? "Sending…" : "Register your interest"}
                </button>
                <button
                  className="btn btn-secondary work-with-us__close"
                  type="button"
                  onClick={() => {
                    setFormOpen(false);
                    scrollToId("work-with-us");
                  }}
                >
                  Close form
                </button>
              </form>
            )
          ) : null}
        </div>
      </div>
    </section>
  );
}
