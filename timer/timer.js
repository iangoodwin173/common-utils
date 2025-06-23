let intervalId = null;

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const display = document.getElementById('countdownDisplay');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function startTimer() {
  let totalSeconds =
    parseInt(hoursInput.value) * 3600 +
    parseInt(minutesInput.value) * 60 +
    parseInt(secondsInput.value);

  if (isNaN(totalSeconds) || totalSeconds <= 0) return;

  clearInterval(intervalId);
  updateDisplay(totalSeconds);

  intervalId = setInterval(() => {
    totalSeconds--;
    updateDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      modal.classList.remove('hidden');
    }
  }, 1000);
}

function updateDisplay(totalSeconds) {
  const hrs = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const secs = String(totalSeconds % 60).padStart(2, '0');
  display.textContent = `${hrs}:${mins}:${secs}`;
}

function resetTimer() {
  clearInterval(intervalId);
  display.textContent = '00:00:00';
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
}
