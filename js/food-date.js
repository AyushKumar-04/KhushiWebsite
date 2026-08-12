/* ==========================================================================
   Khushi's Love Sanctuary - Food Craving & Date Voucher Planner
   Momos, Golgappe, Garlic Bread & Sunset Bike Ride Generator
   ========================================================================== */

let selectedFood = [];
let bikeRideSelected = false;

function initFoodDatePlanner() {
  const momoBtn = document.getElementById('btn-momo');
  const golgappeBtn = document.getElementById('btn-golgappe');
  const garlicBtn = document.getElementById('btn-garlic');
  const bikeBtn = document.getElementById('btn-bike');
  const generateBtn = document.getElementById('generate-voucher-btn');

  if (momoBtn) {
    momoBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      toggleItem('Hot Steamed Momos 🥟', momoBtn);
    });
  }

  if (golgappeBtn) {
    golgappeBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      toggleItem('Spicy Tangy Golgappe 🥟🌶️', golgappeBtn);
    });
  }

  if (garlicBtn) {
    garlicBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      toggleItem('Cheesy Garlic Bread 🧄🍞', garlicBtn);
    });
  }

  if (bikeBtn) {
    bikeBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      bikeRideSelected = !bikeRideSelected;
      bikeBtn.classList.toggle('active', bikeRideSelected);
      bikeBtn.style.background = bikeRideSelected ? '#ff5e8e' : '';
      bikeBtn.style.color = bikeRideSelected ? '#fff' : '';
    });
  }

  if (generateBtn) {
    generateBtn.addEventListener('click', generateVoucher);
  }
}

function toggleItem(name, element) {
  const index = selectedFood.indexOf(name);
  if (index > -1) {
    selectedFood.splice(index, 1);
    element.style.background = '';
    element.style.color = '';
  } else {
    selectedFood.push(name);
    element.style.background = '#ff5e8e';
    element.style.color = '#ffffff';
  }
}

function generateVoucher() {
  window.loveAudio.playCheer();
  const couponBox = document.getElementById('coupon-display');
  const couponText = document.getElementById('coupon-details');

  let foodListText = selectedFood.length > 0 ? selectedFood.join(' + ') : 'Unlimited Momos, Golgappe & Garlic Bread';
  let bikeText = bikeRideSelected ? ' + 🏍️ Sunset Highway Bike Ride with Ayush' : '';

  couponText.innerHTML = `
    <div style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--deep-rose); margin-bottom: 8px;">
      🎟️ OFFICIAL DATE VOUCHER FOR KHUSHI 🎟️
    </div>
    <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-main); margin-bottom: 12px;">
      Issued By: Ayush | Redeemable: Anytime Forever
    </div>
    <div style="background: #ffffff; padding: 16px; border-radius: 12px; font-size: 1.1rem; color: #d62828; font-weight: 600; margin-bottom: 16px;">
      INCLUDES: ${foodListText} ${bikeText}
    </div>
    <div style="font-family: var(--font-cursive); font-size: 1.5rem; color: var(--text-muted);">
      "Signed with infinite love by Ayush ❤️"
    </div>
  `;

  couponBox.style.display = 'block';
  couponBox.scrollIntoView({ behavior: 'smooth' });
  triggerHeartBurst();
}

document.addEventListener('DOMContentLoaded', initFoodDatePlanner);
