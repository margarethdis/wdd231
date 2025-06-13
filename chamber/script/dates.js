// Fecha de última modificación
const lastModSpan = document.getElementById('lastModified');
lastModSpan.textContent = document.lastModified;

// Año actual
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.textContent = new Date().getFullYear();
