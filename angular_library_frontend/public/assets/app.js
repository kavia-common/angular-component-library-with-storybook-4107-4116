(function () {
  'use strict';

  // Toggle "Send me a copy" checkbox pressed state by toggling check image visibility.
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.checkbox');
    if (btn) {
      const pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', String(!pressed));
      const check = btn.querySelector('.checkbox-check');
      if (check) check.style.display = pressed ? 'none' : 'block';
    }
  });

  // Initialize checkbox check visibility according to aria-pressed
  document.querySelectorAll('.checkbox').forEach(function (btn) {
    const check = btn.querySelector('.checkbox-check');
    if (!check) return;
    const pressed = btn.getAttribute('aria-pressed') === 'true';
    check.style.display = pressed ? 'block' : 'none';
  });

  // Budget button demo (no actual options, preserve static design)
  document.addEventListener('click', function (e) {
    const budget = e.target.closest('.budget-hit');
    if (budget) {
      // No dropdown in static spec; briefly animate for feedback
      const wrapper = budget.parentElement;
      if (!wrapper) return;
      wrapper.style.transform = 'scale(0.98)';
      setTimeout(() => { wrapper.style.transform = 'scale(1)'; }, 120);
    }
  });

  // Send button demo
  document.addEventListener('click', function (e) {
    const send = e.target.closest('.send-button');
    if (send) {
      send.style.filter = 'brightness(0.95)';
      setTimeout(() => { send.style.filter = ''; }, 100);
      // No network; purely static
      console.log('Send clicked (static demo)');
    }
  });
})();
