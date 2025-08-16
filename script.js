
// Mobile nav toggle
const btn = document.getElementById('navToggle');
const nav = document.getElementById('siteNav');
if (btn && nav){
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Mark active link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === path) a.classList.add('active');
});
