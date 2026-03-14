// 1. Set the current year in the footer
const yearSpan = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// 2. Set the last modified date in the footer
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = `Last Modification: ${document.lastModified}`;

// 3. Hamburger Menu Toggle (Mobile View)
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

// 4. Optional: Add an "active" class to the current menu item
const links = document.querySelectorAll(".navigation li a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});