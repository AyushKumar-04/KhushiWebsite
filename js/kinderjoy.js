/* ==========================================================================
   Kinder Joy — Premium Dark Luxury Unboxing
   ========================================================================== */

const kinderToys = [
  {
    name: 'With Flowers ✦',
    img: 'assets/images/khushi_flowers.jpg',
    note: 'You and flowers were made for each other. I knew that the moment I saw this photo.'
  },
  {
    name: 'Timeless ✦',
    img: 'assets/images/khushi_bw_glasses.jpg',
    note: 'Black and white captures something about you that colour somehow misses. Pure cinema.'
  },
  {
    name: 'Together ✦',
    img: 'assets/images/khushi_holding_hands.jpg',
    note: 'This is my favourite. Your hand in mine, hidden under the desk. I think about this a lot.'
  },
  {
    name: 'That Smile ✦',
    img: 'assets/images/khushi_red_shirt.jpg',
    note: 'The lights, the red, your shy smile — I don\'t have words for this one. Just a feeling.'
  },
  {
    name: 'Just Your Eyes ✦',
    img: 'assets/images/khushi_eyes_closeup.jpg',
    note: 'I could write poems about your eyes. Someday I will. For now — this.'
  },
  {
    name: 'A Soft Plushie 🧸',
    img: 'assets/images/plush_toy_real.png',
    note: 'A virtual soft toy for your study sessions. Ayush sends a warm hug along with it.'
  },
  {
    name: 'Radiant ✦',
    img: 'assets/images/khushi5.jpg',
    note: 'Some people light up a room without trying. You light up everything around you.'
  },
  {
    name: 'Flower Crown ✦',
    img: 'assets/images/khushi6.jpg',
    note: 'The purple filter, the pout — there\'s a natural magic in how effortlessly beautiful you are.'
  },
  {
    name: 'Window Gaze ✦',
    img: 'assets/images/khushi10.jpg',
    note: 'Looking out that window — I wondered what you were thinking. I hoped it was something good.'
  },
  {
    name: 'Just You ✦',
    img: 'assets/images/khushi1.jpg',
    note: 'Every time I look at this, I think — how did I get so lucky?'
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
    if (window.loveAudio) {
      if (eggState === 0) {
        window.loveAudio.playPop();
        eggState = 1;
        document.getElementById('egg-status').textContent = 'One more tap... ✨';
        egg.style.transform = 'scale(1.1) rotate(-5deg)';
        egg.style.filter = 'drop-shadow(0 0 30px rgba(201, 149, 108, 0.4))';
      } else if (eggState === 1) {
        window.loveAudio.playUnbox();
        eggState = 2;
        egg.style.display = 'none';
        revealSurprise();
      }
    } else {
      if (eggState === 0) {
        eggState = 1;
        document.getElementById('egg-status').textContent = 'One more tap... ✨';
        egg.style.transform = 'scale(1.1) rotate(-5deg)';
      } else if (eggState === 1) {
        eggState = 2;
        egg.style.display = 'none';
        revealSurprise();
      }
    }
  });

  if (unboxBtn) unboxBtn.addEventListener('click', resetKinderJoy);
}

function revealSurprise() {
  const revealBox = document.getElementById('toy-reveal');
  const toyObj = kinderToys[collectedCount % kinderToys.length];
  collectedCount++;

  document.getElementById('toy-img-element').src = toyObj.img;
  document.getElementById('toy-name').textContent = toyObj.name;
  document.getElementById('toy-note').textContent = `"${toyObj.note}"`;
  document.getElementById('collected-counter').textContent =
    `${collectedCount} of ${kinderToys.length} surprises opened ✦`;

  revealBox.style.display = 'block';
  if (window.loveAudio) window.loveAudio.playCheer();
  if (typeof triggerHeartBurst === 'function') triggerHeartBurst();
}

function resetKinderJoy() {
  if (window.loveAudio) window.loveAudio.playPop();
  eggState = 0;

  const egg = document.getElementById('kinder-egg');
  const revealBox = document.getElementById('toy-reveal');

  revealBox.style.display = 'none';
  egg.style.display = 'block';
  egg.style.transform = 'scale(1)';
  egg.style.filter = '';
  document.getElementById('egg-status').textContent = 'Tap the egg to unwrap ✨';
}

document.addEventListener('DOMContentLoaded', initKinderJoy);
