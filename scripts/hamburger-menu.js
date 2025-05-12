const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    
    // Cambia el ícono del botón
    if (navMenu.classList.contains("show")) {
        hamburger.innerHTML = "&times;"; // ×
    } else {
        hamburger.innerHTML = "&#9776;"; // ☰
    }
});

