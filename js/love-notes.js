/* ==========================================================================
   Khushi's Love Sanctuary - Love Notes Flip Cards (2-Week Anniversary Special)
   ========================================================================== */

const loveNotes = [
  "In just 2 weeks of knowing you, your laugh has become Ayush's favorite sound in the world.",
  "14 days ago you walked into my life, and watching you talk about momos & garlic bread is the cutest thing ever!",
  "2 weeks in, and 20 looks extraordinarily stunning on you, Khushi.",
  "Even though it's only been 2 weeks, late-night talks & planning bike rides with you feels so natural and special.",
  "Your love for soft mini plushies shows how sweet & genuine your heart is.",
  "Knowing you for 14 days feels like I've known a best friend for a lifetime.",
  "No matter how tough college assignments get, you handle everything like an absolute queen.",
  "Your smile in every photo made Ayush fall head over heels in just 14 days!",
  "2 weeks down, forever to go! Excited for all our momo, golgappe & garlic bread dates ahead.",
  "You brought real 'Khushi' (happiness) into Ayush's life from Day 1.",
  "Every time you unwrap a Kinder Joy egg, you look so ridiculously adorable.",
  "14 days of knowing you, 1000 reasons to smile because of you! - Ayush ❤️"
];

function initLoveNotes() {
  const container = document.getElementById('reasons-container');
  if (!container) return;

  container.innerHTML = '';

  loveNotes.forEach((note, index) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.innerHTML = `
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card-num">#${index + 1}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 8px;">Tap to Flip 💌</div>
        </div>
        <div class="flip-card-back">
          <div style="font-size: 0.95rem; font-weight: 600; line-height: 1.5;">"${note}"</div>
          <div style="font-family: var(--font-cursive); font-size: 1.3rem; margin-top: 8px; color: var(--soft-rose);">- Ayush ❤️</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      window.loveAudio.playPop();
    });

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', initLoveNotes);
