/* love-notes.js — Premium flip cards */

const loveNotes = [
  "Your laugh is the kind that makes everyone around you want to laugh too — completely infectious, and completely you.",
  "There's something about the way you adjust your glasses that I find endlessly charming. Every single time.",
  "You are genuinely one of those rare people who makes ordinary moments feel like they matter.",
  "The way you say things — so honest, so real — I could listen to you talk for hours and it would never feel like enough.",
  "You have this quiet strength that you probably don't even notice yourself. But I do. Every time.",
  "That photo of you with flowers — you made the flowers look less beautiful. And that's saying something.",
  "The fact that you love momos, golgappe, and garlic bread equally is actually one of the most wonderful things about you.",
  "You make me want to be more thoughtful, more present — just by being yourself. That's rare.",
  "Your eyes have this way of looking at the world that makes me wonder what you see. I think it must be beautiful.",
  "That photo of us holding hands under the desk — I think about that more than I care to admit.",
  "Knowing you for two weeks feels like knowing someone I've been waiting my whole life to meet.",
  "You are exactly the kind of person who deserves the world — and I'm going to spend a long time trying to give it to you."
];

function initLoveNotes() {
  const grid = document.getElementById('notes-grid');
  if (!grid) return;

  grid.innerHTML = '';

  loveNotes.forEach((note, i) => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.innerHTML = `
      <div class="note-inner">
        <div class="note-front">
          <div class="note-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="note-hint">Hover to reveal ✦</div>
        </div>
        <div class="note-back">
          <p>"${note}"</p>
          <div class="note-sign">— Ayush</div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('flipped'));
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', initLoveNotes);
