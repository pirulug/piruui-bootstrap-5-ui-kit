(function () {
  "use strict";

  // --- 1. Funciones de Limpieza (Helpers) ---

  function escapeHtml(html) {
    return html
      .replace(/×/g, "&times;")
      .replace(/«/g, "&laquo;")
      .replace(/»/g, "&raquo;")
      .replace(/←/g, "&larr;")
      .replace(/→/g, "&rarr;");
  }

  function cleanSource(html) {
    // Escapar HTML y dividir por líneas
    let lines = escapeHtml(html).split("\n");

    // Filtrar líneas vacías y ELIMINAR el botón de "Ver código" del string
    lines = lines.filter(
      (line) =>
        line.trim() !== "" &&
        !line.includes('source-button') // Filtro más robusto
    );

    // Calcular la indentación mínima (espacios en blanco al inicio)
    const indentSizes = lines.map((line) => {
      const match = line.match(/^\s*/);
      return match ? match[0].length : 0;
    });

    // Evitar error si el array está vacío
    if (indentSizes.length > 0) {
      const minIndentSize = Math.min(...indentSizes);
      lines = lines.map((line) => line.slice(minIndentSize));
    }

    return lines.join("\n");
  }

  // --- 2. Lógica del Modal de Código ---

  function initSourceModals() {
    const sourceModalElement = document.getElementById("source-modal");

    // Si no existe el modal en el HTML, salimos para evitar errores
    if (!sourceModalElement) {
      console.error("Error: No se encontró el elemento #source-modal en el HTML");
      return;
    }

    // Event delegation para los botones
    document.body.addEventListener("click", (event) => {
      // Verificamos si lo que se clickeó es el botón o el ícono dentro del botón
      const target = event.target.closest(".source-button");

      if (!target) return; // Si no es el botón, no hacemos nada

      // Obtener el contenedor padre (.bs-component)
      const component = target.closest(".bs-component");

      if (!component) return;

      // Usamos innerHTML del componente
      let html = component.innerHTML;

      // Limpiamos y resaltamos con Prism
      html = cleanSource(html);

      if (window.Prism) {
        html = Prism.highlight(html, Prism.languages.html, "html");
      }

      // Insertar en el modal (Buscamos 'code', si no existe, buscamos '.modal-body')
      const codeContainer = sourceModalElement.querySelector("code") || sourceModalElement.querySelector(".modal-body");

      if (codeContainer) {
        codeContainer.innerHTML = html;
        // Mostrar Modal
        const sourceModal = bootstrap.Modal.getOrCreateInstance(sourceModalElement);
        sourceModal.show();
      } else {
        console.error("Error: No se encontró la etiqueta <code> dentro del modal.");
      }
    });
  }

  // --- 3. Inyección de Botones ---

  function injectSourceButtons() {
    const bsComponents = document.querySelectorAll(".bs-component");

    // Botón simple y directo
    const buttonHtml = '<button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button>';

    bsComponents.forEach((element) => {
      // Verificar si ya tiene botón para no duplicar
      if (!element.querySelector(".source-button")) {
        element.insertAdjacentHTML("beforeend", buttonHtml);
      }
    });
  }

  // --- 4. Inicialización ---

  // Ejecutar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    injectSourceButtons();
    initSourceModals();

    // Inicializar Tooltips y Popovers de Bootstrap
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map((el) => new bootstrap.Popover(el));

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map((el) => new bootstrap.Tooltip(el));

    // Prevenir saltos en links vacíos
    document.querySelectorAll('[href="#"]').forEach(el => {
      el.addEventListener("click", (e) => e.preventDefault());
    });
  });

})();