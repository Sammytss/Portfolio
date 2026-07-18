/**
 * Ponto de entrada do portfólio.
 * Inicializa cada módulo de interface de forma independente.
 */
import { initNavbar } from "./modules/navbar.js";
import { initLightbox } from "./modules/lightbox.js";
import { initDemoModal } from "./modules/demo-modal.js";
import { initProjects } from "./modules/project-cards.js";

function init() {
  initNavbar();
  initLightbox();
  initDemoModal();
  initProjects();
}

// Scripts type="module" já são adiados (defer), mas mantemos a checagem
// por segurança caso o módulo seja carregado de outra forma.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
