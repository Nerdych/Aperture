import barba from '@barba/core';
import gsap from 'gsap';

const tl = gsap.timeline();

function pageAnimateIn(container) {
  return tl
    .to(container.querySelector('.circle'), {
      duration: 0.5,
      width: '100%',
      fontSize: '60px',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    })
    .to(container.querySelector('.circle'), {
      duration: 3,
    });
}

function animateContent(container) {
  return tl
    .fromTo(
      container.querySelector('h1'),
      {
        translateX: -100,
        opacity: 0,
      },
      {
        translateX: 0,
        opacity: 1,
      }
    )
    .fromTo(
      container.querySelector('p'),
      {
        translateY: 40,
        opacity: 0,
        stagger: 0.2,
      },
      {
        translateY: 0,
        opacity: 1,
        stagger: 0.2,
      }
    );
}

async function pageAnimateOut(container) {
  await tl.fromTo(
    container.querySelector('.circle'),
    {
      duration: 0.5,
      width: '100%',
      fontSize: '60px',
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    },
    {
      width: '0',
      fontSize: '0px',
      clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0 100%)',
    }
  );
}

barba.init({
  transitions: [
    {
      name: 'opacity-transition',
      async leave(data) {
        await pageAnimateIn(data.current.container);
        data.current.container.remove();
      },
      async enter(data) {
        await pageAnimateOut(data.next.container);
        await animateContent(data.next.container);
      },
      async once(data) {
        await animateContent(data.next.container);
      },
    },
  ],
});
