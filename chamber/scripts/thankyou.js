// footer
document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#last-modified').textContent = document.lastModified;

// lee los parametros que vienen en la url (porque el form usa method="get")
const params = new URLSearchParams(window.location.search);

document.querySelector('#out-first-name').textContent = params.get('first-name');
document.querySelector('#out-last-name').textContent = params.get('last-name');
document.querySelector('#out-email').textContent = params.get('email');
document.querySelector('#out-phone').textContent = params.get('phone');
document.querySelector('#out-org-name').textContent = params.get('org-name');
document.querySelector('#out-timestamp').textContent = params.get('timestamp');