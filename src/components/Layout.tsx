import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { StickyCta } from "./StickyCta";

const mainNav = [
  { to: "/wedding-flower-bar-hire-london/", label: "Weddings" },
  { to: "/celebrations/", label: "Celebrations" },
  { to: "/corporate-flower-bar-london/", label: "Corporate & Brands" },
  { to: "/packages/", label: "Packages" },
];

const footerPrimary = [
  { to: "/wedding-flower-bar-hire-london/", label: "Weddings" },
  { to: "/celebrations/", label: "Celebrations" },
  { to: "/corporate-flower-bar-london/", label: "Corporate" },
  { to: "/packages/", label: "Packages" },
  { to: "/enquire/", label: "Check your date" },
] as const;

const footerSecondary = [
  { to: "/partner-with-us/", label: "Partner with us" },
  { to: "/privacy/", label: "Privacy" },
] as const;

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <p className="announcement__text">
          Mobile flower market hire · London venues
        </p>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">The Little Market Co.</span>
          <span className="brand__tag">The Little Bloom Market · London</span>
        </Link>

        <div className={open ? "nav-shell is-open" : "nav-shell"}>
          <nav id={menuId} className="nav" aria-label="Primary">
            {mainNav.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link className="nav-cta" to="/enquire/" onClick={() => setOpen(false)}>
              Check your date
            </Link>
          </nav>
        </div>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={menuId}
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
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <div className="site-footer__brand">The Little Market Co.</div>
            <p className="site-footer__summary">
              Mobile flower market hire · {contact.serviceArea}
            </p>
            {contact.email ? (
              <a className="site-footer__email" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            ) : null}
          </div>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul className="footer-links footer-links--primary">
            {footerPrimary.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="footer-links footer-links--secondary">
            {footerSecondary.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__tagline">We bring the flower market to your venue.</p>
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
      <StickyCta />
    </>
  );
}
