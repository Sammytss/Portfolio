/**
 * Menu de navegação (hambúrguer no mobile).
 * Alterna a visibilidade da lista de links e os ícones de abrir/fechar.
 */
export function initNavbar() {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".humburger");
  if (!nav || !hamburger) return;

  const [barsIcon, closeIcon] = hamburger.querySelectorAll("i");

  const setOpen = (open) => {
    nav.setAttribute("data-visible", String(open));
    barsIcon?.setAttribute("data-visible", String(!open));
    closeIcon?.setAttribute("data-visible", String(open));
  };

  hamburger.addEventListener("click", () => {
    setOpen(nav.getAttribute("data-visible") !== "true");
  });

  // Fecha o menu ao clicar em um link (melhor UX no mobile).
  nav.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => setOpen(false))
  );
}
