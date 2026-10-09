(() => {
  const button = document.querySelector('.corn-button');
  if (!button) return;
  button.addEventListener('click', () => {
    const inverted = button.getAttribute('aria-pressed') !== 'true';
    document.documentElement.dataset.inverted = String(inverted);
    button.setAttribute('aria-pressed', String(inverted));
  });
})();
