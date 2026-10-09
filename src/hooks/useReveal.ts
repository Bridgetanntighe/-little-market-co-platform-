import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const ENQUIRY_PREFILL_KEY = "tlmc-enquiry-prefill";

export type EnquiryPrefill = {
  eventType?: string;
  packageChoice?: string;
  colourIdeas?: string;
  bouquets?: string;
};

export function enquireHref(prefill?: EnquiryPrefill) {
  if (!prefill) return "/enquire/";
  const params = new URLSearchParams();
  if (prefill.eventType) params.set("eventType", prefill.eventType);
  if (prefill.packageChoice) params.set("package", prefill.packageChoice);
  if (prefill.colourIdeas) params.set("colour", prefill.colourIdeas);
  if (prefill.bouquets) params.set("bouquets", prefill.bouquets);
  const qs = params.toString();
  return qs ? `/enquire/?${qs}` : "/enquire/";
}

export function enquireWithOption(prefill: string | EnquiryPrefill = {}) {
  const detail: EnquiryPrefill =
    typeof prefill === "string" ? { packageChoice: prefill } : prefill;
  sessionStorage.setItem(ENQUIRY_PREFILL_KEY, JSON.stringify(detail));
  window.location.assign(enquireHref(detail));
}

/** Legacy homepage anchors → dedicated pages. */
export function homeSectionHref(sectionId: string) {
  if (sectionId === "packages") return "/packages/";
  if (sectionId === "enquire") return "/enquire/";
  if (sectionId === "work-with-us") return "/#work-with-us";
  return `/#${sectionId}`;
}

export function goHomeSection(sectionId: string) {
  if (sectionId === "packages") {
    window.location.assign("/packages/");
    return;
  }
  if (sectionId === "enquire") {
    window.location.assign("/enquire/");
    return;
  }
  if (window.location.pathname !== "/") {
    window.location.assign(homeSectionHref(sectionId));
    return;
  }
  scrollToId(sectionId);
}
