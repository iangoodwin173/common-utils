const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const charNoSpaceCount = document.getElementById('charNoSpaceCount');

const clearBtn = document.getElementById('clearBtn');

textInput.addEventListener('input', updateCounts);
clearBtn.addEventListener('click', () => {
  textInput.value = '';
  updateCounts();
});

function updateCounts() {
  const text = textInput.value;

  const words = text.trim().split(/\s+/).filter(w => w.length > 0);
  
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;

  wordCount.textContent = words.length;
  charCount.textContent = chars;
  charNoSpaceCount.textContent = charsNoSpaces;
  
}
