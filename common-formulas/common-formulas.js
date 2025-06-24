document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const formula = button.getAttribute('data-formula');
    navigator.clipboard.writeText(formula).then(() => {
      button.textContent = 'Copied!';
      setTimeout(() => {
        button.textContent = 'Copy LaTeX';
      }, 1000);
    });
  });
});
