<div align="center">
  <img src="src/img/logo/piruui-white-logo.png" alt="PiruUI Logo" width="120">
  <h1>PiruUI Bootstrap 5 UI Kit</h1>
  <p><strong>A modern, borderless, developer-first UI Kit built on Bootstrap 5.3, Pug, and Sass.</strong></p>

  [![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/pirulug/piruui-bootstrap-5-ui-kit)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3.svg)](https://getbootstrap.com/)
  [![Sass](https://img.shields.io/badge/Sass-v1.103-cf649a.svg)](https://sass-lang.com/)
  [![Webpack](https://img.shields.io/badge/Webpack-v5.109-8dd6f9.svg)](https://webpack.js.org/)

  [Live Demo](https://pirulug.github.io/piruui-bootstrap-5-ui-kit/) | [English](README.md) | [Versión en Español](README.es.md)
</div>

---

## Overview

**PiruUI** is an open-source, developer-centric UI Kit and design system. Built on top of **Bootstrap 5.3**, it features a flat, borderless, and shadowless aesthetic paired with a tech-forward monospace typography suite (**Space Mono** and **Google Sans Code**). 

It is designed for building fast dashboards, admin tools, developer summits, e-commerce storefronts, and marketing sites with **Pug** templates and modular **SCSS**.

---

## Key Features

- **Borderless & Shadowless Aesthetic**: Clean, modern interface without visual clutter or box-shadows. Visual depth is established through intentional background contrasts (`bg-body`) and consistent spacing.
- **Tech Typography Suite**: Integrated with **Space Mono** for high-impact headers and **Google Sans Code** for clean code blocks, tables, and interfaces.
- **PiruAdmin Component Standards**:
  - **Top Filters & Action Bar**: Dedicated wrapper containing search groups and primary action buttons.
  - **Data Tables**: Table layouts with user avatars, subtle status badges, and compact action buttons (`btn-sm`).
  - **Pagination Bar**: Navigation controls with total count legends and double-chevron fast navigation.
- **Dynamic Dark & Light Mode**: Native Bootstrap 5.3 `data-bs-theme` support with instant local storage persistence and system preference detection.
- **SEO & Social Metadata Ready**: Built-in Open Graph, Twitter Cards, dynamic mobile `theme-color`, and Schema.org JSON-LD structured data.
- **Clean Component Architecture**: Strict single-class principle with the `piru-` namespace prefix for custom components.
- **Modular Pug Templating**: Hierarchical layouts supporting subpages, partials, and centralized template data.
- **Optimized Webpack 5 Bundling**: Live reloading dev server, automated CSS extraction, HTML minification, and asset optimization.

---

## Tech Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+), CSS3
- **CSS Framework**: [Bootstrap 5.3](https://getbootstrap.com/)
- **Styling**: [Sass (SCSS)](https://sass-lang.com/) & [PostCSS](https://postcss.org/) (Autoprefixer)
- **Typography**: [Space Mono](https://fonts.google.com/specimen/Space+Mono) & [Google Sans Code](https://fonts.google.com/specimen/Google+Sans+Code)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/) & [Font Awesome](https://fontawesome.com/)
- **Templates**: [Pug](https://pugjs.org/)
- **Bundler**: [Webpack 5](https://webpack.js.org/)

---

## Project Structure

```text
piruui-bootstrap-5-ui-kit/
├── src/
│   ├── fonts/              # Space Mono and Google Sans Code font files
│   ├── img/                # Logos, favicons, and demo media
│   ├── js/                 # Application scripts and Bootstrap modules
│   ├── plugins/            # Bundled plugins (Prism, LiteYouTube, etc.)
│   ├── scss/               # Modular SCSS architecture
│   │   ├── base/           # Variables, dark theme overrides, mixins
│   │   ├── components/     # Custom PiruUI components (cards, buttons, tabs)
│   │   ├── layouts/        # Navbar, footer, and wrapper styles
│   │   └── pages/          # Page-specific styling (hero, index)
│   └── view/               # Pug templates
│       ├── components/     # Component demo suites (buttons, tables, forms, etc.)
│       ├── config/         # Global metadata and SEO parameters
│       ├── includes/       # Shared partials (navbar, footer, announcement)
│       ├── layouts/        # Base layouts (home, auth)
│       └── pages/          # Final compiled pages (index, blog, shop, movies, auth)
├── webpack.config.js       # Centralized Webpack 5 build configuration
└── package.json            # Project manifest and scripts
```

---

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [pnpm](https://pnpm.io/) (or npm) installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/pirulug/piruui-bootstrap-5-ui-kit.git

# Navigate to the project directory
cd piruui-bootstrap-5-ui-kit

# Install dependencies
pnpm install
```

---

## NPM Scripts

| Command | Description |
| :--- | :--- |
| `pnpm run start` | Starts the Webpack dev server on `http://localhost:8989` with live reloading |
| `pnpm run build` | Compiles and optimizes production assets in the `dist/` folder |
| `pnpm run dev` | Runs Webpack in development mode |
| `pnpm run dev:plugins` | Compiles individual plugins located in `src/plugins/` |
| `pnpm run deploy` | Deploys the generated `dist/` directory to GitHub Pages |

---

## Design System Guidelines

1. **Containers & Spacing**:
   - Section wrappers use `.bg-body.p-3.mb-3` with sharp, rectangular corners (no `.rounded` on outer wrappers).
   - Vertical spacing is strictly standard: use only `mb-3` and grid gutter `g-3`.
2. **Border Radius**:
   - Interactive elements (`.btn`, `.form-control`, `.form-select`, `.badge`, `.pagination`) inherit standard `$border-radius` (`0.375rem`).
   - Cards (`.card`), dialogs, and outer container wrappers default to flat corners (`0`).
3. **PiruAdmin Tables**:
   - Wrap data tables in `.bg-body.p-3.mb-3`.
   - Table headers must be `text-uppercase fw-bold text-nowrap` without background fills.
   - Row action buttons must use `.btn.btn-sm.btn-outline-*` with `text-uppercase fw-bold text-nowrap`.

---

## Configuration

Global template parameters are defined in `webpack.config.js`:

```javascript
templateParameters: {
  baseUrl: baseUrl,
  assets: baseUrl + "assets/",
  siteName: "PiruUI",
  navLogoStyle: "text", // "image", "image-title", or "text"
  logoLight: "img/logo/piruui-dark-logo.png",
  logoDark: "img/logo/piruui-white-logo.png"
}
```

SEO variables and page parameters can be set per page in Pug templates:

```pug
append config
  - pageName = "Dashboard"
  - pageTitle = "Dashboard | PiruUI Admin"
  - pageDescription = "Manage your team, analytics, and business metrics."
  - pageKeywords = "dashboard, metrics, piruadmin"
```

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Author

Developed and maintained by **[Pirulug](https://github.com/pirulug)**.