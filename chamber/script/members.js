const url = 'data/members.json';
const container = document.getElementById('membersContainer');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

async function getMembers() {
  try {
    const response = await fetch(url);
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error cargando datos:', error);
  }
}

function displayMembers(members) {
  container.innerHTML = ''; // Limpia contenido previo
  members.forEach((member) => {
    const card = document.createElement('section');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="images/${member.image || 'placeholder.jpg'}" alt="${member.name}">
      <div>
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">🌐 Visitar sitio</a>
        <p class="level">Nivel: ${getMembershipLevel(member.membership)}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Función para traducir nivel de membresía a texto con emoji
function getMembershipLevel(level) {
  if (level === 3) return '🌟 Oro';
  if (level === 2) return '🥈 Plata';
  return '🧱 Básico';
}

// Cambiar a vista Grid
function showGrid() {
  container.classList.add('grid-view');
  container.classList.remove('list-view');
}

// Cambiar a vista Lista
function showList() {
  container.classList.add('list-view');
  container.classList.remove('grid-view');
}

// Event listeners para botones
gridBtn.addEventListener('click', showGrid);
listBtn.addEventListener('click', showList);

// Inicialización
getMembers();
showGrid(); // Mostrar inicialmente vista grid
