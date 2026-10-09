import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Mobile-only booking bar. Shown after a short scroll, hidden near the footer
 * and on the enquire page so it does not cover links or repeat the CTA constantly.
 */
export function StickyCta() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const onEnquire = location.pathname.replace(/\/$/, "") === "/enquire";

  useEffect(() => {
    if (onEnquire) {
      setVisible(false);
      document.querySelector("main")?.classList.remove("has-sticky-cta");
      return;
    }

    const footer = document.querySelector(".site-footer");

    const update = () => {
      const scrolled = window.scrollY > Math.min(320, window.innerHeight * 0.45);
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const nearFooter = footerTop < window.innerHeight - 24;
      const next = scrolled && !nearFooter;
      setVisible(next);
      document.querySelector("main")?.classList.toggle("has-sticky-cta", next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      document.querySelector("main")?.classList.remove("has-sticky-cta");
    };
  }, [onEnquire, location.pathname]);

  if (onEnquire) return null;

  return (
    <div className={visible ? "sticky-cta is-visible" : "sticky-cta"} aria-hidden={!visible}>
      {visible ? (
        <Link className="btn btn-accent" to="/enquire/">
          Check availability
        </Link>
      ) : null}
    </div>
  );
}
