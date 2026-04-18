const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.className = isOpen
        ? "ri-close-line"
        : "ri-menu-5-line";
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-5-line")
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-img img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".header-content h2", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".header-socials li", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 900,
});

ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    interval: 600,
});
ScrollReveal().reveal(".contact-heading h1", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".contact-heading h2", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".contact-content h3", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});

ScrollReveal().reveal(".contact-form input", {
    ...scrollRevealOption,
    interval: 150,
    delay: 2000,
});

ScrollReveal().reveal(".contact-form button", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".contact-form textarea", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 1000,
});