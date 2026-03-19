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

1. **Push to GitHub** — Create a repo and push this folder.

2. **Connect to Render** — Go to [render.com](https://render.com) → New → Blueprint.

3. **Link repository** — Connect your GitHub repo containing `render.yaml`.

4. **Add Anthropic API Key** — In Render Dashboard → Environment, add:
   - **Key:** `ANTHROPIC_API_KEY`
   - **Value:** Your API key from [console.anthropic.com](https://console.anthropic.com)

5. **Deploy** — Render deploys the Node.js app (static site + AI chat API). Site live at `https://verito-ev-blueprint.onrender.com`.

### AI Guide (Optional)

The AI Guide uses Anthropic's Claude. Without `ANTHROPIC_API_KEY`, the chat will show a setup message. Get a key at [console.anthropic.com](https://console.anthropic.com) → API Keys.

## Files

| File | Purpose |
|------|---------|
| `verito-ev-blueprint.html` | Main blueprint (all 8 sections + AI Guide) |
| `index.html` | Redirects to main blueprint |
| `api/server.js` | Node.js server (static + /api/chat) |
| `api/blueprint-context.js` | AI system prompt (blueprint knowledge) |
| `render.yaml` | Render deployment config |
| `EV_Conversion_YouTube_Videos_Reference.md` | Video URL reference list |

## License & Disclaimer

This blueprint is for educational and reference purposes. EV conversions require qualified expertise and must comply with local regulations (e.g. AIS-123 in India). Engage certified specialists for actual builds.
