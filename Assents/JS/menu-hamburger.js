function alterarVisual() {
    const menu = document.querySelector("nav");
    const classe = window.matchMedia("(max-width: 576px)").matches
        ? "menu-aberto"
        : "menu-oculto";
    menu.classList.toggle(classe);
}
