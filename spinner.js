const wheel = document.getElementById('spinnerWheel');
const spinButton = document.getElementById('spinButton');
const segmentInput = document.getElementById('segmentInput');

spinButton.addEventListener('click', spinWheel);

function createSegments(numSegments) {
  wheel.innerHTML = '';
  const angle = 360 / numSegments;

  for (let i = 0; i < numSegments; i++) {
    const segment = document.createElement('div');
    segment.classList.add('segment');
    segment.style.transform = `rotate(${i * angle}deg)`;
    segment.style.backgroundColor = `hsl(${(i * 360) / numSegments}, 70%, 50%)`; // Color segments
    wheel.appendChild(segment);
  }
}

function spinWheel() {
  const numSegments = parseInt(segmentInput.value);
  if (isNaN(numSegments) || numSegments < 2) {
    alert('Please enter a valid number of segments (at least 2).');
    return;
  }

  createSegments(numSegments);
  
  const randomSpin = Math.floor(Math.random() * 360) + 1800; // Ensure multiple spins
  wheel.style.transition = 'transform 3s ease-out';
  wheel.style.transform = `rotate(${randomSpin}deg)`;
}
