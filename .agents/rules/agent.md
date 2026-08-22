---
trigger: always_on
---

# PiruUI Design and Development Rules

This file documents the essential constraints and style guidelines for building components in the PiruUI Bootstrap 5 kit. 

## 1. Core Aesthetic: Borderless & Shadowless

- **No Borders**: Never use `.border` or related utility classes (`.border-*`).
- **No Shadows**: Never use `.shadow` or related utility classes.
- **Clean Definition**: Define visual sections and containers through subtle background tone shifts (e.g., `bg-body`) and consistent vertical/horizontal spacing.

- **Prohibited Classes**: 
    - DO NOT use `.bg-body-tertiary`. Use ONLY `.bg-body`.
    - DO NOT use `.shadow`.
    - DO NOT use `.border-0` (redundant if SCSS handles it).

## 2. SCSS Over Utility Classes

- **Single Class Principle**: If a component (e.g., `.card`, `.navbar`, `.footer`, `.nav-pills`) has its styles defined in `src/scss/components/`, use ONLY the base class.
- **Redundancy Exclusion**: DO NOT add `.border-0`, `.bg-body`, or `.rounded-4` to elements that already have these properties defined in their respective SCSS files.
- **Style Priority**: Always check `src/scss/components/_card.scss`, `src/scss/components/_navbar-custom.scss`, etc., before adding utility classes to Pug templates.
- **Style Priority**: Always check `src/scss/components/_card.scss`, `src/scss/components/_navbar-custom.scss`, etc., before adding utility classes to Pug templates.

## 3. Custom Components & Naming

- **Prefix Enforcement**: ALL custom components and specific utility classes created for this project MUST use the `piru-` prefix (e.g., `.piru-movie-card`, `.piru-hero`, `.piru-nav-main`).

- **Container Wrappers (No Rounded)**: Envoltorios y contenedores principales (`bg-body p-3`) NO deben usar `.rounded` ni clases de border-radius. Tienen esquinas rectas para un diseño limpio y plano.
- **Card Integrity**: 
    - DO NOT add `.rounded` or any border-radius utility to `.card`. The border-radius is already defined in the SCSS.
    - DO NOT add `.bg-body` to `.card`. The card background is already defined in the SCSS. Adding background utilities to cards can cause visual artifacts or "square off" the internal corners.
- **No Pill Shapes**: DO NOT use `.rounded-pill`. Components already have their intended border-radius defined in their SCSS files.
- **Modern Navigation**: Use `nav-pills` or custom layouts with `data-bs-toggle` for interactive elements like season switching in series or product tabs.
- **Responsive Media**: Always use `img-fluid` and `object-fit: cover` for posters and high-impact imagery.

## 4. Form Styling

- **Labels**: Use ONLY `.form-label`. DO NOT add extra utility classes for size, weight, or spacing unless absolutely necessary for unique layouts.
- **Inputs**: Use ONLY `.form-control`. DO NOT add background, border, or padding utilities (like `.bg-body-secondary`, `.border-0`, `.px-4`). These are already handled by the global SCSS.

## 4. Templating & Routing (Pug)

- **Relative Base URL**: Always use `#{baseUrl}` for internal links (e.g., `href='#{baseUrl}shop/index.html'`) and asset references.
- **Hierarchical Layouts**: Support subfolders (e.g., `src/view/pages/movies/`, `src/view/pages/shop/`) by correctly extending the main layout using paths relative to the `baseUrl`.

## 5. Build Integrity

- **Clean Compilations**: Always run `pnpm run build` to verify PUG syntax and SCSS compilation after making changes to the UI structure.
- **Bootstrap Integrity**: While custom styles are preferred, maintain compatibility with Bootstrap 5.3's grid and accessibility features.