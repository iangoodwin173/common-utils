const compareBtn = document.getElementById('compareBtn');
const originalTextArea = document.getElementById('originalText');
const modifiedTextArea = document.getElementById('modifiedText');
const originalOutput = document.getElementById('originalOutput');
const modifiedOutput = document.getElementById('modifiedOutput');

compareBtn.addEventListener('click', () => {
  const original = originalTextArea.value.trim().split(/\s+/);
  const modified = modifiedTextArea.value.trim().split(/\s+/);

  const [origHTML, modHTML] = generateSideBySideDiff(original, modified);
  originalOutput.innerHTML = origHTML;
  modifiedOutput.innerHTML = modHTML;

  // Sync heights
  const originalHeight = originalTextArea.offsetHeight;
  const modifiedHeight = modifiedTextArea.offsetHeight;
  originalOutput.style.height = originalHeight + 'px';
  modifiedOutput.style.height = modifiedHeight + 'px';
});

function generateSideBySideDiff(origWords, modWords) {
  const maxLength = Math.max(origWords.length, modWords.length);
  let originalHtml = '';
  let modifiedHtml = '';

  for (let i = 0; i < maxLength; i++) {
    const orig = origWords[i];
    const mod = modWords[i];

    if (orig === mod) {
      originalHtml += `${orig || ''} `;
      modifiedHtml += `${mod || ''} `;
    } else {
      originalHtml += orig ? `<span class="removed">${orig}</span> ` : '';
      modifiedHtml += mod ? `<span class="added">${mod}</span> ` : '';
    }
  }

  // Link scrolling between result boxes
function linkScroll(source, target) {
  source.addEventListener('scroll', () => {
    target.scrollTop = source.scrollTop;
  });
}

linkScroll(originalOutput, modifiedOutput);
linkScroll(modifiedOutput, originalOutput); // two-way sync




  return [originalHtml.trim(), modifiedHtml.trim()];
}

const syncHeights = () => {
  const h1 = originalTextArea.offsetHeight;
  const h2 = modifiedTextArea.offsetHeight;
  originalOutput.style.height = h1 + 'px';
  modifiedOutput.style.height = h2 + 'px';
};

originalTextArea.addEventListener('input', syncHeights);
modifiedTextArea.addEventListener('input', syncHeights);

