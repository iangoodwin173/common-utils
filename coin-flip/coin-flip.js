const coin = document.getElementById('coin');
const flipButton = document.getElementById('flipButton');

let isHeads = Math.random() < 0.5;
let totalRotation = isHeads ? 0 : 180;

coin.style.transform = `rotateY(${totalRotation}deg)`;

flipButton.addEventListener('click', () => {
  flipButton.disabled = true;

  const resultIsHeads = Math.random() < 0.5;
  const spins = Math.floor(Math.random() * 6 + 10); // 10–15 full flips
  const spinAmount = spins * 180;
  const resultOffset = resultIsHeads ? 0 : 180;

  totalRotation += spinAmount + resultOffset;

  coin.style.transition = 'transform 1s ease-in-out';
  coin.style.transform = `rotateY(${totalRotation}deg)`;

  setTimeout(() => {
    isHeads = resultIsHeads;
    flipButton.disabled = false;
  }, 1000);
});
