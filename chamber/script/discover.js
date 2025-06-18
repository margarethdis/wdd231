const container = document.querySelector("#discover-cards");

// Mostrar mensaje según última visita
const messageBox = document.getElementById("visitorMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  messageBox.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (daysPassed === 0) {
    messageBox.textContent = "Back so soon! Awesome!";
  } else if (daysPassed === 1) {
    messageBox.textContent = "You last visited 1 day ago.";
  } else {
    messageBox.textContent = `You last visited ${daysPassed} days ago.`;
  }
}
localStorage.setItem("lastVisit", now);

// Cargar tarjetas desde JSON
fetch("data/places.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(place => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
          <img src="${place.image}" alt="${place.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
      `;

      // Agregamos listener al botón para mostrar detalles
      const btn = card.querySelector("button");
      btn.addEventListener("click", () => {
        alert(place.details || "No additional details available.");
      });

      container.appendChild(card);
    });
  });
