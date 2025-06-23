const rollButton = document.getElementById('rollButton');
const diceDisplay = document.getElementById('diceDisplay');
const diceCountInput = document.getElementById('diceCountInput');
const diceTypeInput = document.getElementById('diceTypeInput');

rollButton.addEventListener('click', rollDice);

function rollDice() {
  const diceCount = parseInt(diceCountInput.value);
  const diceType = parseInt(diceTypeInput.value);

  if (isNaN(diceCount) || isNaN(diceType) || diceCount <= 0 || diceType < 2) {
    alert('Please enter valid values for dice count and dice type.');
    return;
  }

  diceDisplay.innerHTML = ''; // Clear previous rolls
  for (let i = 0; i < diceCount; i++) {
    const rollResult = Math.floor(Math.random() * diceType) + 1;
    const diceElement = document.createElement('div');
    diceElement.classList.add('dice');
    addDots(diceElement, rollResult);
    diceDisplay.appendChild(diceElement);
  }
}

function addDots(diceElement, rollResult) {
  // Dot placement logic based on roll result
  switch (rollResult) {
    case 1:
      diceElement.innerHTML = `<div class="dot dot-1"></div>`; // Display dot 1
      break;
    case 2:
      diceElement.innerHTML = `<div class="dot dot-2"></div><div class="dot dot-3"></div>`; // Display dot 2 and dot 3
      break;
    case 3:
      diceElement.innerHTML = `<div class="dot dot-1"></div><div class="dot dot-2"></div><div class="dot dot-3"></div>`; // Display dot 1, dot 2, dot 3
      break;
    case 4:
      diceElement.innerHTML = `<div class="dot dot-2"></div><div class="dot dot-3"></div><div class="dot dot-4"></div><div class="dot dot-5"></div>`; // Display dot 2, dot 3, dot 4, dot 5
      break;
    case 5:
      diceElement.innerHTML = `<div class="dot dot-1"></div><div class="dot dot-2"></div><div class="dot dot-3"></div><div class="dot dot-4"></div><div class="dot dot-5"></div>`; // Display dot 1, dot 2, dot 3, dot 4, dot 5
      break;
    case 6:
      diceElement.innerHTML = `<div class="dot dot-2"></div><div class="dot dot-3"></div><div class="dot dot-4"></div><div class="dot dot-5"></div><div class="dot dot-6"></div><div class="dot dot-7"></div>`; // Display dot 2, dot 3, dot 4, dot 5, dot 6, dot 7
      break;
    default:
      diceElement.innerHTML = ''; // Handle case if anything other than 1-6 is rolled (not possible with d6)
  }
}
