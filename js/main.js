/* ==========================================================================
   Khushi's Love Sanctuary - Main App Controller
   Theme Toggle, Music Widget Controller, Smooth Nav & Counter Animations
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Khushi's Love Sanctuary Loaded Successfully! ❤️");

  // 1. Theme Toggle (Light Romantic Pink vs Dark Midnight Romance)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      window.loveAudio.playPop();
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeBtn.textContent = '🌙';
      } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeBtn.textContent = '☀️';
      }
    });
  }

  // Set default theme
  document.body.classList.add('light-theme');

  // 2. Floating Music Widget Toggle
  const musicToggleBtn = document.getElementById('music-toggle-btn');
  const musicDisk = document.getElementById('music-disk');

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      const isPlaying = window.loveAudio.toggleMusic();
      if (isPlaying) {
        if (musicDisk) musicDisk.classList.add('playing');
        musicToggleBtn.innerHTML = '<span>Pause Music 🎵</span>';
      } else {
        if (musicDisk) musicDisk.classList.remove('playing');
        musicToggleBtn.innerHTML = '<span>Play Romantic Music 🎶</span>';
      }
    });
  }

  // 3. Smooth Nav Highlight on Scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 180) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
