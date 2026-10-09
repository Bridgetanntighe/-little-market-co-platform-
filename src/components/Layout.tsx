import { useEffect, useId, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { enquireHref, goHomeSection } from "../hooks/useReveal";

const mainNav = [
  { to: "/wedding-flower-bar-hire-london/", label: "Weddings" },
  { to: "/celebrations/", label: "Celebrations" },
  { to: "/corporate-flower-bar-london/", label: "Corporate & Brands" },
  { to: "/packages/", label: "Packages" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <Link className="announcement__btn" to="/enquire/">
          Flower bar hire for weddings & celebrations — tell us your date for a clear quote
        </Link>
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
            <Link className="nav-cta" to={enquireHref()} onClick={() => setOpen(false)}>
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
        <div className="site-footer__grid">
          <div>
            <div className="site-footer__brand">The Little Market Co.</div>
            <p>{contact.serviceArea}</p>
            <p>The Little Bloom Market — flower bar hire for weddings and celebrations</p>
          </div>
          <div>
            <div className="site-footer__label">Explore</div>
            <ul className="footer-links">
              <li>
                <Link to="/wedding-flower-bar-hire-london/">Weddings</Link>
              </li>
              <li>
                <Link to="/celebrations/">Celebrations</Link>
              </li>
              <li>
                <Link to="/corporate-flower-bar-london/">Corporate & Brands</Link>
              </li>
              <li>
                <Link to="/packages/">Packages</Link>
              </li>
              <li>
                <Link to="/enquire/">Enquire</Link>
              </li>
              <li>
                <a
                  href="/#work-with-us"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("work-with-us");
                  }}
                >
                  Work with us
                </a>
              </li>
              <li>
                <Link to="/partner-with-us/">Partner with us</Link>
              </li>
              <li>
                <Link to="/privacy/">Privacy policy</Link>
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
            <Link className="btn btn-accent" style={{ marginTop: "1rem" }} to="/enquire/">
              Check availability
            </Link>
          </div>
        </div>
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
      <div className="sticky-cta">
        <Link className="btn btn-accent" to="/enquire/">
          Check availability
        </Link>
      </div>
    </>
  );
}
