const membersUrl = 'data/members.json';

async function fetchSpotlights() {
  try {
    const response = await fetch(membersUrl);
    if (response.ok) {
      const data = await response.json();
      
      // Leemos el arreglo interno "members"
      const membersList = data.members;

      // Filtramos miembros Gold (3) y Silver (2)
      const qualified = membersList.filter(m => 
        m.membershipLevel === 2 || m.membershipLevel === 3
      );

      // Desordenamos aleatoriamente
      const shuffled = qualified.sort(() => 0.5 - Math.random());

      // Seleccionamos entre 2 y 3 miembros
      const selected = shuffled.slice(0, 3);

      renderSpotlights(selected);
    }
  } catch (error) {
    console.error('Error fetching spotlights:', error);
  }
}

function renderSpotlights(members) {
  const container = document.getElementById('spotlight-cards');
  if (!container) return;
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    
    const levelText = member.membershipLevel === 3 ? 'Gold' : 'Silver';

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Membership:</strong> ${levelText}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

fetchSpotlights();