// ====== CUSTOM CURSOR ======
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .service-card, .blog-card, .why-card, .service-full-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '36px'; cursor.style.height = '36px';
      cursor.style.background = 'rgba(201,168,76,0.15)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '18px'; cursor.style.height = '18px';
      cursor.style.background = 'transparent';
    });
  });
}

// ====== MOBILE MENU ======
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ====== ACTIVE NAV LINK ======
(function () {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

// ====== SCROLL NAV SHADOW ======
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 40 ? '0 4px 40px rgba(0,0,0,0.5)' : '';
});

// ====== CONTACT FORM SUBMIT ======
function submitForm() {
  const name = document.getElementById('cName');
  if (name && !name.value.trim()) { alert('Please enter your name.'); return; }
  const notif = document.getElementById('notif');
  if (notif) {
    notif.classList.add('show');
    setTimeout(() => notif.classList.remove('show'), 3500);
  }
  ['cName','cPhone','cEmail','cEvent','cDate','cGuests','cCity','cMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}
