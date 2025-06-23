const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const generateButton = document.getElementById('generateButton');
const resultDisplay = document.getElementById('resultDisplay');

generateButton.addEventListener('click', () => {
  const min = parseInt(minInput.value, 10);
  const max = parseInt(maxInput.value, 10);

  if (isNaN(min) || isNaN(max)) {
    alert('Please enter both minimum and maximum values.');
    return;
  }

  if (min > max) {
    alert('Minimum must be less than or equal to maximum.');
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  resultDisplay.textContent = result;
});
