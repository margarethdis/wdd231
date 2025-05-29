const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('primaryNav');

menuBtn.addEventListener('click', () => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !isExpanded);
  nav.classList.toggle('open');
});
