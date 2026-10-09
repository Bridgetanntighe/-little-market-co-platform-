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
    let footerInView = false;

    const update = () => {
      const scrolled = window.scrollY > Math.min(280, window.innerHeight * 0.4);
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY;
      const nearFooter = footerInView || footerTop < window.innerHeight - 8;
      const next = scrolled && !nearFooter;
      setVisible(next);
      document.querySelector("main")?.classList.toggle("has-sticky-cta", next);
    };

    const observer =
      footer &&
      new IntersectionObserver(
        ([entry]) => {
          footerInView = entry.isIntersecting;
          update();
        },
        { root: null, threshold: 0, rootMargin: "0px 0px 48px 0px" },
      );
    if (footer && observer) observer.observe(footer);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
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
