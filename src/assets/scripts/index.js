const $menuButton = document.querySelector('#menu-button');
const $nav = document.querySelector('#nav');

$menuButton.addEventListener('click', () => {
  $menuButton.classList.toggle('header__menu--active');
  $nav.classList.toggle('header__nav--active');
});
