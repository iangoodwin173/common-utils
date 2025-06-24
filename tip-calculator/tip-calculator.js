const billAmountInput = document.getElementById('billAmount');
const tipPercentageInput = document.getElementById('tipPercentage');
const peopleCountInput = document.getElementById('peopleCount');

const tipAmountDisplay = document.getElementById('tipAmount');
const totalAmountDisplay = document.getElementById('totalAmount');
const amountPerPersonDisplay = document.getElementById('amountPerPerson');

function updateCalculations() {
  const billAmount = parseFloat(billAmountInput.value) || 0;
  const tipPercentage = parseFloat(tipPercentageInput.value) || 0;
  const peopleCount = parseInt(peopleCountInput.value) || 1;

  const tipAmount = (billAmount * (tipPercentage / 100)).toFixed(2);
  const totalAmount = (billAmount + parseFloat(tipAmount)).toFixed(2);
  const amountPerPerson = (totalAmount / peopleCount).toFixed(2);

  tipAmountDisplay.textContent = tipAmount;
  totalAmountDisplay.textContent = totalAmount;
  amountPerPersonDisplay.textContent = amountPerPerson;
}

// Event listeners for input changes
billAmountInput.addEventListener('input', updateCalculations);
tipPercentageInput.addEventListener('input', updateCalculations);
peopleCountInput.addEventListener('input', updateCalculations);

// Initialize calculation on load
updateCalculations();
