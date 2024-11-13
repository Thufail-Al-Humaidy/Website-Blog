document.addEventListener("alpine:init", () => {
  Alpine.data("dropdown", () => ({
    open: false,
  }));

  Alpine.data("menu", () => ({
    menuOpen: false,
  }));
});
