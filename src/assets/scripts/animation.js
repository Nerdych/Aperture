import barba from '@barba/core';
import gsap from 'gsap';

const tl = gsap.timeline();

const $menuButton = document.querySelector('#menu-button');
const $nav = document.querySelector('#nav');

function pageAnimateIn(container, text) {
  const $loader = container.querySelector('.loader');
  const $loaderText = container.querySelector('.loader__text');
  $loaderText.innerHTML = text;

  return tl
    .add('start')
    .to(
      $loader,
      {
        duration: 0.5,
        width: '100%',
      },
      'start'
    )
    .fromTo(
      $loaderText,
      {
        transform: 'translate(-50%, 100px)',
        opacity: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        transform: 'translate(-50%, 0px)',
      },
      'start'
    )
    .to($loaderText, {
      duration: 0.5,
      opacity: 1,
      transform: 'translate(-50%, 0px)',
    });
}

async function pageAnimateOut(container, text) {
  const $loader = container.querySelector('.loader');
  const $loaderText = container.querySelector('.loader__text');
  $loaderText.innerHTML = text;

  await tl
    .add('end')
    .fromTo(
      $loaderText,
      {
        duration: 0.5,
        opacity: 1,
        transform: 'translate(-50%, 0px)',
      },
      {
        duration: 0.5,
        opacity: 0,
        transform: 'translate(-50%, -100px)',
      },
      'end'
    )
    .fromTo(
      $loader,
      {
        duration: 0.5,
        width: '100%',
        left: 0,
        right: '100%',
      },
      {
        width: '0',
        left: '100%',
        right: 0,
      },
      'end'
    )
    .to($loader, { duration: 0, left: 0, right: '100%' });
}

barba.init({
  preventRunning: true,
  transitions: [
    {
      name: 'opacity-transition',
      async leave(data) {
        $menuButton.classList.remove('header__menu--active');
        await pageAnimateIn(data.current.container, data.trigger.dataset.loader);
        $nav.classList.remove('header__nav--active');
        data.current.container.remove();
      },
      async enter(data) {
        await pageAnimateOut(data.next.container, data.trigger.dataset.loader);
      },
    },
  ],
});

barba.hooks.leave(() => {
  window.scrollTo(0, 0);
});
