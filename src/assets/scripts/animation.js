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
    .to($loader, {
      duration: 0.5,
      width: '100%',
    })
    .to($loaderText, {
      duration: 0.5,
      delay: 0.25,
      opacity: 1,
      transform: 'translate(-50%, -50%)',
    })
    .to($loaderText, {
      duration: 0.5,
      delay: 0.25,
      opacity: 1,
      transform: 'translate(-50%, -50%)',
    })
    .to($loaderText, {
      duration: 0.5,
      delay: 0.25,
      opacity: 0,
      transform: 'translate(-50%, -150%)',
    });
}

async function pageAnimateOut(container) {
  await tl.fromTo(
    container.querySelector('.loader'),
    {
      duration: 0.5,
      width: '100%',
    },
    {
      width: '0',
    }
  );
}

barba.init({
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
        await pageAnimateOut(data.next.container);
      },
    },
  ],
});
