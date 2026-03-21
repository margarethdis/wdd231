// 1. Selección de elementos del DOM
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// 2. Evento de clic para el menú hamburguesa
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
});

// 3. Fechas para el Footer
const yearSpan = document.querySelector("#currentyear");
const lastModif = document.querySelector("#lastModified");

const today = new Date();
yearSpan.innerHTML = today.getFullYear();
lastModif.innerHTML = `Last Modification: ${document.lastModified}`;