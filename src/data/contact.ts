/**
 * Public contact details and enquiry delivery via Netlify Forms.
 *
 * Leave email / Instagram empty until real values are confirmed.
 * Do not use placeholder emails or generic Instagram URLs.
 *
 * Netlify Forms: React submits URL-encoded POSTs to `/` with `form-name`.
 * A matching static HTML form in `index.html` enables form detection at deploy.
 */

export const NETLIFY_FORM_NAME = "enquiry";

export const contact = {
  /** Real enquiry email — omit from UI until provided */
  email: "",
  /** Full Instagram profile URL — omit from UI until provided */
  instagramUrl: "",
  /** Display handle only, e.g. @thelittlemarketco */
  instagramHandle: "",
  /** Service area shown in footer / schema */
  serviceArea: "London and surrounding areas",
  /** Netlify Forms are always available once the site is deployed to Netlify */
  formConfigured: true,
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
  /** Honeypot — must stay empty for real guests */
  "bot-field"?: string;
};

/** Field names must match the static Netlify form in index.html exactly. */
export const enquiryFieldNames = [
  "name",
  "email",
  "phone",
  "company",
  "eventType",
  "packageChoice",
  "eventDate",
  "venue",
  "guests",
  "christmasBooking",
  "brandPersonalisation",
  "additional",
  "bot-field",
] as const;

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const body = new URLSearchParams();
  body.set("form-name", NETLIFY_FORM_NAME);
  body.set("bot-field", payload["bot-field"] ?? "");
  body.set("name", payload.name);
  body.set("email", payload.email);
  body.set("phone", payload.phone);
  body.set("company", payload.company);
  body.set("eventType", payload.eventType);
  body.set("packageChoice", payload.packageChoice);
  body.set("eventDate", payload.eventDate);
  body.set("venue", payload.venue);
  body.set("guests", payload.guests);
  body.set("christmasBooking", payload.christmasBooking);
  body.set("brandPersonalisation", payload.brandPersonalisation);
  body.set("additional", payload.additional);

  // Prefer the static skeleton so SPA redirects cannot intercept form POSTs.
  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error("We could not send your enquiry. Please try again shortly.");
  }
}
