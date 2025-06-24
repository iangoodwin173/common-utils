const canvas = document.getElementById('wheelCanvas');
const ctx = canvas.getContext('2d');
const drawWheelBtn = document.getElementById('drawWheelBtn');
const spinBtn = document.getElementById('spinBtn');
const segmentsInput = document.getElementById('segmentsInput');
const resultModal = document.getElementById('resultModal');
const resultText = document.getElementById('resultText');
const closeModalBtn = document.getElementById('closeModalBtn');


let segments = [];
let currentAngle = 0;
let spinning = false;

function drawWheel() {
  const input = segmentsInput.value.trim();
  segments = input.split('\n').map(s => s.trim()).filter(s => s);
  if (segments.length === 0) return;

  const radius = canvas.width / 2;
  const anglePerSegment = (2 * Math.PI) / segments.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  segments.forEach((segment, index) => {
    const startAngle = index * anglePerSegment;
    const endAngle = startAngle + anglePerSegment;

    // Set color
    ctx.fillStyle = `hsl(${(index * 360) / segments.length}, 70%, 60%)`;

    // Draw segment
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();

    // Draw text
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(startAngle + anglePerSegment / 2);
    ctx.textAlign = "right";
    ctx.fillStyle = "#000";
    ctx.font = "16px sans-serif";
    ctx.fillText(segment, radius - 10, 5);
    ctx.restore();
  });
}

function spinWheel() {
  if (segments.length === 0 || spinning) return;

  spinning = true;
  const totalSpin = Math.random() * 360 + 720 + currentAngle; 
  const duration = 3000;
  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const angle = currentAngle + easeOut * (totalSpin - currentAngle);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.save();
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate((angle * Math.PI) / 180);
ctx.translate(-canvas.width / 2, -canvas.height / 2);
drawWheel();
ctx.restore();
drawPointer();


    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      currentAngle = totalSpin % 360;
      spinning = false;
    }
  }

  requestAnimationFrame(animate);
}

function drawPointer() {
  const centerY = canvas.height / 2;
  const length = 30; // how far it sticks into the wheel
  const width = 20;  // height of the triangle

  ctx.fillStyle = '#000000'; // black triangle
  ctx.beginPath();
  ctx.moveTo(0, centerY - width / 2);        // top corner
  ctx.lineTo(length, centerY);               // tip (right side)
  ctx.lineTo(0, centerY + width / 2);        // bottom corner
  ctx.closePath();
  ctx.fill();
}




drawWheelBtn.addEventListener('click', () => {
  drawWheel();
  drawPointer();
});

spinBtn.addEventListener('click', spinWheel);
