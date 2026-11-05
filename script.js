 // 1. Мобильное меню
const menuToggle = document.querySelector("#menuToggle");
const primaryNav = document.querySelector("#primaryNav");

menuToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("open");

  const isOpen = primaryNav.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

primaryNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    primaryNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});


// 2. Переключение темы
const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");
  themeToggle.textContent = isDark ? "☼" : "◐";
});


// 3. Кнопка возврата наверх
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 450);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});