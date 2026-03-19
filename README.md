# Mahindra Verito 2011 — EV Conversion Blueprint

A complete technical website for converting the Mahindra Verito 2011 diesel sedan into a dual-mode extended-range electric vehicle (REEV) with onboard diesel generator backup charging.

## Contents

- **Section 01** — System Architecture (original vs target specs, car diagram)
- **Section 02** — Powertrain & Wiring Schematic (colour-coded diagram)
- **Section 03** — Complete Components Table (18 items, Indian pricing)
- **Section 04** — Dual Charging System (AC grid + diesel generator)
- **Section 05** — 18-Step Build Process (planning → road testing)
- **Section 06** — Video Resources (100+ curated YouTube links)
- **Section 07** — Full Budget Breakdown (~₹6.3L–₹9.5L)
- **Section 08** — Safety & RTO Compliance (India AIS-123)

## Deploy on Render

1. **Push to GitHub** — Create a repo and push this folder (or just the HTML files).

2. **Connect to Render** — Go to [render.com](https://render.com) → New → Blueprint.

3. **Link repository** — Connect your GitHub repo containing `render.yaml`.

4. **Deploy** — Render will detect the blueprint and deploy the static site. Your site will be live at `https://verito-ev-blueprint.onrender.com` (or your custom domain).

### Manual static site setup (without Blueprint)

1. New → Static Site
2. Connect your repository
3. **Build Command:** `true` (or leave empty)
4. **Publish Directory:** `.` (root)
5. Deploy

## Files

| File | Purpose |
|------|---------|
| `verito-ev-blueprint.html` | Main blueprint (all 8 sections) |
| `index.html` | Redirects to main blueprint |
| `render.yaml` | Render deployment config |
| `EV_Conversion_YouTube_Videos_Reference.md` | Video URL reference list |

## License & Disclaimer

This blueprint is for educational and reference purposes. EV conversions require qualified expertise and must comply with local regulations (e.g. AIS-123 in India). Engage certified specialists for actual builds.
