const menu = document.getElementById('hamburguer-icon');
const nav = document.getElementById('nav__list');

menu.addEventListener('click', function() {
  nav.classList.toggle('reveal');
})