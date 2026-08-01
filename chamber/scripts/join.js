// ===== Timestamp: guarda fecha/hora actual en el campo oculto al cargar el formulario =====
const timestampField = document.querySelector('#timestamp');
if (timestampField) {
  timestampField.value = new Date().toISOString();
}

// ===== Nav toggle (hamburguesa) - igual que en directory.js =====
const navToggle = document.querySelector('#nav-toggle');
const mainNav = document.querySelector('#main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ===== Modales de membresía =====
const modalButtons = document.querySelectorAll('.modal-btn');
modalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.querySelector(`#${modalId}`);
    if (modal) {
      modal.showModal();
    }
  });
});

const closeButtons = document.querySelectorAll('.modal-close');
closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

// ===== Footer: última modificación y año actual =====
const lastModifiedSpan = document.querySelector('#last-modified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const currentYearSpan = document.querySelector('#current-year');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}