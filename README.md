# The Little Market Co.

Website for The Little Bloom Market — premium self-serve flower bar hire for London offices, events and brand activations.

## Local preview

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## Deploy on Netlify

Configured in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Vite `base`: `/`

Connect the GitHub repo in Netlify (or drag-and-drop `dist` after a local build).

### Enable form detection and email notifications

1. Deploy the site so Netlify can parse the static `enquiry` form in `index.html`.
2. In Netlify: **Site configuration → Forms** — confirm the `enquiry` form appears.
3. Open **Form notifications** → **Email notification** and set the recipient to your real enquiry inbox.
4. Optionally enable spam filtering (Akismet) under Forms settings; the honeypot field `bot-field` is already included.

Until notifications are configured, submissions are stored in the Netlify Forms inbox but may not email you.

### Enquiry email on the site

The footer does **not** show a `mailto:` link until a real enquiry email is provided. Share that address when you are ready and it can be added.

## Enquiry form

Enquiries post to Netlify Forms as URL-encoded data with `form-name=enquiry`. Field names match the hidden static HTML form and the React form.

Local `npm run dev` / `npm run preview` cannot accept Netlify Forms posts — use a Netlify deploy (or `netlify dev`) to test end-to-end delivery.

## Photos

Gallery images under `public/images/inspiration/` are licensed stock used as atmosphere only. They are labelled as inspiration, not previous client events. Replace with real photography when available. See `public/images/inspiration/CREDITS.txt`.
