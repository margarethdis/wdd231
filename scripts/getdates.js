// Rellenar el año actual
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Rellenar la fecha de última modificación
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;