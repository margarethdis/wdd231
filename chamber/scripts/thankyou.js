// ===== Lee los parámetros enviados por el formulario (method="get") y los muestra =====
const params = new URLSearchParams(window.location.search);

function showParam(id, key, fallback = 'Not provided') {
  const el = document.querySelector(`#${id}`);
  if (el) {
    el.textContent = params.get(key) || fallback;
  }
}

showParam('out-firstName', 'firstName');
showParam('out-lastName', 'lastName');
showParam('out-email', 'email');
showParam('out-mobilePhone', 'mobilePhone');
showParam('out-businessName', 'businessName');

const rawTimestamp = params.get('timestamp');
const timestampEl = document.querySelector('#out-timestamp');
if (timestampEl) {
  timestampEl.textContent = rawTimestamp
    ? new Date(rawTimestamp).toLocaleString()
    : 'Not provided';
}

// ===== Nav toggle =====
const navToggle = document.querySelector('#nav-toggle');
const mainNav = document.querySelector('#main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// ===== Footer: última modificación y año actual =====
const lastModifiedSpan = document.querySelector('#last-modified');
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

const currentYearSpan = document.querySelector('#current-year');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}