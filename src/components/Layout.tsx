import { useEffect, useId, useState, type MouseEvent, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { goHomeSection } from "../hooks/useReveal";
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
  { to: "/enquire/", label: "Enquire" },
] as const;

type FooterSecondaryItem =
  | { to: string; label: string }
  | {
      href: string;
      label: string;
      onClick: (e: MouseEvent<HTMLAnchorElement>) => void;
    };

const footerSecondary: FooterSecondaryItem[] = [
  {
    href: "/#work-with-us",
    label: "Work with us",
    onClick: (e) => {
      e.preventDefault();
      goHomeSection("work-with-us");
    },
  },
  { to: "/partner-with-us/", label: "Partner with us" },
  { to: "/privacy/", label: "Privacy" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <p className="announcement__text">
          Flower bar hire for weddings & celebrations across London
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
              Check availability
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
              Flower bar hire · {contact.serviceArea}
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
                {"to" in item ? (
                  <Link to={item.to}>{item.label}</Link>
                ) : (
                  <a href={item.href} onClick={item.onClick}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__tagline">A little flower market for your celebration.</p>
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
