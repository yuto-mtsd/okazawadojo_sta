const menuBtn = document.getElementById("menuBtn");
const globalNav = document.getElementById("globalNav");

if (menuBtn && globalNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
