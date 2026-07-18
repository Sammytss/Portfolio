/**
 * Modal de demonstração: carrega a demo do projeto em um iframe,
 * exibindo um loader até o conteúdo terminar de carregar.
 */
let els = null;

export function initDemoModal() {
  const modal = document.getElementById("demoModal");
  if (!modal) return;

  els = {
    modal,
    frame: document.getElementById("demoFrame"),
    title: document.getElementById("demoTitle"),
    openLink: document.getElementById("demoOpen"),
    loader: document.getElementById("demoLoader"),
  };

  modal.querySelector(".demo-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen()) close();
  });
}

/** Abre o modal com a demo (iframe) do projeto informado. */
export function openDemo(project) {
  if (!project.demoUrl) return;

  els.title.textContent = project.title;
  els.openLink.href = project.demo || project.demoUrl;
  els.loader.style.display = "flex";
  els.frame.addEventListener("load", hideLoader, { once: true });
  els.frame.src = project.demoUrl;
  toggle(true);
}

function hideLoader() {
  els.loader.style.display = "none";
}

function close() {
  toggle(false);
  els.frame.src = "about:blank"; // interrompe a demo ao fechar
}

function isOpen() {
  return els?.modal.style.display === "flex";
}

function toggle(open) {
  els.modal.style.display = open ? "flex" : "none";
  els.modal.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
}
