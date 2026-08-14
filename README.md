# EON — Energy Outlook Nexus

Static, GitHub Pages-ready demonstration of an editorial energy platform. All editorial, people, posts, data values and episodes are clearly marked **DEMO / SAMPLE**; they are not assertions of real-world fact.

## Run locally

Serve this folder with any static web server (for example `python -m http.server`) and open the served URL. The site uses relative paths and works on GitHub Pages project hosting.

## Content & future backend

Structured demo content is in `data/`. `assets/js/app.js` fetches it into a small client-side content layer; replace the adapter with a CMS/API adapter later. LocalStorage powers demo likes, bookmarks, comments, newsletter subscriptions and contributor submissions. In production, authentication, moderation, storage, validation, rate limiting, consent and a server-side API are required.

Community content must remain in `pending`, `approved`, `rejected`, or `flagged` states; only approved material belongs in public feeds. Future admin functions should manage users, submissions, comments, sources, datasets, articles and episodes behind authenticated authorization.

## Logo

`assets/images/eon-approved-logo.png` is the supplied approved EON image, copied without geometry or visual-identity changes. `assets/images/eon-brand-reference.png` preserves the supplied brand-reference/banner asset. The HTML never recreates or redraws the mark.

## Deployment

Publish the `EON-WEBSITE` directory with GitHub Pages. Update canonical/OG URLs in the HTML template before production launch.
