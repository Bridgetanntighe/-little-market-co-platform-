/**
 * Public contact details and form delivery via Netlify Forms.
 */

export const NETLIFY_FORM_NAME = "enquiry";
export const WORK_WITH_US_FORM_NAME = "work-with-us";
export const PARTNER_FORM_NAME = "partner-with-us";

export const contact = {
  email: "hello.littlemarketco@gmail.com",
  instagramUrl: "",
  instagramHandle: "",
  serviceArea: "London and surrounding areas",
  formConfigured: true,
};

export const workInterestOptions = [
  "Freelance floristry",
  "Event setup and collection",
  "Guest assistance",
  "Styling",
  "Other",
] as const;

export const partnerBusinessTypes = [
  "Venue",
  "Wedding or event planner",
  "Event or creative agency",
  "Florist",
  "Other business",
] as const;

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

export type WorkWithUsPayload = {
  name: string;
  email: string;
  travelAreas: string;
  interest: string;
  experience: string;
  portfolio: string;
  availability: string;
  "bot-field"?: string;
};

export type PartnerPayload = {
  name: string;
  businessName: string;
  email: string;
  website: string;
  businessType: string;
  partnershipIdea: string;
  "bot-field"?: string;
};

async function postNetlifyForm(formName: string, fields: Record<string, string>): Promise<void> {
  const body = new URLSearchParams();
  body.set("form-name", formName);
  for (const [key, value] of Object.entries(fields)) {
    body.set(key, value);
  }

  const res = await fetch("/__forms.html", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    throw new Error("We could not send your message. Please try again shortly.");
  }
}

export async function submitEnquiry(payload: EnquiryPayload): Promise<void> {
  try {
    await postNetlifyForm(NETLIFY_FORM_NAME, {
      "bot-field": payload["bot-field"] ?? "",
      name: payload.name,
      email: payload.email,
      company: payload.company,
      eventDate: payload.eventDate,
      venue: payload.venue,
      guests: payload.guests,
      eventType: payload.eventType,
      packageChoice: payload.packageChoice,
      colourStory: payload.colourStory,
      additional: payload.additional,
    });
  } catch {
    throw new Error("We could not send your enquiry. Please try again shortly.");
  }
}

export async function submitWorkWithUs(payload: WorkWithUsPayload): Promise<void> {
  try {
    await postNetlifyForm(WORK_WITH_US_FORM_NAME, {
      "bot-field": payload["bot-field"] ?? "",
      name: payload.name,
      email: payload.email,
      travelAreas: payload.travelAreas,
      interest: payload.interest,
      experience: payload.experience,
      portfolio: payload.portfolio,
      availability: payload.availability,
    });
  } catch {
    throw new Error("We could not send your application. Please try again shortly.");
  }
}

export async function submitPartnerEnquiry(payload: PartnerPayload): Promise<void> {
  try {
    await postNetlifyForm(PARTNER_FORM_NAME, {
      "bot-field": payload["bot-field"] ?? "",
      name: payload.name,
      businessName: payload.businessName,
      email: payload.email,
      website: payload.website,
      businessType: payload.businessType,
      partnershipIdea: payload.partnershipIdea,
    });
  } catch {
    throw new Error("We could not send your partnership enquiry. Please try again shortly.");
  }
}
