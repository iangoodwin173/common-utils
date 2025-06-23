const textInput = document.getElementById('textInput');
const uppercaseBtn = document.getElementById('uppercaseBtn');
const lowercaseBtn = document.getElementById('lowercaseBtn');
const titlecaseBtn = document.getElementById('titlecaseBtn');
const sentencecaseBtn = document.getElementById('sentencecaseBtn');
const clearBtn = document.getElementById('clearBtn');
const funkycaseBtn = document.getElementById('funkycaseBtn');


uppercaseBtn.addEventListener('click', () => {
  textInput.value = textInput.value.toUpperCase();
});

lowercaseBtn.addEventListener('click', () => {
  textInput.value = textInput.value.toLowerCase();
});

titlecaseBtn.addEventListener('click', () => {
  textInput.value = textInput.value
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
});

sentencecaseBtn.addEventListener('click', () => {
  textInput.value = textInput.value
    .toLowerCase()
    .replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
});

clearBtn.addEventListener('click', () => {
  textInput.value = '';
});

funkycaseBtn.addEventListener('click', () => {
  let input = textInput.value;
  let result = '';
  let index = 0;

  for (let char of input) {
    if (/[a-zA-Z]/.test(char)) {
      result += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      index++;
    } else {
      result += char;
    }
  }

  textInput.value = result;
});

