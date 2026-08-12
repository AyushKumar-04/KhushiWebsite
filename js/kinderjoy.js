/* ==========================================================================
   Khushi's Love Sanctuary - Kinder Joy Surprise Unboxing
   Unwrapping Kinder Joy to Collect All 10 of Khushi's Photos & Soft Toys
   ========================================================================== */

const kinderToys = [
  {
    name: 'Soft Plush Teddy Bear 🧸',
    img: 'assets/images/plush_toy_real.png',
    note: 'A soft mini plushie to keep you company during late-night college study sessions! Ayush sends you a huge warm hug!'
  },
  {
    name: 'Biker Queen Khushi 🏍️',
    img: 'assets/images/khushi7.jpg',
    note: 'Your awesome helmet selfie with the pink bow! Can\'t wait for our sunset highway ride!'
  },
  {
    name: 'Flower Pout Selfie 🌸',
    img: 'assets/images/khushi6.jpg',
    note: 'That cute purple flower filter and pout! 2 weeks in and Ayush is completely head-over-heels!'
  },
  {
    name: 'Khushi & Puppy Cute Memory 🐶',
    img: 'assets/images/khushi4.jpg',
    note: 'Your adorable puppy cuddling picture! Pink bows, cute glasses & pure cuteness.'
  },
  {
    name: 'Khushi & Kitty Snuggle Time 🐱',
    img: 'assets/images/khushi3.jpg',
    note: 'Your cozy cat cuddle photo! This picture always puts a huge smile on Ayush\'s face!'
  },
  {
    name: 'Daily Cute Moment 🥛',
    img: 'assets/images/khushi8.jpg',
    note: '"Doodh lene jaana h btw" - You make everyday things so fun & charming!'
  },
  {
    name: 'Black & White Grace 🖤',
    img: 'assets/images/khushi9.jpg',
    note: 'Your elegant black and white portrait. Natural beauty at its absolute finest!'
  },
  {
    name: 'Road Trip Window Gaze 🚗',
    img: 'assets/images/khushi10.jpg',
    note: 'Looking out the car window in that gorgeous pink top. Every day with you is an adventure!'
  },
  {
    name: 'Khushi Queen of Style 👑',
    img: 'assets/images/khushi1.jpg',
    note: 'Your super stylish picture! 14 days ago we met, and Ayush was instantly starstruck.'
  },
  {
    name: 'Khushi Heritage Smile 🏛️',
    img: 'assets/images/khushi5.jpg',
    note: 'Your radiant smile at the heritage monuments! Your laugh is Ayush\'s favorite sound.'
  }
];

let eggState = 0;
let collectedCount = 0;

function initKinderJoy() {
  const egg = document.getElementById('kinder-egg');
  const revealBox = document.getElementById('toy-reveal');
  const unboxBtn = document.getElementById('unbox-again-btn');

  if (!egg) return;

  egg.addEventListener('click', () => {
    if (eggState === 0) {
      window.loveAudio.playPop();
      eggState = 1;
      document.getElementById('egg-status').textContent = "✨ Tap to Crack Open Kinder Joy! ✨";
      egg.style.transform = "scale(1.08) rotate(-4deg)";
    } else if (eggState === 1) {
      window.loveAudio.playUnbox();
      eggState = 2;
      egg.style.display = "none";
      revealSurprise();
    }
  });

  if (unboxBtn) {
    unboxBtn.addEventListener('click', resetKinderJoy);
  }
}

function revealSurprise() {
  const revealBox = document.getElementById('toy-reveal');
  const toyObj = kinderToys[collectedCount % kinderToys.length];
  collectedCount++;

  document.getElementById('toy-img-element').src = toyObj.img;
  document.getElementById('toy-name').textContent = toyObj.name;
  document.getElementById('toy-note').textContent = `"${toyObj.note}"`;
  document.getElementById('collected-counter').textContent = `Surprises Unboxed: ${collectedCount} / ${kinderToys.length} 🎁`;

  revealBox.style.display = 'block';
  window.loveAudio.playCheer();
  triggerHeartBurst();
}

function resetKinderJoy() {
  window.loveAudio.playPop();
  eggState = 0;
  const egg = document.getElementById('kinder-egg');
  const revealBox = document.getElementById('toy-reveal');

  revealBox.style.display = 'none';
  egg.style.display = 'block';
  egg.style.transform = 'scale(1)';
  document.getElementById('egg-status').textContent = 'Tap Kinder Joy to Unwrap';
}

document.addEventListener('DOMContentLoaded', initKinderJoy);
