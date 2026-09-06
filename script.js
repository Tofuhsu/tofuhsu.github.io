const root = document.documentElement;
const header = document.querySelector('.site-header');
const themeButton = document.querySelector('.theme-button');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const sections = [...document.querySelectorAll('main section[id]')];
const navAnchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.dataset.theme = savedTheme;
} else {
  root.dataset.theme = 'light';
}

themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
});

const closeMenu = () => {
  navLinks?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navLinks?.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
});

navAnchors.forEach((anchor) => anchor.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navAnchors.forEach((anchor) => {
      anchor.classList.toggle('active', anchor.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach((section) => sectionObserver.observe(section));

document.getElementById('year').textContent = String(new Date().getFullYear());
