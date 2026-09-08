/**
 * Public contact details and enquiry delivery.
 *
 * Leave fields empty until real values are confirmed.
 * Do not use .example emails or generic Instagram URLs.
 *
 * Form delivery (static GitHub Pages):
 * Set VITE_FORM_ENDPOINT to a form service URL that accepts JSON POSTs
 * (e.g. Formspree `https://formspree.io/f/xxxxx` or Web3Forms).
 * Optionally set VITE_FORM_ACCESS_KEY for services that require a key in the body.
 */

const endpoint = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() ?? "";
const accessKey = (import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined)?.trim() ?? "";

export const contact = {
  /** Real enquiry email — omit from UI until provided */
  email: "",
  /** Full Instagram profile URL — omit from UI until provided */
  instagramUrl: "",
  /** Display handle only, e.g. @thelittlemarketco */
  instagramHandle: "",
  /** Service area shown in footer / schema */
  serviceArea: "London and surrounding areas",
  formEndpoint: endpoint,
  formAccessKey: accessKey,
  formConfigured: Boolean(endpoint),
};

export type EnquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  eventType: string;
  packageChoice: string;
  eventDate: string;
  venue: string;
  guests: string;
  christmasBooking: string;
  brandPersonalisation: string;
  additional: string;
};

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  if (!contact.formEndpoint) {
    throw new Error(
      "Enquiry form is not connected yet. Please provide a form endpoint or enquiry email so submissions can be delivered.",
    );
  }

  const body: Record<string, string> = {
    ...payload,
    _subject: `Bloom Market enquiry — ${payload.name}`,
  };

  if (contact.formAccessKey) {
    body.access_key = contact.formAccessKey;
  }

  const res = await fetch(contact.formEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    let detail = "";
    try {
      const data = (await res.json()) as { error?: string; message?: string };
      detail = data.error || data.message || "";
    } catch {
      /* ignore */
    }
    throw new Error(detail || "We could not send your enquiry. Please try again shortly.");
  }
}
