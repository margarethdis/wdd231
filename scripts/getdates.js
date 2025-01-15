// Obtener el año actual y asignarlo al span con id "currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Obtener la última fecha de modificación del documento y asignarla al párrafo con id "lastModified"
document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;
