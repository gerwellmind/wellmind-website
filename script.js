const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
 if(event.target.closest('a')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }
});
document.addEventListener('keydown', event => {
 if(event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.focus(); }
});
document.getElementById('year').textContent = new Date().getFullYear();
