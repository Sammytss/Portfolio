/**
 * Lightbox de galeria: exibe as imagens de um projeto em tela cheia,
 * com navegação por setas/teclado, contador e miniaturas.
 */
const state = { gallery: [], index: 0 };
let els = null;

export function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  els = {
    modal,
    image: document.getElementById("lightboxImage"),
    title: document.getElementById("lightboxTitle"),
    counter: document.getElementById("lightboxCounter"),
    thumbs: document.getElementById("thumbnailsContainer"),
  };

  modal.querySelector(".lightbox-close").addEventListener("click", close);
  modal.querySelector(".lightbox-nav.prev").addEventListener("click", () => changeSlide(-1));
  modal.querySelector(".lightbox-nav.next").addEventListener("click", () => changeSlide(1));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") changeSlide(1);
    else if (e.key === "ArrowLeft") changeSlide(-1);
  });
}

/** Abre o lightbox com a galeria do projeto informado. */
export function openLightbox(project) {
  state.gallery = project.gallery?.length ? project.gallery : [project.thumb];
  state.index = 0;
  els.title.textContent = project.title;
  renderThumbnails();
  showSlide(0);
  toggle(true);
}

function close() {
  toggle(false);
}

function isOpen() {
  return els?.modal.style.display === "flex";
}

function toggle(open) {
  els.modal.style.display = open ? "flex" : "none";
  els.modal.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
}

function changeSlide(step) {
  showSlide(state.index + step);
}

function showSlide(index) {
  const total = state.gallery.length;
  state.index = (index + total) % total; // navegação circular
  els.image.src = state.gallery[state.index];
  els.counter.textContent = `${state.index + 1} / ${total}`;
  els.thumbs.querySelectorAll("img").forEach((thumb, i) =>
    thumb.classList.toggle("is-active", i === state.index)
  );
}

function renderThumbnails() {
  els.thumbs.innerHTML = "";
  const single = state.gallery.length <= 1;
  els.thumbs.style.display = single ? "none" : "flex";
  if (single) return;

  state.gallery.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.classList.toggle("is-active", i === state.index);
    thumb.addEventListener("click", () => showSlide(i));
    els.thumbs.appendChild(thumb);
  });
}
