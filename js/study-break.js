/* ==========================================================================
   Khushi's Love Sanctuary - College Chill Zone & Stress Buster
   Deep Breathing Circle, Virtual Hug & Ayush's College Pep Talks
   ========================================================================== */

const pepTalks = [
  "Hey Khushi! You are super smart and you've got this exam totally covered! Ayush is super proud of you!",
  "Take a deep breath! College marks don't define how amazing you are. Remember: Momos & garlic bread are waiting after study time!",
  "Whenever college gets overwhelming, close your eyes and remember Ayush is sending you the biggest virtual bear hug!",
  "You're 20, brilliant, beautiful, and capable of achieving anything! Go slay that assignment, queen!"
];

let breathing = false;
let breatheTimer = null;

function initStudyBreak() {
  const breatheCircle = document.getElementById('breathe-circle');
  const breatheBtn = document.getElementById('btn-breathe');
  const hugBtn = document.getElementById('btn-hug');
  const pepBtn = document.getElementById('btn-pep');
  const pepText = document.getElementById('pep-talk-text');

  if (breatheBtn && breatheCircle) {
    breatheBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      if (!breathing) {
        breathing = true;
        breatheBtn.textContent = 'Pause Breathing 🛑';
        startBreatheAnimation(breatheCircle);
      } else {
        breathing = false;
        breatheBtn.textContent = 'Start 1-Min Breathe 🧘';
        breatheCircle.classList.remove('expanding');
        breatheCircle.textContent = 'Breathe In...';
        if (breatheTimer) clearInterval(breatheTimer);
      }
    });
  }

  if (hugBtn) {
    hugBtn.addEventListener('click', () => {
      window.loveAudio.playCheer();
      triggerHeartBurst();
      alert("🧸 *SQUEEZE!* You just squeezed your virtual soft plushie! Ayush's love surrounds you right now! ❤️");
    });
  }

  if (pepBtn && pepText) {
    pepBtn.addEventListener('click', () => {
      window.loveAudio.playSparkle();
      const randomTalk = pepTalks[Math.floor(Math.random() * pepTalks.length)];
      pepText.textContent = `"${randomTalk}"`;
      triggerHeartBurst();
    });
  }
}

function startBreatheAnimation(circle) {
  let state = 0; // 0 = breathe in, 1 = hold, 2 = breathe out
  const step = () => {
    if (!breathing) return;
    if (state === 0) {
      circle.textContent = 'Breathe In 🌸...';
      circle.classList.add('expanding');
      state = 1;
    } else if (state === 1) {
      circle.textContent = 'Hold ❤️...';
      state = 2;
    } else {
      circle.textContent = 'Breathe Out 🍃...';
      circle.classList.remove('expanding');
      state = 0;
    }
  };

  step();
  breatheTimer = setInterval(step, 3500);
}

document.addEventListener('DOMContentLoaded', initStudyBreak);
