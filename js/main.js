/* main.js — Clean controller */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  // 2. Active nav link on scroll
  const sections = document.querySelectorAll('section, #stories');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
  );

  document.querySelectorAll('[id]').forEach(el => {
    if (['stories', 'moments'].includes(el.id)) sectionObserver.observe(el);
  });

  // 3. Scroll-reveal for story sections
  const storyPanes = document.querySelectorAll('.story-text-pane, .story-img-pane');
  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, i * 80);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  storyPanes.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.9s ease, transform 0.9s var(--ease)';
    revealObserver.observe(el);
  });

  // Reveal moment items
  document.querySelectorAll('.moment-item, .note-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'scale(0.96)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s var(--ease)';

    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'scale(1)';
        }, (i % 4) * 80);
        obs.disconnect();
      }
    }, { threshold: 0.1 });

    obs.observe(el);
  });

  // Hero: slow subtle zoom on the image pane for premium feel
  const heroImg = document.getElementById('hero-parallax');
  if (heroImg) {
    setTimeout(() => { heroImg.style.transform = 'scale(1.04)'; }, 200);
  }

});
