// directory.js
// Carga los datos de los miembros desde members.json usando fetch + async/await
// y controla el cambio entre vista de tarjetas (grid) y vista de lista.

const memberListEl = document.querySelector("#member-list");
const gridBtn = document.querySelector("#grid-view-btn");
const listBtn = document.querySelector("#list-view-btn");

// Nombres de las insignias segun el nivel de membresia
const membershipLabels = {
  1: { text: "Miembro", className: "badge--member" },
  2: { text: "Plata", className: "badge--silver" },
  3: { text: "Oro", className: "badge--gold" }
};

// Solicita el archivo JSON de miembros
async function getMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    memberListEl.innerHTML = `<p>No se pudo cargar el directorio de miembros. Intenta de nuevo mas tarde.</p>`;
    console.error("Error al obtener members.json:", error);
  }
}

// Construye y muestra las tarjetas de cada miembro
function displayMembers(members) {
  memberListEl.innerHTML = "";

  members.forEach((member) => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    const badgeInfo = membershipLabels[member.membershipLevel] || membershipLabels[1];

    card.innerHTML = `
      <img src="images/${member.image}" alt="Logotipo de ${member.name}" loading="lazy"
           onerror="this.src='https://placehold.co/300x200?text=${encodeURIComponent(member.name)}'">
      <div class="member-card__body">
        <span class="badge ${badgeInfo.className}">${badgeInfo.text}</span>
        <h2 class="member-card__name">${member.name}</h2>
        <p class="member-card__meta">${member.category}</p>
        <p class="member-card__meta">${member.address}</p>
        <p class="member-card__meta">${member.phone}</p>
        <p class="member-card__meta">${member.description}</p>
        <a class="member-card__link" href="${member.website}" target="_blank" rel="noopener">Visitar sitio web</a>
      </div>
    `;

    memberListEl.appendChild(card);
  });
}

// Alterna entre vista de tarjetas (grid) y vista de lista
function setView(view) {
  if (view === "list") {
    memberListEl.classList.add("list-view");
    listBtn.classList.add("is-active");
    gridBtn.classList.remove("is-active");
  } else {
    memberListEl.classList.remove("list-view");
    gridBtn.classList.add("is-active");
    listBtn.classList.remove("is-active");
  }
}

gridBtn.addEventListener("click", () => setView("grid"));
listBtn.addEventListener("click", () => setView("list"));

// Menu de navegacion responsivo (hamburguesa)
const navToggle = document.querySelector("#nav-toggle");
const mainNav = document.querySelector("#main-nav");

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Anio de copyright y fecha de ultima modificacion en el footer
document.querySelector("#current-year").textContent = new Date().getFullYear();
document.querySelector("#last-modified").textContent = document.lastModified;

// Inicia la carga de miembros
getMembers();