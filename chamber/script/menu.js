document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("show");
});


const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Cambia el icono
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️"; // ícono para volver al claro
  } else {
    toggleBtn.textContent = "🌙"; // ícono para modo oscuro
  }

  // Guardar preferencia en localStorage
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// Aplicar tema guardado si hay
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
});
