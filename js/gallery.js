/* ==========================================================================
   Gallery — Premium Dark Luxury Photo Cards
   ========================================================================== */

const khushiPhotos = [
  {
    id: 1,
    src: 'assets/images/khushi_flowers.jpg',
    tag: 'With Flowers ✦',
    caption: 'Blooming',
    compliment:
      'Even the flowers seem to lean toward you. This picture — you with that bouquet, those eyes looking sideways — I could stare at it for hours and still feel something new.',
    rating: '∞ / 10 — Absolutely Ethereal'
  },
  {
    id: 2,
    src: 'assets/images/khushi_bw_glasses.jpg',
    tag: 'Black & White ✦',
    caption: 'Timeless',
    compliment:
      'Black and white was made for you. You have this quiet intensity that makes people stop and look twice. Classic, mysterious, and completely breathtaking.',
    rating: '10 / 10 — Pure Cinema'
  },
  {
    id: 3,
    src: 'assets/images/khushi_red_shirt.jpg',
    tag: 'Night Out ✦',
    caption: 'That Smile',
    compliment:
      'The lights in the background, the red, that shy little smile you make — I don\'t know what to say. You make an ordinary night look like a scene from a film I never want to end.',
    rating: '10 / 10 — Unforgettable'
  },
  {
    id: 4,
    src: 'assets/images/khushi_eyes_closeup.jpg',
    tag: 'Just Your Eyes ✦',
    caption: 'The Universe',
    compliment:
      'I could write entire pages about your eyes. Behind those glasses, behind that gaze — there\'s an entire world I want to spend my life trying to understand. You\'re extraordinary.',
    rating: '∞ / 10 — Everything'
  },
  {
    id: 5,
    src: 'assets/images/khushi_holding_hands.jpg',
    tag: 'Us ✦',
    caption: 'Together',
    compliment:
      'This is my favourite photo. Not because it\'s perfect — because it\'s real. Your hand in mine, hidden under the desk, like a quiet little secret only we knew. I\'d keep that secret forever.',
    rating: '10 / 10 — My Everything'
  },
  {
    id: 6,
    src: 'assets/images/khushi1.jpg',
    tag: 'You ✦',
    caption: 'Just You',
    compliment:
      'Every time I look at this, I can\'t help but think — how did I get so lucky? You walked into my life and somehow made everything brighter without even trying.',
    rating: '10 / 10 — Effortlessly Beautiful'
  },
  {
    id: 7,
    src: 'assets/images/khushi2.jpg',
    tag: 'Golden ✦',
    caption: 'Golden Hour',
    compliment:
      'This photo has a warmth to it that matches exactly how you make me feel. You are someone I look forward to, every single day — that\'s a rare thing.',
    rating: '10 / 10 — My Favourite Feeling'
  },
  {
    id: 8,
    src: 'assets/images/khushi5.jpg',
    tag: 'Radiant ✦',
    caption: 'That Glow',
    compliment:
      'Some people light up a room. You light up everything around them. I notice it every time. You don\'t even know you\'re doing it, and that\'s exactly what makes it so beautiful.',
    rating: '10 / 10 — Pure Sunlight'
  },
  {
    id: 9,
    src: 'assets/images/khushi6.jpg',
    tag: 'Adorable ✦',
    caption: 'Flower Crown',
    compliment:
      'You and flowers were clearly made for each other. The purple, the pout — there\'s a kind of magic in how naturally beautiful you are without even realizing it.',
    rating: '10 / 10 — Unbearably Cute'
  },
  {
    id: 10,
    src: 'assets/images/khushi10.jpg',
    tag: 'Dreaming ✦',
    caption: 'Window Gaze',
    compliment:
      'Watching you look out that window, I wondered what you were thinking. I hope it was something good. I hope that sometimes, it\'s me.',
    rating: '10 / 10 — Dreamy'
  }
];

function initGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';

  khushiPhotos.forEach((photo, index) => {
    const card = document.createElement('div');
    // Make the first holding-hands photo and the eyes photo take more space
    const isLarge = index === 4; // hands photo
    card.className = `photo-card${isLarge ? ' large' : ''}`;

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      <div class="photo-card-overlay">
        <div class="photo-card-num">✦ ${String(index + 1).padStart(2, '0')}</div>
        <div class="photo-card-caption">${photo.caption}</div>
      </div>
    `;

    card.addEventListener('click', () => openPhotoModal(photo));
    container.appendChild(card);
  });
}

function openPhotoModal(photo) {
  if (window.loveAudio) window.loveAudio.playSparkle();

  const modal = document.getElementById('photo-modal');
  if (!modal) return;

  document.getElementById('modal-img').src = photo.src;
  document.getElementById('modal-tag').textContent = photo.tag;
  document.getElementById('modal-title').textContent = photo.caption;
  document.getElementById('modal-compliment').textContent = `"${photo.compliment}"`;
  document.getElementById('modal-rating').textContent = photo.rating;

  modal.classList.add('active');
  triggerHeartBurst();
}

function closePhotoModal() {
  if (window.loveAudio) window.loveAudio.playPop();
  const modal = document.getElementById('photo-modal');
  if (modal) modal.classList.remove('active');
}

function triggerHeartBurst() {
  const burstContainer = document.createElement('div');
  burstContainer.style.cssText = `
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 999999;
  `;
  document.body.appendChild(burstContainer);

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.textContent = ['💖', '💕', '✨', '💋', '❤️', '🌹'][Math.floor(Math.random() * 6)];
    heart.style.position = 'absolute';
    heart.style.fontSize = `${Math.random() * 22 + 14}px`;

    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 180 + 60;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    heart.style.transition = 'all 1.1s cubic-bezier(0.16, 1, 0.3, 1)';
    heart.style.opacity = '1';
    burstContainer.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translate(${tx}px, ${ty}px) scale(1.4)`;
      heart.style.opacity = '0';
    }, 20);
  }

  setTimeout(() => burstContainer.remove(), 1200);
}

function sendKissToAyush() {
  if (window.loveAudio) window.loveAudio.playCheer();
  triggerHeartBurst();

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999999;
    background: rgba(8, 8, 12, 0.92);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    animation: fadeIn 0.3s ease;
  `;
  overlay.innerHTML = `
    <div style="text-align:center; padding: 40px; max-width: 480px;">
      <div style="font-size: 4rem; margin-bottom: 20px; animation: heartbeat 1s ease infinite;">💋</div>
      <p style="font-family: 'Great Vibes', cursive; font-size: 2.5rem; color: #e8b891; margin-bottom: 16px; line-height: 1.2;">Kiss received!</p>
      <p style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; color: #e8e0d8; line-height: 1.7; margin-bottom: 32px;">
        "You just made my entire day. Actually, my entire week.<br>You have no idea how much I care about you."
      </p>
      <button onclick="this.parentElement.parentElement.remove()" style="background: linear-gradient(135deg, #c9956c, #c47a7a); color: #08080c; border: none; padding: 14px 32px; border-radius: 9999px; font-size: 0.85rem; letter-spacing: 1.5px; text-transform: uppercase; cursor: pointer; font-weight: 600;">
        Close ✦
      </button>
    </div>
  `;
  document.body.appendChild(overlay);
}

document.addEventListener('DOMContentLoaded', () => {
  initGallery();

  const closeBtn = document.getElementById('modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closePhotoModal);

  const modalOverlay = document.getElementById('photo-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closePhotoModal();
    });
  }
});
