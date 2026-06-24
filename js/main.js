// Intended Parents Expert — Main JS

document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.querySelector('.nav-menu').classList.toggle('open');
    });
  }

  // Dropdown on mobile — click to expand
  document.querySelectorAll('.nav-item').forEach(item => {
    const link = item.querySelector('.nav-link');
    if (item.querySelector('.dropdown') && link) {
      link.addEventListener('click', e => {
        if (window.innerWidth <= 900) {
          e.preventDefault();
          item.classList.toggle('open');
        }
      });
    }
  });

  // FAQ
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Scroll fade-in
  if ('IntersectionObserver' in window) {
    const els = document.querySelectorAll('.card,.proc-step,.testimonial,.state-card,.resource-card,.glance-box');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      obs.observe(el);
    });
  }

  // Sticky header shadow
  const hdr = document.querySelector('.site-header');
  if (hdr) {
    window.addEventListener('scroll', () => {
      hdr.style.boxShadow = window.scrollY > 12
        ? '0 4px 20px rgba(29,70,100,.13)'
        : '0 2px 8px rgba(29,70,100,.08)';
    }, { passive: true });
  }

  // State filter
  const filterInput = document.getElementById('stateSearch');
  if (filterInput) {
    filterInput.addEventListener('input', () => {
      const val = filterInput.value.toLowerCase();
      document.querySelectorAll('.state-card').forEach(card => {
        const name = card.querySelector('.state-name').textContent.toLowerCase();
        card.style.display = name.includes(val) ? '' : 'none';
      });
    });
  }
});
