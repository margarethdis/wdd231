//ano actual para el copyrigh
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

//fecha y hora de la ultima actualizacion

const updateElement = document.getElementById("last-update");
const lastUpdatedDate = new Date();
const date = lastUpdatedDate.toLocaleDateString();
const time = lastUpdatedDate.toLocaleTimeString();
updateElement.textContent = `Last Update: ${date} ${time}`;

//alt 96 para `comillas ivertidas`

