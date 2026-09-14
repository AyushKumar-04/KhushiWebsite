/* particles.js — Subtle lavender dust particles + cursor trail */
(function () {
  const bgCanvas = document.getElementById('particles-canvas');
  if (!bgCanvas) return;
  const ctx = bgCanvas.getContext('2d');

  let W = bgCanvas.width = window.innerWidth;
  let H = bgCanvas.height = window.innerHeight;
  window.addEventListener('resize', () => { W = bgCanvas.width = window.innerWidth; H = bgCanvas.height = window.innerHeight; });

  class Dot {
    constructor() { this.reset(true); }
    reset(init) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : H + 10;
      this.r = Math.random() * 1.6 + 0.3;
      this.vy = Math.random() * 0.5 + 0.15;
      this.vx = (Math.random() - 0.5) * 0.2;
      this.a = Math.random() * 0.35 + 0.05;
      this.hue = 250 + Math.random() * 40; // lavender to purple
      this.wave = Math.random() * Math.PI * 2;
    }
    update() {
      this.y -= this.vy;
      this.wave += 0.012;
      this.x += this.vx + Math.sin(this.wave) * 0.25;
      if (this.y < -10) this.reset(false);
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.a;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsl(${this.hue}, 55%, 78%)`;
      ctx.fill();
      if (this.r > 1.1) {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4);
        g.addColorStop(0, `hsla(${this.hue}, 55%, 78%, 0.1)`);
        g.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }
      ctx.restore();
    }
  }

  const dots = Array.from({ length: 55 }, () => new Dot());

  (function loop() {
    ctx.clearRect(0, 0, W, H);
    dots.forEach(d => { d.update(); d.draw(); });
    requestAnimationFrame(loop);
  })();

  // Trail canvas
  const tc = document.getElementById('trail-canvas');
  if (!tc) return;
  const tCtx = tc.getContext('2d');
  let tW = tc.width = W, tH = tc.height = H;
  window.addEventListener('resize', () => { tW = tc.width = window.innerWidth; tH = tc.height = window.innerHeight; });

  const trail = [];
  class Spark {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 4;
      this.y = y + (Math.random() - 0.5) * 4;
      this.r = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 1.5;
      this.vy = (Math.random() - 0.5) * 1.5 - 0.3;
      this.a = 0.7;
      this.d = Math.random() * 0.025 + 0.018;
      this.hue = 240 + Math.random() * 60;
    }
    update() { this.x += this.vx; this.y += this.vy; this.vy += 0.04; this.a -= this.d; this.r *= 0.97; }
    draw() {
      tCtx.save();
      tCtx.globalAlpha = Math.max(0, this.a);
      tCtx.beginPath();
      tCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      tCtx.fillStyle = `hsl(${this.hue}, 60%, 80%)`;
      tCtx.fill();
      tCtx.restore();
    }
  }

  let lx = 0, ly = 0, frame = 0;
  window.addEventListener('mousemove', e => {
    frame++;
    if (frame % 2) return;
    if (Math.hypot(e.clientX - lx, e.clientY - ly) < 6) return;
    lx = e.clientX; ly = e.clientY;
    for (let i = 0; i < 3; i++) trail.push(new Spark(lx, ly));
  });

  (function tloop() {
    tCtx.clearRect(0, 0, tW, tH);
    for (let i = trail.length - 1; i >= 0; i--) {
      trail[i].update(); trail[i].draw();
      if (trail[i].a <= 0 || trail[i].r < 0.2) trail.splice(i, 1);
    }
    requestAnimationFrame(tloop);
  })();
})();
