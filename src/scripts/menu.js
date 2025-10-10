const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', !isExpanded);
});
