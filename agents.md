# Streetfrontier Hub - Agent Reference Guide

This document provides context for AI agents working on this project.

## Project Overview

**Streetfrontier Hub** is a community-driven platform focused on India's urban and transit infrastructure. It's a static React web application hosted on Vercel.

- **Repository**: https://github.com/shashank261/streetfrontier
- **License**: Apache-2.0

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI framework |
| Vite | 7.x | Build tool & dev server |
| React Router DOM | 7.x | Client-side routing |
| React Bootstrap | 2.x | UI component library |
| Bootstrap | 5.x | CSS framework |
| Lucide React | Latest | Icon library |
| Vercel Analytics | 1.x | Usage tracking |

## Project Structure

```
streetfrontier/
├── index.html              # Entry HTML with OG/meta tags
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── vercel.json             # Vercel deployment config (SPA rewrites)
├── public/
│   └── logo.jpg            # Site logo/favicon
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Router & route definitions
    ├── data/
    │   └── metroData.js    # Metro systems dataset
    ├── pages/
    │   ├── Home.jsx        # Homepage gateway
    │   ├── Home.css        # Homepage styles
    │   ├── MetroTracker.jsx # Metro tracking table
    │   ├── Resources.jsx   # External links & resources
    │   └── Glossary.jsx    # Transit terminology definitions
    └── styles/
        └── swiss.css       # Global Swiss typography styles
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Gateway page with cards linking to features |
| `/metro-tracker` | MetroTracker | Table showing India's metro systems data |
| `/resources` | Resources | Official links, dashboards, metro authorities |
| `/glossary` | Glossary | Transit technology terminology |

## Design System

The project uses a **Swiss typography-inspired design**:

- **Font**: Inter (Google Fonts)
- **Primary accent**: `#ff3333` (Swiss red)
- **Background**: `#f8f9fa` (light gray)
- **Design patterns**:
  - Clean, minimal layouts
  - Bold typography with tight letter-spacing
  - Red accent borders and highlights
  - Responsive tables with horizontal scroll indicators

### CSS Variables (from `swiss.css`)

```css
--font-family-swiss: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
--color-swiss-red: #ff3333;
--color-black: #000000;
--color-white: #ffffff;
--color-gray-100: #f8f9fa;
--color-gray-200: #e9ecef;
--color-gray-800: #343a40;
```

## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

- **Platform**: Vercel
- **SPA Routing**: Handled via `vercel.json` rewrites to `/index.html`
- **Analytics**: Vercel Analytics integrated via `@vercel/analytics`

## Common Patterns

### Adding a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   // In Routes:
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add gateway card in `src/pages/Home.jsx` (in the `gateways` array)

### Styling Conventions

- Use Bootstrap utility classes for layout
- Use `swiss-container`, `swiss-title`, `swiss-subtitle` classes for typography
- Use CSS modules or page-specific CSS files (e.g., `Home.css`)
- Icons: Import from `lucide-react`

## Data Sources

Metro data in `src/data/metroData.js` contains:
- City names
- Operational length (km)
- Under-construction length (km)
- Source URLs for verification

**Important**: Metro data should be accurate and sourced from official/reliable sources.

## Notes for Agents

1. **Title**: Always use "Streetfrontier Hub" (not just "Streetfrontier")
2. **Imports**: React Bootstrap components (`Container`, `Row`, `Col`, `Card`) must be imported from `react-bootstrap`; `Link` from `react-router-dom`
3. **Responsive**: All pages should work on mobile (test at 768px breakpoint)
4. **Aesthetics**: Maintain the premium, Swiss-inspired design aesthetic
5. **Open Source**: This is a community-driven project - keep code clean and well-documented
