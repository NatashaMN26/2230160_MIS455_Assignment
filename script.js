function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  const isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    if (btn) btn.textContent = 'Dark mode';
  } else {
    html.setAttribute('data-theme', 'dark');
    if (btn) btn.textContent = 'Light mode';
  }
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(function () {
    toast.classList.remove('show');
  }, 2200);
}

let cartCount = 0;
let cartTotal = 0;

function addToCart(name, price) {
  cartCount += 1;
  cartTotal += price;

  const countEl = document.getElementById('cartCount');
  const countSummaryEl = document.getElementById('cartCountSummary');
  const totalEl = document.getElementById('cartTotal');

  if (countEl) countEl.textContent = cartCount;
  if (countSummaryEl) countSummaryEl.textContent = cartCount;
  if (totalEl) totalEl.textContent = cartTotal.toFixed(2);

  showToast(name + ' added to your basket');
}

function revealSpecial() {
  const box = document.getElementById('specialBox');
  const btn = document.getElementById('specialBtn');
  if (!box) return;

  if (box.classList.contains('hidden')) {
    box.classList.remove('hidden');
    if (btn) btn.textContent = 'Hide special';
  } else {
    box.classList.add('hidden');
    if (btn) btn.textContent = 'Show special';
  }
}

function sendMessage() {
  const name = document.getElementById('nameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const message = document.getElementById('messageInput').value.trim();
  const status = document.getElementById('formStatus');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    status.textContent = 'Please fill in all fields.';
    status.className = 'form-status';
    return;
  }

  if (!emailPattern.test(email)) {
    status.textContent = 'Please use a real email address.';
    status.className = 'form-status';
    return;
  }

  status.textContent = 'Thanks! Your message has been sent.';
  status.className = 'form-status';
  document.getElementById('contactForm').reset();
}
