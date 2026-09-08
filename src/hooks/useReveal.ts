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
  packageChoice?: string;
  christmasBooking?: string;
  brandPersonalisation?: string;
};

export function enquireWithOption(prefill: string | EnquiryPrefill) {
  const detail: EnquiryPrefill =
    typeof prefill === "string" ? { packageChoice: prefill } : prefill;
  sessionStorage.setItem(ENQUIRY_PREFILL_KEY, JSON.stringify(detail));
  window.dispatchEvent(new CustomEvent("tlmc-enquiry-prefill", { detail }));
  scrollToId("enquire");
}
