/* ==========================================================================
   Chill Zone — Premium Dark Luxury Update
   ========================================================================== */

const pepTalks = [
  "I know the assignment is hard. I know college can feel like too much sometimes. But you handle things with a grace I genuinely admire — you'll get through this, and I'll be right here.",
  "Take a breath. Close your eyes for a moment. When you open them, remember that someone out there is thinking of you and hoping your day gets easier.",
  "You are smarter than you give yourself credit for. Seriously. The way you think, the way you talk about things — you're going to be just fine. More than fine.",
  "Even on the days when nothing feels right, you still show up. That alone is everything. I'm proud of you — more than you know."
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
      if (window.loveAudio) window.loveAudio.playPop();
      if (!breathing) {
        breathing = true;
        breatheBtn.innerHTML = '<span>Stop ·</span>';
        startBreatheAnimation(breatheCircle);
      } else {
        breathing = false;
        breatheBtn.innerHTML = '<span>Start Breathing</span>';
        breatheCircle.classList.remove('expanding');
        breatheCircle.textContent = 'Breathe in...';
        if (breatheTimer) clearInterval(breatheTimer);
      }
    });
  }

  if (hugBtn) {
    hugBtn.addEventListener('click', () => {
      if (window.loveAudio) window.loveAudio.playCheer();
      if (typeof triggerHeartBurst === 'function') triggerHeartBurst();

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999999;
        background: rgba(8, 8, 12, 0.9);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        animation: fadeIn 0.3s ease;
      `;
      overlay.innerHTML = `
        <div style="text-align:center; padding: 40px; max-width: 460px;">
          <div style="font-size: 3.5rem; margin-bottom: 20px;">🫂</div>
          <p style="font-family: 'Great Vibes', cursive; font-size: 2.2rem; color: #e8b891; margin-bottom: 14px;">Virtual Hug Delivered</p>
          <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.05rem; color: #e8e0d8; line-height: 1.8; margin-bottom: 32px;">
            "Imagine the warmest hug right now. That's from me.<br>
            I hope it reaches you somehow."
          </p>
          <button onclick="this.parentElement.parentElement.remove()" style="background: linear-gradient(135deg, #c9956c, #c47a7a); color: #08080c; border: none; padding: 12px 28px; border-radius: 9999px; font-size: 0.8rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; font-weight: 600;">
            Thank you ✦
          </button>
        </div>
      `;
      document.body.appendChild(overlay);
    });
  }

  if (pepBtn && pepText) {
    pepBtn.addEventListener('click', () => {
      if (window.loveAudio) window.loveAudio.playSparkle();
      const randomTalk = pepTalks[Math.floor(Math.random() * pepTalks.length)];
      pepText.style.opacity = '0';
      pepText.style.transform = 'translateY(8px)';
      pepText.style.transition = 'all 0.4s ease';
      setTimeout(() => {
        pepText.textContent = `"${randomTalk}"`;
        pepText.style.opacity = '1';
        pepText.style.transform = 'translateY(0)';
      }, 200);
      if (typeof triggerHeartBurst === 'function') triggerHeartBurst();
    });
  }
}

function startBreatheAnimation(circle) {
  let state = 0;
  const step = () => {
    if (!breathing) return;
    if (state === 0) {
      circle.textContent = 'Breathe in...';
      circle.classList.add('expanding');
      state = 1;
    } else if (state === 1) {
      circle.textContent = 'Hold...';
      state = 2;
    } else {
      circle.textContent = 'Breathe out...';
      circle.classList.remove('expanding');
      state = 0;
    }
  };
  step();
  breatheTimer = setInterval(step, 3500);
}

document.addEventListener('DOMContentLoaded', initStudyBreak);
