/* ==========================================================================
   Khushi's Love Sanctuary - Canvas Particle & Cursor Trail Effects
   Floating Hearts, Rose Petals, Glowing Stars & Heart Cursor Trail
   ========================================================================== */

(function () {
  // 1. Background Floating Hearts & Petals Canvas
  const bgCanvas = document.getElementById('particles-canvas');
  if (!bgCanvas) return;
  const ctx = bgCanvas.getContext('2d');

  let width = (bgCanvas.width = window.innerWidth);
  let height = (bgCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = bgCanvas.width = window.innerWidth;
    height = bgCanvas.height = window.innerHeight;
  });

  const particles = [];
  const particleTypes = ['💖', '💕', '✨', '🌸', '❤️', '🧸', '✨'];

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 100;
      this.size = Math.random() * 18 + 12;
      this.speedY = Math.random() * 1.5 + 0.5;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8;
      this.symbol = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      this.opacity = Math.random() * 0.7 + 0.3;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.rotation += this.rotSpeed;

      if (this.y < -50) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px sans-serif`;
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillText(this.symbol, 0, 0);
      ctx.restore();
    }
  }

  // Create initial particles
  for (let i = 0; i < 35; i++) {
    particles.push(new Particle());
  }

  function animateBg() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateBg);
  }

  animateBg();

  // 2. Interactive Heart Cursor Trail
  const trailCanvas = document.getElementById('trail-canvas');
  if (!trailCanvas) return;
  const tCtx = trailCanvas.getContext('2d');

  let tWidth = (trailCanvas.width = window.innerWidth);
  let tHeight = (trailCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    tWidth = trailCanvas.width = window.innerWidth;
    tHeight = trailCanvas.height = window.innerHeight;
  });

  const trailParticles = [];

  class TrailParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 14 + 10;
      this.speedX = (Math.random() - 0.5) * 3;
      this.speedY = (Math.random() - 0.5) * 3 - 1;
      this.alpha = 1;
      this.symbol = Math.random() > 0.3 ? '💖' : '✨';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.alpha -= 0.025;
      this.size *= 0.96;
    }

    draw() {
      tCtx.save();
      tCtx.globalAlpha = Math.max(0, this.alpha);
      tCtx.font = `${this.size}px sans-serif`;
      tCtx.fillText(this.symbol, this.x, this.y);
      tCtx.restore();
    }
  }

  function addTrail(e) {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    if (x && y && Math.random() < 0.6) {
      trailParticles.push(new TrailParticle(x, y));
    }
  }

  window.addEventListener('mousemove', addTrail);
  window.addEventListener('touchmove', addTrail);

  function animateTrail() {
    tCtx.clearRect(0, 0, tWidth, tHeight);
    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const p = trailParticles[i];
      p.update();
      p.draw();
      if (p.alpha <= 0 || p.size <= 2) {
        trailParticles.splice(i, 1);
      }
    }
    requestAnimationFrame(animateTrail);
  }

  animateTrail();
})();
