const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  const milliseconds = String(ms % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  timeDisplay.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateDisplay, 50); // updates every 50ms
    isRunning = true;
  }
});

stopBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  elapsedTime = 0;
  timeDisplay.textContent = '00:00:00.000';
  isRunning = false;
});
