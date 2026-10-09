import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { contact } from "../data/contact";
import { goHomeSection } from "../hooks/useReveal";

const homeNav = [
  { id: "packages", label: "Packages" },
  { id: "colour-stories", label: "Colour stories" },
  { id: "occasions", label: "Occasions" },
  { id: "how-it-works", label: "How it works" },
  { id: "faq", label: "FAQs" },
  { id: "enquire", label: "Check availability" },
];

const pageNav = [
  { to: "/flower-bar-hire-london/", label: "Flower bar hire" },
  { to: "/corporate-flower-bar-london/", label: "Corporate" },
  { to: "/brand-activation-flower-bar/", label: "Brand activations" },
  { to: "/christmas-flower-bar-london/", label: "Christmas" },
  { to: "/flower-workshop-london/", label: "Workshops" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <button type="button" className="announcement__btn" onClick={() => goHomeSection("enquire")}>
          Flower bar hire from £395 — tell us your date and guest numbers for a clear quote
        </button>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    setOpen(false);
    goHomeSection(id);
  };

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">The Little Market Co.</span>
          <span className="brand__tag">Flower Bar Hire · London</span>
        </Link>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Primary">
          {homeNav.map((l) => (
            <a
              key={l.id}
              href={`/#${l.id}`}
              onClick={(e) => {
                e.preventDefault();
                go(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          {pageNav.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">The Little Market Co.</div>
            <p>{contact.serviceArea}</p>
            <p>Flower bar hire, corporate flower experiences and branded floral activations</p>
          </div>
          <div>
            <div className="site-footer__label">Explore</div>
            <ul className="footer-links">
              <li>
                <Link to="/flower-bar-hire-london/">Flower bar hire in London</Link>
              </li>
              <li>
                <Link to="/corporate-flower-bar-london/">Corporate flower experiences</Link>
              </li>
              <li>
                <Link to="/brand-activation-flower-bar/">Branded flower bar hire</Link>
              </li>
              <li>
                <Link to="/christmas-flower-bar-london/">Christmas flower bar</Link>
              </li>
              <li>
                <Link to="/flower-workshop-london/">Bouquet-making workshops</Link>
              </li>
              <li>
                <a
                  href="/#packages"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("packages");
                  }}
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="/#enquire"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("enquire");
                  }}
                >
                  Contact / enquiry
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="site-footer__label">Email</div>
            {contact.email ? (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ) : (
              <p>Use the enquiry form</p>
            )}
            <button
              className="btn btn-accent"
              type="button"
              style={{ marginTop: "1rem" }}
              onClick={() => goHomeSection("enquire")}
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

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="site-top">
        <Announcement />
        <Header />
      </div>
      {children}
      <Footer />
      <div className="sticky-cta">
        <button className="btn btn-accent" type="button" onClick={() => goHomeSection("enquire")}>
          Check availability
        </button>
      </div>
    </>
  );
}
