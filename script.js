/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
  revealObserver.observe(el);
});

/* ============================================================
   STAT COUNTER ANIMATION
   ============================================================ */
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1200;
      const step = Math.ceil(duration / target);
      let current = 0;
      const timer = setInterval(() => {
        current++;
        el.textContent = current;
        if (current >= target) {
          el.textContent = target;
          clearInterval(timer);
        }
      }, step);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.stat-number').forEach((el) => {
  countObserver.observe(el);
});

/* ============================================================
   NAVBAR SCROLL SHADOW
   ============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.1)';
  } else {
    navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
  }
});

/* ============================================================
   MOBILE NAV TOGGLE
   ============================================================ */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.cssText = isOpen
      ? ''
      : 'display:flex; flex-direction:column; position:absolute; top:64px; left:0; width:100%; background:rgba(8,8,8,0.97); padding:20px 24px; gap:16px; border-bottom:1px solid rgba(255,255,255,0.08);';
  });

  // close on link click
  navLinks.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => { navLinks.style.cssText = ''; });
  });
}
