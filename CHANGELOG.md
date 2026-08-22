# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-08-22

### Added
- **Modern Typography System**: Integrated **Space Mono** for high-impact titles and **Google Sans Code** for code and terminal blocks.
- **Solid Hero Section**: High-contrast solid `#ff0055` hero header with Developer Summit Leetspeak typography and English copy.
- **PiruAdmin Component Suite**:
  - **Top Filters Bar**: Independent container with dynamic selects and search input group.
  - **Data Tables**: Striped and contextual table rows with user avatars, status badges, and action buttons (`btn-sm`).
  - **Pagination Bar**: Navigation bar with counters, double-chevron jump buttons, and rounded page items.
- **New Component Demos**:
  - KPI metric stat cards with trend percentage indicators.
  - Interactive confirmation dialogs and delete modals.
  - Offcanvas lateral drawers (Left and Right).
  - Status indicator dots (`Online`, `Away`, `Busy`, `Offline`) and subtle tint badge variants.
  - Form validation states (`is-valid`, `is-invalid`) and floating labels.
- **SEO & Social Optimization**: Full Open Graph metadata, Twitter Cards, dynamic mobile `theme-color`, and Schema.org JSON-LD structured data across all layouts.

### Changed
- **Border-Radius Rules**: Buttons, inputs, form selects, badges, and pagination now strictly inherit `$border-radius` (`0.375rem`), while cards and container wrappers (`bg-body p-3`) use clean, flat, rectangular corners without `.rounded`.
- **Vertical Spacing Standard**: Standardized all section margins to `mb-3` and grid gutters to `g-3` across templates and documentation rules.
- **Package Version**: Upgraded to version 2.0.0 in `package.json`.

### Removed
- **Legacy Fonts**: Completely removed Nunito and Fira Code font files and declarations.
- **Obsolete Dependencies**: Removed `@babel/polyfill`, `@babel/register`, `babel-eslint`, `clean-webpack-plugin`, `file-loader`, and `url-loader` from `package.json`.

---

## [1.1.0] - 2026-05-02

### Added
- **Responsive Brand System**: Implemented a flexible logo system in the navbar with three styles: Image-only, Image-with-title, and Text/Icon-only.
- **Theme-aware Logos**: Automatic switching between light and dark logos based on the Bootstrap theme (`data-bs-theme`).
- **Template Brand Variants**: All brand styles are now compiled into the HTML but inactive ones are wrapped in comments for easy developer switching.
- **Webpack Integration**: Moved core site configuration (`siteName`, `navLogoStyle`, etc.) to Webpack's `templateParameters` for centralized management.

### Fixed
- **Runtime Conflict Fix**: Resolved `Cannot set properties of undefined` error in development by disabling HMR in favor of stable Live Reload for multi-entry pages.
- **Pug Scope Resolution**: Fixed an issue where `siteName` and other variables were not appearing in templates due to Pug block scope constraints.
- **Configuration Cleanup**: Centralized and cleaned up global variables in `src/view/config/config.pug`.
- **Webpack Optimization**: Removed redundant Prettier settings and set the explicit target to `web` for better browser compatibility.

### Changed
- Updated `package.json` to version 1.1.0.
- Refactored `navbar.pug` to support dynamic branding logic.
- Moved logo assets and paths to centralized configuration.
