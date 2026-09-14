/* ==========================================================================
   Food & Date Planner — Premium Dark Luxury Update
   ========================================================================== */

let selectedFood = [];
let bikeRideSelected = false;

const foodCardMap = {
  momo: { card: 'card-momo', name: 'Steamed Momos 🥟' },
  golgappe: { card: 'card-golgappe', name: 'Crispy Golgappe 🫧' },
  garlic: { card: 'card-garlic', name: 'Cheesy Garlic Bread 🧄' },
  bike: { card: 'card-bike', name: 'Sunset Bike Ride 🏍️' }
};

function initFoodDatePlanner() {
  Object.entries(foodCardMap).forEach(([key, { card, name }]) => {
    const btn = document.getElementById(`btn-${key}`);
    const cardEl = document.getElementById(card);
    if (!btn || !cardEl) return;

    btn.addEventListener('click', () => {
      if (window.loveAudio) window.loveAudio.playPop();
      const isSelected = cardEl.classList.contains('selected');

      if (isSelected) {
        cardEl.classList.remove('selected');
        btn.textContent = 'Select This';
        btn.style.color = '';
        btn.style.borderColor = '';
        const idx = selectedFood.indexOf(name);
        if (idx > -1) selectedFood.splice(idx, 1);
      } else {
        cardEl.classList.add('selected');
        btn.textContent = '✦ Selected';
        btn.style.color = 'var(--gold-light)';
        btn.style.borderColor = 'var(--gold)';
        selectedFood.push(name);
      }
    });
  });

  const generateBtn = document.getElementById('generate-voucher-btn');
  if (generateBtn) generateBtn.addEventListener('click', generateVoucher);
}

function generateVoucher() {
  if (window.loveAudio) window.loveAudio.playCheer();

  const couponBox = document.getElementById('coupon-display');
  const couponText = document.getElementById('coupon-details');

  const foodList = selectedFood.length > 0
    ? selectedFood.join(' + ')
    : 'Momos + Golgappe + Garlic Bread (the full Khushi menu)';

  couponText.innerHTML = `
    <div style="font-size: 0.7rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); opacity: 0.7; margin-bottom: 16px;">
      ✦ Official Date Voucher ✦
    </div>
    <div style="font-family: 'Great Vibes', cursive; font-size: 3rem; color: var(--gold-light); margin-bottom: 8px; line-height: 1.1;">
      For Khushi
    </div>
    <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1.1rem; color: var(--text-muted); margin-bottom: 28px;">
      Issued by Ayush · Valid forever · No expiry
    </div>
    <div style="background: rgba(201, 149, 108, 0.08); border: 1px solid rgba(201, 149, 108, 0.2); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <div style="font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; color: var(--text-dim); margin-bottom: 8px;">Includes</div>
      <div style="font-family: 'Playfair Display', serif; font-size: 1.2rem; color: var(--text-white); font-weight: 600; line-height: 1.6;">
        ${foodList}
      </div>
    </div>
    <div style="font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 1rem; color: var(--text-muted); line-height: 1.7;">
      "This voucher represents one perfect day with you —<br>your pick, my treat, our memory."
    </div>
    <div style="font-family: 'Great Vibes', cursive; font-size: 1.8rem; color: var(--rose-soft); margin-top: 20px; opacity: 0.7;">
      — Ayush
    </div>
  `;

  couponBox.style.display = 'block';
  setTimeout(() => couponBox.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  if (typeof triggerHeartBurst === 'function') triggerHeartBurst();
}

document.addEventListener('DOMContentLoaded', initFoodDatePlanner);
