// ===================================================
// FOOTER: Año dinámico y Fecha de Última Modificación
// ===================================================

// Coloca el año actual en el span #current-year
const currentYearSpan = document.getElementById('current-year');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}

// Coloca la fecha de última modificación en el span #last-modified
const lastModifiedSpan = document.getElementById('last-modified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// ===================================================
// NAVEGACIÓN: Menú Hamburguesa (Móvil)
// ===================================================

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
  });
}