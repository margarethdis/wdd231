const container = document.getElementById('adoptable-cats');

fetch('data/kittens.json')
  .then((response) => response.json())
  .then((kittens) => {
    kittens.forEach((kitten) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${kitten.image}" alt="${kitten.name}" class="kitten-img">
        <h2>${kitten.name}</h2>
        <h4>${kitten.breed} — ${kitten.age}</h4>
        <p>${kitten.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.error('Error loading kittens:', error);
    container.innerHTML = '<p>Error loading kittens. Please try again later.</p>';
  });

  