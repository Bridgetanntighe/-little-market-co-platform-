import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { contact } from "../data/contact";
import { pageSeo } from "../data/pageSeo";
import { site } from "../data/site";

const seo = pageSeo.privacy;

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={seo.path}
        image={seo.ogImage}
      />
      <main className="section privacy-page">
        <div className="container narrow">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Privacy policy</span>
          </nav>
          <h1>{seo.h1}</h1>
          <p className="privacy-page__lead">
            This notice explains how The Little Market Co (“we”) handles personal information
            submitted through {site.url}.
          </p>

          <h2>Who we are</h2>
          <p>
            The Little Market Co provides flower bar hire and related experiences across London and
            surrounding areas. Contact:{" "}
            {contact.email ? (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ) : (
              "via the website enquiry form"
            )}
            .
          </p>

          <h2>Information we collect</h2>
          <p>We may collect details you choose to send us, including:</p>
          <ul>
            <li>
              Customer enquiry information such as name, email, company, event details and package
              preferences
            </li>
            <li>
              Freelance interest applications such as name, email, travel areas, skills of interest,
              experience notes, portfolio links and availability
            </li>
            <li>
              Partnership enquiries such as name, business name, email, website or Instagram,
              business type and partnership ideas
            </li>
            <li>
              Wedding enquiries such as name, email, wedding date, venue, guest numbers, bouquet
              preferences and styling ideas
            </li>
          </ul>

          <h2>How we use your information</h2>
          <p>We use this information to:</p>
          <ul>
            <li>Respond to event enquiries and provide quotes</li>
            <li>
              Assess suitability for occasional freelance opportunities and contact applicants if a
              suitable opportunity comes up
            </li>
            <li>Respond to partnership enquiries and discuss possible collaborations</li>
            <li>Keep basic records of conversations related to bookings, applications or partnerships</li>
          </ul>
          <p>
            Submitting a freelance interest form does not mean there is a confirmed vacancy,
            guaranteed hours or a permanent role.
          </p>

          <h2>Sharing</h2>
          <p>
            Form submissions are processed using Netlify Forms as part of hosting this website. We
            do not sell your personal information. We only share details where needed to operate the
            site or where required by law.
          </p>

          <h2>Retention</h2>
          <p>
            We keep enquiry and application details for as long as needed to respond and manage
            related follow-up, then delete or anonymise them when no longer required.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us for a copy of the personal information we hold about you, or ask us to
            update or delete it, by emailing{" "}
            {contact.email ? (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ) : (
              "us via the enquiry form"
            )}
            .
          </p>

          <h2>Updates</h2>
          <p>We may update this policy from time to time. The latest version will always appear on this page.</p>

          <p>
            <Link to="/enquire/">Check your date</Link>
            {" · "}
            <Link to="/">Home</Link>
          </p>
        </div>
      </main>
    </>
  );
}
