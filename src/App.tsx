import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
} from "react";
import {
  customerTypes,
  enquiryMarkets,
  enquiryOptions,
  faqs,
  galleryItems,
  hireOptions,
  howItWorks,
  markets,
  personalisationChoices,
  supplyingOwnChoices,
  type MarketId,
} from "./data/content";
import {
  enquireWithOption,
  ENQUIRY_PREFILL_KEY,
  scrollToId,
  useReveal,
} from "./hooks/useReveal";
import { StallScene } from "./components/StallScene";
import "./styles/global.css";
import "./styles/sections.css";

const nav = [
  { id: "markets", label: "Our Markets" },
  { id: "packages", label: "Ways to Book" },
  { id: "brands", label: "For Brands" },
  { id: "about", label: "About" },
  { id: "enquire", label: "Enquire" },
];

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
          <span className="brand__tag">Curated Event Hire &amp; Styling</span>
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
          <button className="btn btn-accent" type="button" onClick={() => go("enquire")}>
            Request a Quote
          </button>
        </nav>
        <button className="btn btn-accent header-cta" type="button" onClick={() => go("enquire")}>
          Request a Quote
        </button>
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

function Markets() {
  const [active, setActive] = useState<MarketId>("bloom");
  const market = markets.find((m) => m.id === active)!;
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      className={`section markets reveal ${visible ? "is-visible" : ""}`}
      id="markets"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Signature installations</span>
        <h2 className="section-title">Choose Your Market</h2>
        <p className="section-lead">
          The Little Market Co. creates beautifully designed pop-up markets for events, celebrations
          and brands. One signature structure, three curated experiences.
        </p>
        <p className="markets__note">
          Hire the equipment alone, or have your market personalised, filled and styled. Every
          installation is delivered, assembled and later collected.
        </p>
        <div className="markets__tabs" role="tablist" aria-label="Market concepts">
          {markets.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={active === m.id}
              className={`markets__tab ${active === m.id ? "is-active" : ""}`}
              onClick={() => setActive(m.id)}
            >
              {m.shortName}
            </button>
          ))}
        </div>
        <div
          className="markets__panel"
          role="tabpanel"
          style={{ "--panel-soft": market.accentSoft } as CSSProperties}
        >
          <div className="markets__art">
            <StallScene market={market.id} />
            <span className="preview-label">Concept Preview</span>
          </div>
          <div className="markets__content">
            <h3>{market.name}</h3>
            <p>{market.description}</p>
            <div className="block-title">Well suited to</div>
            <div className="chip-row">
              {market.occasions.map((o) => (
                <span className="chip" key={o}>
                  {o}
                </span>
              ))}
            </div>
          </div>
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
          From first enquiry to collection day, every installation is curated with clarity and care.
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
        <span className="section-eyebrow">How to book</span>
        <h2 className="section-title">Two Ways to Book</h2>
        <p className="section-lead">
          Clients can hire the equipment alone or have their market personalised, filled and styled.
          Choose the level of curation that suits your occasion.
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
                onClick={() => enquireWithOption(pkg.enquiryValue)}
              >
                {pkg.cta}
              </button>
            </article>
          ))}
        </div>
        <p className="packages__note">
          Final pricing depends on guest numbers, quantities, contents, location and personalisation.
        </p>
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
          <h2 className="section-title">Made for Brands</h2>
          <p className="section-lead">
            From launches and press days to team events and customer gifting, our markets can be
            transformed into a branded guest experience with removable panels, campaign colours,
            custom packaging and personalised take-home details.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => enquireWithOption("Brand activation")}
          >
            Plan a Brand Activation
          </button>
        </div>
        <aside className="brands__aside" aria-hidden="true">
          <span>Curated</span>
          <span>Personalised</span>
          <span>Unattended</span>
          <span>Collected</span>
        </aside>
      </div>
    </section>
  );
}

