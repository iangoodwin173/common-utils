const coin = document.getElementById('coin');
const flipButton = document.getElementById('flipButton');

flipButton.addEventListener('click', () => {
  coin.textContent = '?';
  coin.style.transform = 'rotateY(360deg)';
  
  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    coin.textContent = result;
    coin.style.transform = 'none';
  }, 600);
});
