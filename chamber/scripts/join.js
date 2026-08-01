// timestamp oculto: llena la fecha y hora en que se cargo la pagina
document.querySelector('#timestamp').value = new Date().toLocaleString();

// footer: año actual y ultima modificacion (igual que en directory.js)
document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;

// modales: un solo listener que sirve para las 4 tarjetas
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const modalId = link.getAttribute('data-modal');
    const modal = document.querySelector(`#${modalId}`);
    modal.showModal();
  });
});

// boton close de cada modal
const closeButtons = document.querySelectorAll('.close-modal');

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

// animacion de entrada de las tarjetas al cargar la pagina
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.opacity = 0;
  setTimeout(() => {
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    card.style.opacity = 1;
    card.style.transform = 'translateY(0)';
  }, index * 150);
});