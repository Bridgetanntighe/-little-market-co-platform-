import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { contact } from "../data/contact";
import { goHomeSection, homeSectionHref } from "../hooks/useReveal";

const experienceLinks = [
  { to: "/flower-bar-hire-london/", label: "Flower bar hire" },
  { to: "/corporate-flower-bar-london/", label: "Corporate events" },
  { to: "/brand-activation-flower-bar/", label: "Brand activations" },
  { to: "/christmas-flower-bar-london/", label: "Christmas parties" },
  { to: "/flower-workshop-london/", label: "Workshops" },
];

function Announcement() {
  return (
    <div className="announcement">
      <div className="container">
        <a className="announcement__btn" href={homeSectionHref("enquire")}>
          Flower bar hire from £395 — tell us your date and guest numbers for a clear quote
        </a>
      </div>
    </div>
  );
}

function HeaderNav({
  menuId,
  onNavigate,
}: {
  menuId: string;
  onNavigate: () => void;
}) {
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const location = useLocation();
  const dropdownId = useId();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const go = (id: string) => {
    onNavigate();
    setExperiencesOpen(false);
    goHomeSection(id);
  };

  useEffect(() => {
    if (!experiencesOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setExperiencesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExperiencesOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [experiencesOpen]);

  const experiencesActive = experienceLinks.some((l) => {
    const bare = l.to.replace(/\/$/, "");
    return (
      location.pathname === l.to ||
      location.pathname === bare ||
      location.pathname.startsWith(`${bare}/`)
    );
  });

  const weddingsActive =
    location.pathname === "/wedding-flower-bar-hire-london/" ||
    location.pathname === "/wedding-flower-bar-hire-london";

  return (
    <nav id={menuId} className="nav" aria-label="Primary">
      <a
        href="/#packages"
        onClick={(e) => {
          e.preventDefault();
          go("packages");
        }}
      >
        Packages
      </a>

      <NavLink
        to="/wedding-flower-bar-hire-london/"
        className={weddingsActive ? "active" : undefined}
        onClick={onNavigate}
      >
        Weddings
      </NavLink>

      <div
        className={`nav-dropdown ${experiencesOpen ? "is-open" : ""} ${experiencesActive ? "is-active" : ""}`}
        ref={dropdownRef}
      >
        <button
          type="button"
          className="nav-dropdown__trigger"
          aria-expanded={experiencesOpen}
          aria-controls={dropdownId}
          onClick={() => setExperiencesOpen((v) => !v)}
        >
          Experiences
          <span className="nav-dropdown__chevron" aria-hidden="true" />
        </button>
        <div className="nav-dropdown__panel" id={dropdownId} role="region" aria-label="Experiences">
          {experienceLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => {
                setExperiencesOpen(false);
                onNavigate();
              }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>

      <a
        href="/#how-it-works"
        onClick={(e) => {
          e.preventDefault();
          go("how-it-works");
        }}
      >
        How it works
      </a>
      <a
        href="/#faq"
        onClick={(e) => {
          e.preventDefault();
          go("faq");
        }}
      >
        FAQs
      </a>

      <a
        className="nav-cta"
        href={homeSectionHref("enquire")}
        onClick={onNavigate}
      >
        Check availability
      </a>
    </nav>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__name">The Little Market Co.</span>
          <span className="brand__tag">Flower Bar Hire · London</span>
        </Link>

        <div className={open ? "nav-shell is-open" : "nav-shell"}>
          <HeaderNav
            key={location.pathname}
            menuId={menuId}
            onNavigate={() => setOpen(false)}
          />
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
            <p>Flower bar hire, corporate flower experiences and branded floral activations</p>
          </div>
          <div>
            <div className="site-footer__label">Explore</div>
            <ul className="footer-links">
              <li>
                <Link to="/wedding-flower-bar-hire-london/">Weddings</Link>
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
                <a
                  href="/#enquire"
                  onClick={(e) => {
                    e.preventDefault();
                    goHomeSection("enquire");
                  }}
                >
                  Contact
                </a>
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
            <a
              className="btn btn-accent"
              style={{ marginTop: "1rem" }}
              href={homeSectionHref("enquire")}
            >
              Check availability
            </a>
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
        <a className="btn btn-accent" href={homeSectionHref("enquire")}>
          Check availability
        </a>
      </div>
    </>
  );
}
