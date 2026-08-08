// scripts/discover.js
import discoverItems from "../data/discover.mjs";

// ===== Menú hamburguesa (igual que en las otras páginas) =====
const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
}

// ===== Footer: año y última modificación =====
const yearSpan = document.getElementById("current-year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const modifiedSpan = document.getElementById("last-modified");
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;

// ===== Construir las 8 tarjetas =====
const gallery = document.getElementById("discover-gallery");

function buildCard(item) {
  const card = document.createElement("div");
  card.classList.add("discover-card", `area-${item.id}`);

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button class="learn-more-btn" type="button" data-address="${item.address}">Learn More</button>
  `;

  return card;
}

if (gallery) {
  discoverItems.forEach((item) => {
    gallery.appendChild(buildCard(item));
  });

  // Botón "Learn More": abre la dirección en Google Maps
  gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("learn-more-btn")) {
      const address = event.target.dataset.address;
      const url = `https://www.google.com/maps/search/${encodeURIComponent(address)}`;
      window.open(url, "_blank", "noopener");
    }
  });
}

// ===== Mensaje de última visita (localStorage) =====
const visitorMessage = document.getElementById("visitor-message");

function getVisitMessage() {
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  localStorage.setItem("lastVisit", now);

  if (!lastVisit) {
    return "Welcome! Let us know if you have any questions.";
  }

  const msInDay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor((now - Number(lastVisit)) / msInDay);

  if (daysBetween < 1) {
    return "Back so soon! Awesome!";
  }

  const dayWord = daysBetween === 1 ? "day" : "days";
  return `You last visited ${daysBetween} ${dayWord} ago.`;
}

if (visitorMessage) {
  visitorMessage.textContent = getVisitMessage();
}