const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Mark active nav link
const path = window.location.pathname;
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html'))) {
    a.classList.add('active');
  } else if (href !== 'index.html' && path.endsWith(href)) {
    a.classList.add('active');
  }
});
