const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}

menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));

document.querySelectorAll('#nav a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.getElementById('year').textContent = new Date().getFullYear();
