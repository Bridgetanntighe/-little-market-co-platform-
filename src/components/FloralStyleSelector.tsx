import { useId, useState } from "react";
import { Link } from "react-router-dom";
import {
  HELP_ME_CHOOSE_STYLE,
  floralCollections,
  seasonalMarketNote,
  type FloralCollection,
} from "../data/content";
import { enquireHref, enquireLocation } from "../hooks/useReveal";
import { ResponsiveImage } from "./ResponsiveImage";

type Mode = "full" | "preview";

type Props = {
  mode?: Mode;
  /** Optional event type carried into the enquiry form. */
  eventType?: string;
};

function CollectionMedia({ collection }: { collection: FloralCollection }) {
  if (collection.image) {
    return (
      <div className="style-card__media">
        <ResponsiveImage
          src={collection.image.src}
          webp={collection.image.webp}
          alt={collection.image.alt}
          width={collection.image.width}
          height={collection.image.height}
          sizes="(max-width: 720px) 78vw, 360px"
        />
        <span className="preview-label">Styling inspiration</span>
      </div>
    );
  }

  return (
    <div className="style-card__media style-card__media--needed" role="img" aria-label={collection.imageNeeded}>
      <p className="style-card__needed-label">Styling inspiration</p>
      <p className="style-card__needed-brief">Photograph needed</p>
      <p className="style-card__needed-copy">{collection.imageNeeded}</p>
    </div>
  );
}

export function FloralStylePreview() {
  return (
    <div className="style-preview">
      <p className="style-rail__hint" aria-hidden="true">
        Swipe for more styles
      </p>
      <div className="style-preview__grid style-rail" tabIndex={0} aria-label="Floral style collections. Swipe horizontally to see more.">
        {floralCollections.map((collection) => (
          <Link
            className="style-card style-card--preview"
            to={enquireHref({ colourIdeas: collection.enquiryValue })}
            key={collection.id}
          >
            <CollectionMedia collection={collection} />
            <div className="style-card__body">
              <h3>{collection.name}</h3>
              <p>{collection.copy}</p>
              <span className="style-card__cta">Check your date →</span>
            </div>
          </Link>
        ))}
      </div>
      <Link className="btn btn-secondary" to="/packages/#floral-style">
        Compare styles
      </Link>
    </div>
  );
}

export function FloralStyleSelector({ eventType }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const groupId = useId();

  const selected = floralCollections.find((c) => c.id === selectedId);
  const enquireTo = enquireLocation({
    eventType,
    colourIdeas: selected?.enquiryValue,
  });
  const helpTo = enquireLocation({
    eventType,
    colourIdeas: HELP_ME_CHOOSE_STYLE,
  });
  const ownColoursTo = enquireLocation({
    eventType,
    colourIdeas: "Own colours",
  });
  const seasonalTo = enquireLocation({
    eventType,
    colourIdeas: seasonalMarketNote.enquiryValue,
  });

  const toggle = (id: string) => {
    setSelectedId((current) => (current === id ? null : id));
  };

  return (
    <div className="style-selector">
      <p className="style-rail__hint" aria-hidden="true">
        Swipe for more styles
      </p>
      <div
        className="style-selector__grid style-rail"
        role="radiogroup"
        aria-labelledby={groupId}
        tabIndex={0}
        aria-label="Floral style collections. Swipe horizontally to see more."
      >
        <span id={groupId} className="visually-hidden">
          Floral style collections
        </span>
        {floralCollections.map((collection) => {
          const isSelected = selectedId === collection.id;
          return (
            <article
              className={`style-card ${isSelected ? "style-card--selected" : ""}`}
              key={collection.id}
            >
              <CollectionMedia collection={collection} />
              <div className="style-card__body">
                <div className="style-card__heading-row">
                  <h3>{collection.name}</h3>
                  {isSelected && (
                    <span className="style-card__selected-badge">
                      <span className="style-card__check" aria-hidden="true" />
                      Selected
                    </span>
                  )}
                </div>
                <p>{collection.copy}</p>
                <button
                  className={`btn ${isSelected ? "btn-primary" : "btn-secondary"}`}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => toggle(collection.id)}
                >
                  {isSelected ? "Selected" : "Choose this style"}
                </button>
              </div>
            </article>
          );
        })}
      </div>

      <aside className="style-selector__seasonal">
        <h3>{seasonalMarketNote.heading}</h3>
        <p>{seasonalMarketNote.copy}</p>
        <Link className="text-link" to={seasonalTo}>
          Enquire about a seasonal mix
        </Link>
      </aside>

      <p className="style-selector__own">
        <Link className="text-link" to={ownColoursTo}>
          Have your own colours? Tell us your ideas.
        </Link>
      </p>

      <p className="style-selector__note">
        Flower varieties vary with the season. We’ll confirm your selection and any substitutions
        when we prepare your quote.
      </p>

      <div className="style-selector__actions">
        <Link className="btn btn-primary" to={enquireTo}>
          Check your date
        </Link>
        <Link className="btn btn-secondary" to={helpTo}>
          Help me choose
        </Link>
      </div>
    </div>
  );
}
