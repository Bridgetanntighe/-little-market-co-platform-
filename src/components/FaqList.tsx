type FaqItem = { q: string; a: string };

/** Accessible FAQ markup — answers stay visible for SEO and screen readers. */
export function FaqList({ items, id }: { items: FaqItem[]; id?: string }) {
  return (
    <div className="faq__list faq__list--open" id={id}>
      {items.map((item) => (
        <article className="faq-item" key={item.q}>
          <h3 className="faq-item__q">{item.q}</h3>
          <p className="faq-item__a">{item.a}</p>
        </article>
      ))}
    </div>
  );
}
