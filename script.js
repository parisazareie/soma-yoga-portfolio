
const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

let currentLanguage = "en";

function changeLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
  document.body.dir = language === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en], [data-fa]").forEach((element) => {
    const text = element.dataset[language];

    if (text !== undefined) {
      element.textContent = text;
    }
  });

  document.querySelectorAll("[data-en-html], [data-fa-html]").forEach((element) => {
    const html = element.dataset[`${language}Html`];

    if (html !== undefined) {
      element.innerHTML = html;
    }
  });

  document.querySelectorAll("[data-en-placeholder], [data-fa-placeholder]").forEach((element) => {
    const placeholder = element.dataset[`${language}Placeholder`];

    if (placeholder !== undefined) {
      element.placeholder = placeholder;
    }
  });

  languageToggle.textContent = language === "en" ? "فارسی" : "English";

  menuToggle.setAttribute(
    "aria-label",
    language === "en" ? "Open navigation" : "باز کردن منو"
  );

  document.title =
    language === "en"
      ? "SOMA Yoga Studio | Move With Intention"
      : "استودیو یوگای سوما | حرکت آگاهانه";

  formMessage.textContent = "";
}

languageToggle.addEventListener("click", () => {
  changeLanguage(currentLanguage === "en" ? "fa" : "en");
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  formMessage.textContent =
    currentLanguage === "en"
      ? "Thank you! This is a portfolio demo, so your message has not been sent."
      : "ممنون! این فرم نمایشی است و پیام شما ارسال نشده است.";

  contactForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();

changeLanguage("en");
