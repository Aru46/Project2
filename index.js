function toggleTheme() {
  document.body.classList.toggle('dark');
  const themeButton = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('dark')) {
    themeButton.textContent = '🌞'; // Иконка для светлой темы
  } else {
    themeButton.textContent = '🌙'; // Иконка для тёмной темы
  }
}
