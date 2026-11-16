const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
}
const revealItems = document.querySelectorAll('.section, .about-grid, .timeline-item, .project-card, .skills-grid, .contact-grid, .info-card, .note-box, .project-overview');
revealItems.forEach(item => item.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

const contactForm = document.querySelector('#contactForm');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('#sender').value.trim();
  const email = document.querySelector('#senderEmail').value.trim();
  const message = document.querySelector('#message').value.trim();
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
  // Replace xyx with Aditya's actual public email address.
  window.location.href = `mailto:xyx?subject=${subject}&body=${body}`;
});
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => backToTop.classList.toggle('show', window.scrollY > 450), { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}