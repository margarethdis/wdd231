const url = "data/members.json";
const cards = document.querySelector("#directory-cards");

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    cards.innerHTML = ""; // Limpiar el contenedor antes de llenar

    members.forEach((member) => {
        // Crear elementos
        let card = document.createElement("section");
        let portrait = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let level = document.createElement("p");

        // Llenar contenido
        name.textContent = member.name;
        address.textContent = member.addresses;
        phone.textContent = member.phone;
        level.textContent = `Membership: ${member.membershipLevel}`;
        
        website.textContent = "Visit Website";
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");

        portrait.setAttribute("src", member.image);
        portrait.setAttribute("alt", `Logo of ${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "150");

        // Agregar elementos a la tarjeta
        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        // Agregar la tarjeta al contenedor principal
        cards.appendChild(card);
    });
};

getMemberData();

// --- Lógica para alternar Grid/List (AÑADIR ESTO AL FINAL) ---

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory-cards");

// Escuchar el clic en el botón Grid
gridbutton.addEventListener("click", () => {
    // Añadir clase 'grid', quitar clase 'list'
    display.classList.add("grid");
    display.classList.remove("list");
});

// Escuchar el clic en el botón Lista
listbutton.addEventListener("click", () => {
    // Añadir clase 'list', quitar clase 'grid'
    display.classList.add("list");
    display.classList.remove("grid");
});