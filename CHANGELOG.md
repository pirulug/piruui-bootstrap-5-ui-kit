# Changelog

All notable changes to this project will be documented in this file.

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
