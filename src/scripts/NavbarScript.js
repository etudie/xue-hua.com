const navbar = document.getElementById("navbar-bar");
function updateNavbar() {
  if (window.scrollY > 0) {
    navbar?.classList.add("bg-base-100", "shadow-sm");
  } else {
    navbar?.classList.remove("bg-base-100", "shadow-sm");
  }
}
updateNavbar();
window.addEventListener("scroll", updateNavbar, { passive: true });

const drawer = document.getElementById("nav-drawer");
if (drawer instanceof HTMLInputElement) {
  document.querySelectorAll("[data-close-drawer]").forEach((el) => {
    el.addEventListener("click", () => {
      drawer.checked = false;
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") drawer.checked = false;
  });
}
