const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    const open = mobileMenu.style.display === "block";
    mobileMenu.style.display = open ? "none" : "block";
    burger.setAttribute("aria-expanded", String(!open));
  });

  document.querySelectorAll("#mobileMenu a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
