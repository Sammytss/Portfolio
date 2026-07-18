/**
 * Seção de projetos: renderiza os cards a partir dos dados e conecta
 * as interações (galeria, demo e filtros por categoria).
 */
import { projects } from "../data/projects.js";
import { openLightbox } from "./lightbox.js";
import { openDemo } from "./demo-modal.js";

const ICON = {
  github: '<i class="fa-brands fa-github"></i>',
  play: '<i class="fa-solid fa-circle-play"></i>',
  zoom: '<i class="fa-solid fa-magnifying-glass-plus"></i>',
};

export function initProjects() {
  const grid = document.getElementById("projectsGrid");
  const filters = document.getElementById("projectFilters");
  if (!grid) return;

  renderCards(grid);
  if (filters) initFilters(filters, grid);
}

function cardTemplate(project, index) {
  const stack = project.stack
    .map((tech) => `<span class="tech-pill">${tech}</span>`)
    .join("");

  const demoButton = project.demoUrl
    ? `<button class="card-link is-primary" data-action="demo">${ICON.play} Ver demo</button>`
    : "";

  const repoLink = project.repo
    ? `<a class="card-link" href="${project.repo}" target="_blank" rel="noopener" data-action="repo">${ICON.github} Código</a>`
    : "";

  return `
    <article class="project-card" data-index="${index}" data-tags="${project.tags.join(" ")}"
             tabindex="0" role="button" aria-label="Abrir galeria de ${project.title}">
      <div class="card-thumb">
        <img src="${project.thumb}" alt="Prévia de ${project.title}" loading="lazy" class="fit-${project.fit || "cover"}">
        <span class="card-thumb-hint">${ICON.zoom} Ver galeria</span>
      </div>
      <div class="card-body">
        <span class="card-category">${project.category}</span>
        <h5 class="card-title">${project.title}</h5>
        <p class="card-desc">${project.desc}</p>
        <div class="card-stack">${stack}</div>
      </div>
      <div class="card-footer">${demoButton}${repoLink}</div>
    </article>`;
}

function renderCards(grid) {
  grid.innerHTML = projects.map(cardTemplate).join("");

  grid.querySelectorAll(".project-card").forEach((card) => {
    const project = projects[Number(card.dataset.index)];

    card.addEventListener("click", (e) => {
      const action = e.target.closest("[data-action]")?.dataset.action;
      if (action === "demo") {
        e.stopPropagation();
        openDemo(project);
      } else if (action !== "repo") {
        // Clique fora dos botões abre a galeria; o link "Código" segue normal.
        openLightbox(project);
      }
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(project);
      }
    });
  });
}

function initFilters(filters, grid) {
  filters.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-btn");
    if (!button) return;

    filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const visible = filter === "all" || card.dataset.tags.split(" ").includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  });
}
