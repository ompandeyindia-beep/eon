# EON — Energy Outlook Nexus

**Understanding Energy. Shaping Tomorrow.**

This repository contains the EON V2 frontend: a premium energy media/research/community interface designed for GitHub Pages.

## Important brand rule

This site uses **only the EON symbol image explicitly supplied/approved for this build**:

`assets/images/eon-approved-symbol.png`

No alternate or unapproved generated logo is used.

## Included
- Sticky EON header with persistent logo
- Responsive navigation
- Search overlay
- Latest stories / editorial layout
- EON Outlook
- Community posts
- Demo likes, comments and share
- Research section
- Data section
- EON Conversations
- Write-for-EON submission interface
- Responsive mobile layout
- Accessibility-minded controls
- GitHub Pages compatible static frontend

## Static-site limitation

GitHub Pages is static hosting. Real multi-user accounts, persistent likes/comments, moderation and public article publishing require a backend/database.

This version includes demo interactions using browser local storage.

For production, connect the frontend to a backend such as Supabase/Firebase or another hosted database/API.

For live "latest stories" from other publishers, use licensed/approved RSS or API sources through a safe aggregation layer. Do not scrape third-party publishers directly in the browser.

## Deploy

Keep `index.html` at the repository root.

GitHub:
**Settings → Pages → Deploy from a branch → main → / (root)**

## Next steps
1. Replace the approved PNG with your final vector SVG logo once you have the official production asset.
2. Add real article pages and CMS-like publishing.
3. Add backend auth, moderation, likes and comments.
4. Add approved news/RSS/API aggregation.
5. Add verified energy datasets and interactive charts.
6. Connect YouTube/podcast episodes.
7. Add analytics and SEO.