function Unattended() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      className={`section unattended reveal ${visible ? "is-visible" : ""}`}
      id="unattended"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Unattended by design</span>
        <h2 className="section-title">Set Up Beautifully. Left Ready to Enjoy.</h2>
        <p className="section-lead">
          Our standard service does not require a member of our team to remain at your event. We
          deliver, assemble and prepare your market, provide clear guest instructions and return at
          the agreed time for collection. Optional attendants may be quoted separately where
          required.
        </p>
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
          <h2 className="section-title">Design-led installations. Family-run care.</h2>
          <p>
            The Little Market Co. is an independent mother-and-daughter event installation and hire
            studio based in London.
          </p>
          <p>
            We create beautifully designed pop-up markets for events, celebrations and brands —
            premium, curated experiences that feel editorial and considered, never generic.
          </p>
          <p>
            Clients hire the equipment alone or have their market personalised, filled and styled.
            Every installation is delivered, assembled and later collected, with no staffing
            required as standard.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [filter, setFilter] = useState<"all" | MarketId>("all");
  const { ref, visible } = useReveal<HTMLElement>();
  const items = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((g) => g.market === filter)),
    [filter],
  );

  return (
    <section
      className={`section gallery reveal ${visible ? "is-visible" : ""}`}
      id="gallery"
      ref={ref}
    >
      <div className="container">
        <span className="section-eyebrow">Concept Preview</span>
        <h2 className="section-title">Atmosphere Studies</h2>
        <p className="section-lead">
          These visuals are concept previews showing intended atmosphere only. They are not previous
          client bookings. Original event photography will replace them in time.
        </p>
        <div className="gallery__filters">
          {(
            [
              ["all", "All"],
              ["bloom", "Bloom"],
              ["harvest", "Harvest"],
              ["celebration", "Celebration"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`gallery__filter ${filter === id ? "is-active" : ""}`}
              onClick={() => setFilter(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="gallery__grid">
          {items.map((item) => (
            <article className={`gallery-card gallery-card--${item.market}`} key={item.id}>
              <div className="gallery-card__visual">
                <span className="preview-label">Concept Preview</span>
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

function Enquiry() {
  const empty = {
    name: "",
    email: "",
    phone: "",
    customerType: "",
    interest: "",
    preferredMarket: "",
    personalisation: "",
    eventDate: "",
    venue: "",
    guests: "",
    palette: "",
    displayItems: "",
    supplyingOwn: "",
    additional: "",
  };
  const [form, setForm] = useState(empty);
  const [done, setDone] = useState(false);
  const { ref, visible } = useReveal<HTMLElement>();

  useEffect(() => {
    const apply = (value: string) => {
      if (!value) return;
      setDone(false);
      setForm((f) => ({ ...f, interest: value }));
    };
    const stored = sessionStorage.getItem(ENQUIRY_PREFILL_KEY);
    if (stored) apply(stored);
    const onPrefill = (e: Event) => apply((e as CustomEvent<string>).detail);
    window.addEventListener("tlmc-enquiry-prefill", onPrefill);
    return () => window.removeEventListener("tlmc-enquiry-prefill", onPrefill);
  }, []);

  const set =
    (key: keyof typeof empty) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("tlmc-enquiries") || "[]") as unknown[];
    localStorage.setItem(
      "tlmc-enquiries",
      JSON.stringify([...existing, { ...form, savedAt: new Date().toISOString() }]),
    );
    sessionStorage.removeItem(ENQUIRY_PREFILL_KEY);
    setDone(true);
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
          <h2 className="section-title">Request a Quote</h2>
          <p className="section-lead">
            Tell us about your event or brand activation. This prototype stores your enquiry locally
            — no information is sent yet.
          </p>
        </div>
        <div className="enquire__form">
          {done ? (
            <div className="form-success">
              <h3>Thank you</h3>
              <p>
                Your enquiry has been saved on this device for the prototype. When bookings open,
                you’ll hear from us with availability and a tailored quote.
              </p>
              <button className="btn btn-primary" type="button" onClick={() => setDone(false)}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" required value={form.name} onChange={set("name")} />
                </div>
                <div className="field">
                  <label htmlFor="email">Email address</label>
                  <input id="email" type="email" required value={form.email} onChange={set("email")} />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" type="tel" value={form.phone} onChange={set("phone")} />
                </div>
                <div className="field">
                  <label htmlFor="customerType">I am enquiring as</label>
                  <select
                    id="customerType"
                    required
                    value={form.customerType}
                    onChange={set("customerType")}
                  >
                    <option value="">Select…</option>
                    {customerTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="interest">Which option are you interested in?</label>
                  <select id="interest" required value={form.interest} onChange={set("interest")}>
                    <option value="">Select…</option>
                    {enquiryOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="preferredMarket">Which market would you like?</label>
                  <select
                    id="preferredMarket"
                    required
                    value={form.preferredMarket}
                    onChange={set("preferredMarket")}
                  >
                    <option value="">Select…</option>
                    {enquiryMarkets.map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="personalisation">Would you like personalisation?</label>
                  <select
                    id="personalisation"
                    required
                    value={form.personalisation}
                    onChange={set("personalisation")}
                  >
                    <option value="">Select…</option>
                    {personalisationChoices.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="eventDate">Event date</label>
                  <input
                    id="eventDate"
                    type="date"
                    required
                    value={form.eventDate}
                    onChange={set("eventDate")}
                  />
                </div>
                <div className="field">
                  <label htmlFor="venue">Venue and postcode</label>
                  <input id="venue" required value={form.venue} onChange={set("venue")} />
                </div>
                <div className="field">
                  <label htmlFor="guests">Guest number</label>
                  <input id="guests" required value={form.guests} onChange={set("guests")} />
                </div>
                <div className="field">
                  <label htmlFor="supplyingOwn">Are you supplying your own contents?</label>
                  <select
                    id="supplyingOwn"
                    required
                    value={form.supplyingOwn}
                    onChange={set("supplyingOwn")}
                  >
                    <option value="">Select…</option>
                    {supplyingOwnChoices.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="palette">Theme or colour palette</label>
                  <input id="palette" value={form.palette} onChange={set("palette")} />
                </div>
                <div className="field full">
                  <label htmlFor="displayItems">What would you like displayed?</label>
                  <textarea
                    id="displayItems"
                    required
                    placeholder="Flowers, produce, favours, products, gifts…"
                    value={form.displayItems}
                    onChange={set("displayItems")}
                  />
                </div>
                <div className="field full">
                  <label htmlFor="additional">Additional information</label>
                  <textarea id="additional" value={form.additional} onChange={set("additional")} />
                </div>
              </div>
              <button className="btn btn-accent" type="submit">
                Submit enquiry
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
            <p>London and surrounding areas</p>
            <p>Curated Event Hire &amp; Styling</p>
          </div>
          <div>
            <div className="site-footer__label">Instagram</div>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              @thelittlemarketco
            </a>
          </div>
          <div>
            <div className="site-footer__label">Email</div>
            <a href="mailto:hello@thelittlemarketco.example">hello@thelittlemarketco.example</a>
          </div>
        </div>
        <p className="site-footer__tagline">A little market. Made for your event.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="container hero__grid">
            <div>
              <span className="hero__eyebrow">Curated Event Hire &amp; Styling</span>
              <h1 id="hero-heading">A Little Market, Made for Your Event</h1>
              <p className="hero__copy">
                Our signature pop-up markets transform into flower bars, produce displays, favour
                stations and branded experiences. Hire yours beautifully prepared for you to fill,
                or let us personalise and style every detail.
              </p>
              <div className="hero__actions">
                <button className="btn btn-primary" type="button" onClick={() => scrollToId("markets")}>
                  Explore the Markets
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToId("enquire")}
                >
                  Request a Quote
                </button>
              </div>
              <p className="hero__support">Delivered, set up and collected across London.</p>
            </div>
            <div className="hero__visual">
              <div className="hero__frame">
                <div className="scallop" aria-hidden="true" />
                <StallScene market="bloom" />
                <div className="hero__badge">Concept Preview — curated pop-up market installation</div>
              </div>
            </div>
          </div>
        </section>
        <Markets />
        <HowItWorks />
        <Packages />
        <Brands />
        <Unattended />
        <About />
        <Gallery />
        <Enquiry />
        <FAQ />
      </main>
      <Footer />
      <div className="sticky-cta">
        <button className="btn btn-accent" type="button" onClick={() => scrollToId("enquire")}>
          Request a Quote
        </button>
      </div>
    </>
  );
}
