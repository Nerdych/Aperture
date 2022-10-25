import gsap from 'gsap';

const $cursor = document.querySelector('#cursor');
const $aura = document.querySelector('#aura');
const $body = document.querySelector('body');

let cursorX = 0;
let cursorY = 0;
let auraX = 0;
let auraY = 0;

function mouseMove(e) {
  cursorX = e.clientX;
  cursorY = e.clientY;

  if (e.target.closest('a')) {
    $cursor.classList.add('hidden');
    $aura.classList.add('expand');
  } else {
    $cursor.classList.remove('hidden');
    $aura.classList.remove('expand');
  }
}

gsap.to(null, {
  duration: 0.01,
  repeat: -1,
  onRepeat: () => {
    auraX += (cursorX - auraX) / 5;
    auraY += (cursorY - auraY) / 5;

    gsap.set($cursor, {
      css: {
        left: cursorX,
        top: cursorY,
      },
    });

    gsap.set($aura, {
      css: {
        left: auraX,
        top: auraY,
      },
    });
  },
});

window.addEventListener('mousemove', mouseMove);

$body.addEventListener('mouseout', () => {
  $cursor.classList.add('hidden');
  $aura.classList.add('expand');
});

$body.addEventListener('mouseover', () => {
  $cursor.classList.remove('hidden');
  $aura.classList.remove('expand');
});
