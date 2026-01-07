// Mobile menu toggle
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
    });
});

// Simple contact form handler (front-end only)
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
        return;
    }

    // Here you can integrate real backend / Firebase later
    formStatus.textContent = "Thank you! Your message has been sent (demo).";
    formStatus.style.color = "green";
    contactForm.reset();
});
