<div align="center">
  <img src="src/img/logo/piruui-white-logo.png" alt="PiruUI Logo" width="120">
  <h1>PiruUI Bootstrap 5 UI Kit</h1>
  <p><strong>Un kit de interfaz moderno, sin bordes y orientado a desarrolladores basado en Bootstrap 5.3, Pug y Sass.</strong></p>

  [![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/pirulug/piruui-bootstrap-5-ui-kit)
  [![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952b3.svg)](https://getbootstrap.com/)
  [![Sass](https://img.shields.io/badge/Sass-v1.103-cf649a.svg)](https://sass-lang.com/)
  [![Webpack](https://img.shields.io/badge/Webpack-v5.109-8dd6f9.svg)](https://webpack.js.org/)

  [Demostración en Vivo](https://pirulug.github.io/piruui-bootstrap-5-ui-kit/) | [English](README.md) | [Versión en Español](README.es.md)
</div>

---

## Descripción General

**PiruUI** es un kit de componentes de interfaz y sistema de diseño de código abierto. Desarrollado sobre **Bootstrap 5.3**, se distingue por su estética plana, sin bordes y sin sombras, combinada con una tipografía monoespaciada moderna (**Space Mono** y **Google Sans Code**).

Está diseñado para construir paneles de control, herramientas administrativas, eventos de tecnología, tiendas de comercio electrónico y páginas de aterrizaje con plantillas **Pug** y arquitectura modular en **SCSS**.

---

## Características Principales

- **Estética Sin Bordes ni Sombras**: Diseño limpio y moderno sin sobrecarga visual. La profundidad y delimitación se logran mediante contrastes suaves de fondo (`bg-body`) y espaciados consistentes.
- **Suite Tipográfica Tech**: Integración de **Space Mono** para encabezados de alto impacto y **Google Sans Code** para bloques de código, terminales y tablas de datos.
- **Estándares de Componentes PiruAdmin**:
  - **Barra Superior de Filtros y Acciones**: Contenedor independiente con selects de estado/categoría y grupo de búsqueda con botón de acción principal.
  - **Tablas de Listados**: Estructura con avatares de usuario, badges sutiles para estados y roles, y botones de acción compactos (`btn-sm`).
  - **Barra de Paginación**: Controles de navegación con leyenda de conteo de registros y botones de salto con doble chevron.
- **Tema Oscuro y Claro Dinámico**: Soporte nativo para el estándar `data-bs-theme` de Bootstrap 5.3 con detección del sistema y almacenamiento en `localStorage`.
- **Arquitectura SEO Integrada**: Metadatos listos para Open Graph, Twitter Cards, personalización de color de barra de navegación para móviles (`theme-color`) y datos estructurados Schema.org (JSON-LD).
- **Arquitectura Limpia**: Principio de clase única y prefijo de espacio de nombres `piru-` para componentes personalizados.
- **Plantillas Pug Modulares**: Layouts jerárquicos con soporte para subcarpetas, parciales reutilizables y paso centralizado de datos.
- **Compilación Optimizada con Webpack 5**: Servidor con recarga en vivo, extracción de CSS, minificación y optimización de recursos.

---

## Stack Tecnológico

- **Núcleo**: HTML5, JavaScript Vanilla (ES6+), CSS3
- **Framework CSS**: [Bootstrap 5.3](https://getbootstrap.com/)
- **Estilos**: [Sass (SCSS)](https://sass-lang.com/) y [PostCSS](https://postcss.org/) (Autoprefixer)
- **Tipografía**: [Space Mono](https://fonts.google.com/specimen/Space+Mono) y [Google Sans Code](https://fonts.google.com/specimen/Google+Sans+Code)
- **Iconos**: [Bootstrap Icons](https://icons.getbootstrap.com/) y [Font Awesome](https://fontawesome.com/)
- **Motor de Plantillas**: [Pug](https://pugjs.org/)
- **Empaquetador**: [Webpack 5](https://webpack.js.org/)

---

## Estructura del Proyecto

```text
piruui-bootstrap-5-ui-kit/
├── src/
│   ├── fonts/              # Archivos de fuentes Space Mono y Google Sans Code
│   ├── img/                # Logos, favicons e imágenes de demostración
│   ├── js/                 # Scripts principales y módulos de Bootstrap
│   ├── plugins/            # Plugins integrados (Prism, LiteYouTube, etc.)
│   ├── scss/               # Arquitectura modular de Sass
│   │   ├── base/           # Variables, temas oscuros y mixins
│   │   ├── components/     # Componentes personalizados (tarjetas, botones, tabs)
│   │   ├── layouts/        # Estilos de navbar, pie de página y contenedor principal
│   │   └── pages/          # Estilos de páginas específicas (hero, inicio)
│   └── view/               # Plantillas de Pug
│       ├── components/     # Demos de componentes (botones, tablas, formularios, etc.)
│       ├── config/         # Configuración global de metadatos y SEO
│       ├── includes/       # Parciales compartidos (navbar, footer, avisos)
│       ├── layouts/        # Layouts base (home, auth)
│       └── pages/          # Páginas compiladas (inicio, blog, tienda, películas, auth)
├── webpack.config.js       # Configuración de compilación con Webpack 5
└── package.json            # Manifiesto de dependencias y scripts
```

---

## Instalación y Uso

### Prerrequisitos

Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y [pnpm](https://pnpm.io/) (o npm).

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/pirulug/piruui-bootstrap-5-ui-kit.git

# Entrar al directorio del proyecto
cd piruui-bootstrap-5-ui-kit

# Instalar dependencias
pnpm install
```

---

## Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `pnpm run start` | Inicia el servidor de desarrollo en `http://localhost:8989` con recarga en vivo |
| `pnpm run build` | Compila y optimiza los archivos de producción en la carpeta `dist/` |
| `pnpm run dev` | Ejecuta Webpack en modo de desarrollo |
| `pnpm run dev:plugins` | Compila los plugins individuales ubicados en `src/plugins/` |
| `pnpm run deploy` | Publica la carpeta `dist/` en GitHub Pages |

---

## Reglas del Sistema de Diseño

1. **Envoltorios y Espaciado**:
   - Los contenedores independientes utilizan `.bg-body.p-3.mb-3` con esquinas rectas (sin `.rounded` en los envoltorios exteriores).
   - El espaciado vertical es estrictamente estándar: utilizar únicamente `mb-3` y separación de rejilla `g-3`.
2. **Radio de Borde (Border Radius)**:
   - Los elementos interactivos (`.btn`, `.form-control`, `.form-select`, `.badge`, `.pagination`) heredan el `$border-radius` estándar (`0.375rem`).
   - Las tarjetas (`.card`), diálogos y envoltorios exteriores tienen esquinas rectas por defecto (`0`).
3. **Tablas de Listados PiruAdmin**:
   - Envolver las tablas en un contenedor `.bg-body.p-3.mb-3`.
   - Los encabezados `<th>` deben usar `text-uppercase fw-bold text-nowrap` sin fondos de color.
   - Los botones de acción en filas deben usar `.btn.btn-sm.btn-outline-*` con clases `text-uppercase fw-bold text-nowrap`.

---

## Configuración

Los parámetros globales de las plantillas se configuran centralmente en `webpack.config.js`:

```javascript
templateParameters: {
  baseUrl: baseUrl,
  assets: baseUrl + "assets/",
  siteName: "PiruUI",
  navLogoStyle: "text", // "image", "image-title", o "text"
  logoLight: "img/logo/piruui-dark-logo.png",
  logoDark: "img/logo/piruui-white-logo.png"
}
```

Los metadatos SEO específicos de cada página se definen en las cabeceras de los archivos Pug:

```pug
append config
  - pageName = "Dashboard"
  - pageTitle = "Dashboard | PiruUI Admin"
  - pageDescription = "Gestión de métricas, usuarios y analítica del sistema."
  - pageKeywords = "dashboard, metricas, piruadmin"
```

---

## Licencia

Distribuido bajo la Licencia MIT. Consulta [LICENSE](LICENSE) para más información.

---

## Autor

Desarrollado y mantenido por **[Pirulug](https://github.com/pirulug)**.
