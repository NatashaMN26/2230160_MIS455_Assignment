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