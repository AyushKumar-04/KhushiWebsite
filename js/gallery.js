/* ==========================================================================
   Khushi's Love Sanctuary - All 10 Real Photos Gallery & Compliments
   ========================================================================== */

const khushiPhotos = [
  {
    id: 1,
    src: 'assets/images/khushi1.jpg',
    tag: 'Day 1 Vibe 👑',
    caption: 'Effortless Style & Beauty',
    compliment:
      'In just 2 short weeks of knowing you, your confidence and chic style never fail to amaze me! From the very first day we started talking, you stole Ayush\'s heart.',
    rating: '10/10 - Absolute Perfection ✨'
  },
  {
    id: 2,
    src: 'assets/images/khushi2.jpg',
    tag: 'Midnight Magic 🌙',
    caption: 'Aesthetic Golden Glow',
    compliment:
      'Look at this aesthetic picture! Knowing you for these 14 days feels like a sweet dream. You bring so much light and good vibes into my life, Khushi!',
    rating: '∞/10 - Pure Serotonin 🌟'
  },
  {
    id: 3,
    src: 'assets/images/khushi3.jpg',
    tag: 'Cozy Cuddle 🐱',
    caption: 'Softness & Kitten Snuggles',
    compliment:
      'Two absolute cuties in one frame! Seeing how sweet and loving you are with animals made Ayush realize within 2 weeks just how precious you are.',
    rating: '100/10 - Cutest Girl Ever 🌸'
  },
  {
    id: 4,
    src: 'assets/images/khushi4.jpg',
    tag: 'Puppy Hugs 🎀',
    caption: 'Pink Bows & Cute Smiles',
    compliment:
      'This photo defines true softness! Pink bows, glasses, and a tiny black puppy! In just 14 days of getting to know you, every conversation with you is the highlight of my day.',
    rating: '1000/10 - Heart-Melting 💕'
  },
  {
    id: 5,
    src: 'assets/images/khushi5.jpg',
    tag: 'Radiant Smile 🏛️',
    caption: 'The Universe\'s Masterpiece',
    compliment:
      'Your smile here is breathtaking! These past 2 weeks have been the happiest 14 days for Ayush. Never stop smiling like this, Khushi!',
    rating: '10000/10 - Unmatched Smile 💖'
  },
  {
    id: 6,
    src: 'assets/images/khushi6.jpg',
    tag: 'Flower Power 🌸',
    caption: 'The Cutest Flower Pout',
    compliment:
      'How are you this cute?! That purple flower on your hair and your pout pose melt Ayush\'s heart completely. 2 weeks in, and I\'m totally hooked on you!',
    rating: '100/10 - Pure Adorableness 🌺'
  },
  {
    id: 7,
    src: 'assets/images/khushi7.jpg',
    tag: 'Biker Girl 🏍️',
    caption: 'Helmet & Highway Vibes',
    compliment:
      'Look at my badass biker girl! You in a motorcycle helmet with a pink bow is the coolest & cutest sight ever. Can\'t wait for our real sunset bike ride!',
    rating: '∞/10 - Ultimate Biker Queen 🏁'
  },
  {
    id: 8,
    src: 'assets/images/khushi8.jpg',
    tag: 'Daily Cute Moment 🥛',
    caption: '"Doodh lene jaana h btw"',
    compliment:
      'This picture and caption made Ayush laugh out loud! You make even the simplest everyday things look so charming and adorable.',
    rating: '10/10 - Iconic Energy 😂❤️'
  },
  {
    id: 9,
    src: 'assets/images/khushi9.jpg',
    tag: 'B&W Elegance 🖤',
    caption: 'Vintage Black & White Grace',
    compliment:
      'Classic, elegant, and mesmerizing. Black & white photos capture your natural beauty so effortlessly. You look like a movie actress here, Khushi!',
    rating: '1000/10 - Vintage Beauty 🎬'
  },
  {
    id: 10,
    src: 'assets/images/khushi10.jpg',
    tag: 'Road Trip Vibe 🚗',
    caption: 'Sunset Window Gaze',
    compliment:
      'Looking out the car window in that gorgeous pink top! 2 weeks ago we met, and every moment with you feels like an exciting road trip adventure.',
    rating: '10^10 / 10 - Dreamy Vibe 🌅'
  }
];

function initGallery() {
  const container = document.getElementById('gallery-container');
  if (!container) return;

  container.innerHTML = '';

  khushiPhotos.forEach((photo, index) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';

    card.innerHTML = `
      <div class="polaroid-img-wrapper">
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
      </div>
      <div class="polaroid-caption">${photo.caption}</div>
      <div style="font-size: 0.8rem; text-align: center; color: var(--primary-accent); font-weight: 600; margin-top: 6px;">
        Tap for Ayush's Note ❤️
      </div>
    `;

    card.addEventListener('click', () => openPhotoModal(photo));
    container.appendChild(card);
  });
}

function openPhotoModal(photo) {
  window.loveAudio.playSparkle();
  
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
  window.loveAudio.playPop();
  const modal = document.getElementById('photo-modal');
  if (modal) modal.classList.remove('active');
}

function triggerHeartBurst() {
  const burstContainer = document.createElement('div');
  burstContainer.style.position = 'fixed';
  burstContainer.style.top = '50%';
  burstContainer.style.left = '50%';
  burstContainer.style.transform = 'translate(-50%, -50%)';
  burstContainer.style.pointerEvents = 'none';
  burstContainer.style.zIndex = '999999';
  document.body.appendChild(burstContainer);

  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('div');
    heart.textContent = ['💖', '💕', '✨', '💋', '❤️'][Math.floor(Math.random() * 5)];
    heart.style.position = 'absolute';
    heart.style.fontSize = `${Math.random() * 20 + 16}px`;
    
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * 160 + 40;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    heart.style.transition = 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
    heart.style.opacity = '1';

    burstContainer.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = `translate(${tx}px, ${ty}px) scale(1.3)`;
      heart.style.opacity = '0';
    }, 20);
  }

  setTimeout(() => burstContainer.remove(), 1000);
}

function sendKissToAyush() {
  window.loveAudio.playCheer();
  triggerHeartBurst();
  alert("💋 MWAH! Ayush received your kiss! 2 weeks in and he is completely crazy about you! ❤️");
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
