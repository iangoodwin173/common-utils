const qrInput = document.getElementById('qrInput');
const generateBtn = document.getElementById('generateBtn');
const qrCodeContainer = document.getElementById('qrCode');
let qrInstance = null;

generateBtn.addEventListener('click', () => {
  const inputText = qrInput.value.trim();

  if (!inputText) {
    alert('Please enter some text or a URL.');
    return;
  }

  // Clear previous QR code
  qrCodeContainer.innerHTML = '';

  // Generate new QR code
  qrInstance = new QRCode(qrCodeContainer, {
    text: inputText,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });
});
