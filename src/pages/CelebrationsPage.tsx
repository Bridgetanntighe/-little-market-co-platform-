import { Link } from "react-router-dom";
import { ResponsiveImage } from "../components/ResponsiveImage";
import { Seo } from "../components/Seo";
import { colourStories, hireOptions } from "../data/content";
import { site } from "../data/site";
import { enquireHref, useReveal } from "../hooks/useReveal";

export default function CelebrationsPage() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <>
      <Seo
        title="Private Celebration Flower Bar Hire London | The Little Market Co"
        description="Hire a self-serve flower market for bridal showers, baby showers and birthdays in London. Guests wrap a bouquet and take it home."
        path="/celebrations/"
        jsonLd={[
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
              {
                "@type": "ListItem",
                position: 2,
                name: "Celebrations",
                item: `${site.url}/celebrations/`,
              },
            ],
          },
        ]}
      />
      <main className="celebrations-page">
        <header className="section wedding-hero">
          <div className="container wedding-hero__grid">
            <div>
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true"> / </span>
                <span>Celebrations</span>
              </nav>
              <span className="hero__eyebrow">Bridal showers · Baby showers · Birthdays</span>
              <h1>A little flower market for private celebrations</h1>
              <p className="wedding-hero__copy">
                Gather friends for a relaxed shared activity with personal colour choices and a
                bouquet to take home. Our compact setup arrives styled — guests choose stems, wrap
                and enjoy the moment.
              </p>
              <div className="hero__actions">
                <Link
                  className="btn btn-primary"
                  to={enquireHref({ eventType: "Birthday / private celebration" })}
                >
                  Check your date
                </Link>
                <Link className="btn btn-secondary" to="/packages/">
                  See packages
                </Link>
              </div>
            </div>
            <figure className="wedding-hero__figure">
              <ResponsiveImage
                src="/images/guests-making-bouquets-flower-market.jpg"
                webp="/images/guests-making-bouquets-flower-market.webp"
                alt="Styling concept of guests wrapping take-home bouquets at a celebration"
                width={1200}
                height={800}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 520px"
              />
              <figcaption>Styling concept — celebration bouquet moment (inspiration image)</figcaption>
            </figure>
          </div>
        </header>

        <section className={`section reveal ${visible ? "is-visible" : ""}`} ref={ref}>
          <div className="container narrow">
            <h2 className="section-title">Simple planning, a personal touch</h2>
            <p className="section-lead">
              Ideal for bridal showers, baby showers and special birthdays. The market is
              self-serve after setup — we prepare, deliver, style and collect so you can host
              without managing flowers.
            </p>
            <ul className="partner-ways__list">
              <li>A relaxed shared activity guests can join at their own pace</li>
              <li>Personal colour choices from Soft Meadow, Modern Neutral or Colour Pop</li>
              <li>A bouquet to take home — more than a party bag</li>
              <li>Compact setup suited to homes, gardens and hired rooms</li>
            </ul>
            <Link
              className="btn btn-primary"
              to={enquireHref({ eventType: "Bridal shower" })}
            >
              Check your date
            </Link>
          </div>
        </section>

        <section className="section colour-stories">
          <div className="container">
            <h2 className="section-title">Colours for your gathering</h2>
            <div className="colour-stories__grid wedding-palettes">
              {colourStories.map((story) => (
                <article className="colour-card" key={story.id}>
                  <div className="colour-card__swatches" aria-hidden="true">
                    {story.colours.map((c) => (
                      <span key={c} style={{ background: c }} />
                    ))}
                  </div>
                  <h3>{story.name}</h3>
                  <p>{story.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section packages">
          <div className="container">
            <h2 className="section-title">Packages for celebrations</h2>
            <p className="section-lead">
              Bouquet allowances match our shared pricing — your guest list can be larger than the
              number of bouquets you book.
            </p>
            <div className="packages__grid packages__grid--three">
              {hireOptions.map((pkg) => (
                <article className="package" key={pkg.id}>
                  <h3>{pkg.name}</h3>
                  <div className="package__price">{pkg.price}</div>
                  <span className="package__note">{pkg.bouquets}</span>
                  <p>{pkg.description}</p>
                  <Link
                    className="btn btn-accent"
                    to={enquireHref({
                      eventType: "Birthday / private celebration",
                      packageChoice: pkg.enquiryValue,
                    })}
                  >
                    Check your date
                  </Link>
                </article>
              ))}
            </div>
            <Link className="btn btn-secondary packages__cta" to="/packages/">
              Compare packages
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
