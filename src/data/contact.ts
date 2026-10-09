/**
 * Public contact details and enquiry delivery via Netlify Forms.
 */

export const NETLIFY_FORM_NAME = "enquiry";

export const contact = {
  email: "hello.littlemarketco@gmail.com",
  instagramUrl: "",
  instagramHandle: "",
  serviceArea: "London and surrounding areas",
  formConfigured: true,
};

export type EnquiryPayload = {
  name: string;
  email: string;
  company: string;
  eventDate: string;
  venue: string;
  guests: string;
  eventType: string;
  packageChoice: string;
  colourStory: string;
  additional: string;
  /** Honeypot — must stay empty for real guests */
  "bot-field"?: string;
};

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  const body = new URLSearchParams();
  body.set("form-name", NETLIFY_FORM_NAME);
  body.set("bot-field", payload["bot-field"] ?? "");
  body.set("name", payload.name);
  body.set("email", payload.email);
  body.set("company", payload.company);
  body.set("eventDate", payload.eventDate);
  body.set("venue", payload.venue);
  body.set("guests", payload.guests);
  body.set("eventType", payload.eventType);
  body.set("packageChoice", payload.packageChoice);
  body.set("colourStory", payload.colourStory);
  body.set("additional", payload.additional);

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
