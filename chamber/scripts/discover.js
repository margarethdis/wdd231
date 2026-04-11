import { places } from '../data/places.mjs';

// 1. Mensaje de Visitas (LocalStorage)
const messageElement = document.querySelector("#visitor-message");
const lastVisit = localStorage.getItem("lastVisitDate");
const today = Date.now();
const msPerDay = 1000 * 60 * 60 * 24;

if (messageElement) {
    if (!lastVisit) {
        messageElement.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSince = Math.floor((today - lastVisit) / msPerDay);
        if (daysSince < 1) {
            messageElement.textContent = "Back so soon! Awesome!";
        } else {
            messageElement.textContent = `You last visited ${daysSince} ${daysSince === 1 ? 'day' : 'days'} ago.`;
        }
    }
    localStorage.setItem("lastVisitDate", today);
}

// 2. Generar las Tarjetas (Cards)
const gridContainer = document.querySelector(".discover-grid");

if (gridContainer && places) {
    places.forEach((place, index) => {
        const card = document.createElement("section");
        card.className = "item-card";
        // Esto asigna card1, card2, etc. para el Grid Areas del CSS
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
            <h2>${place.name}</h2>
            <figure>
                <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <button>Learn More</button>
        `;
        gridContainer.appendChild(card);
    });
}