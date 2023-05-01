const body = document.body;
body.innerHTML = `
  <div class="container">
    <textarea name="input" id="input" cols="70" rows="10"></textarea>
    <div class="keyboard">
      <div class="keyboard__inner">
        
      </div>
    </div>
  </div>

  <p style='text-align: center; margin-top: 20px'>click left shift to change the language</p>
    `;

const russianLayout = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  'Del',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  '▲',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  ' ',
  'Alt',
  '◄',
  '▼',
  '►',
  'Ctrl',
];

const englishLayout = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  'Del',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '▲',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  ' ',
  'Alt',
  '◄',
  '▼',
  '►',
  'Ctrl',
];

const keyboard = document.querySelector('.keyboard__inner');
let curLayout =
  localStorage.getItem('keyboardLayout') === 'english' ? englishLayout : russianLayout;
let capsLockActive = false;
renderKeyboard();

function createKey(keyCode, keyValue) {
  const btn = document.createElement('div');
  btn.classList.add('keyboard__btn');
  btn.dataset.code = keyCode;
  btn.textContent = keyValue;
  return btn;
}

const shift = document.querySelector('.keyboard__btn-shift--left');
shift.addEventListener('click', () => {
  if (curLayout == russianLayout) {
    curLayout = englishLayout;
    localStorage.setItem('keyboardLayout', 'english');
  } else {
    curLayout = russianLayout;
    localStorage.setItem('keyboardLayout', 'russian');
  }
  keyboard.innerHTML = '';
  renderKeyboard();
});


const btns = document.querySelectorAll('.keyboard__btn');
const input = document.getElementById('input');
const space = document.querySelector('.keyboard__btn-space');
const backspace = document.querySelector('.keyboard__btn-backspace');
const tab = document.querySelector('.keyboard__btn-tab');
const del = document.querySelector('.keyboard__btn-del');
const caps = document.querySelector('.keyboard__btn-caps');
const ctrl = document.querySelector('.keyboard__btn-ctrl');
const enter = document.querySelector('.keyboard__btn-enter');
const arrowUp = document.querySelector('.keyboard__btn-up');
const arrowDown = document.querySelector('.keyboard__btn-down');
const arrowLeft = document.querySelector('.keyboard__btn-left');
const arrowRight = document.querySelector('.keyboard__btn-right');

window.addEventListener('keydown', (e) => {
  if (e.key == 'Tab') {
    e.preventDefault();
  }
  if (e.key == 'Alt') {
    e.preventDefault();
  }
});

for (let i = 0; i < btns.length; i++) {
  btns[i].setAttribute('keyname', btns[i].innerText);

  btns[i].setAttribute('lowerCase', btns[i].innerText.toLowerCase());
}

window.addEventListener('keydown', (e) => {
  btns.forEach((button) => {
    if (e.key == button.getAttribute('keyname') || e.key == button.getAttribute('lowerCase')) {
      button.classList.add('active');
    }
    if (e.code == 'Space') {
      space.classList.add('active');
    }
    if (e.code == 'Tab') {
      tab.classList.add('active');
    }
    if (e.code == 'CapsLock') {
      caps.classList.add('active');
    }
    if (e.code == 'ShiftLeft') {
      shift.classList.add('active');
    }
    if (e.code == 'ShiftRight') {
      shift.classList.add('active');
    }
    if (e.code == 'Backspace') {
      backspace.classList.add('active');
    }
    if (e.code == 'Delete') {
      del.classList.add('active');
    }
    if (e.code == 'ControlLeft') {
      ctrl.classList.add('active');
    }
    if (e.code == 'ControlRight') {
      ctrl.classList.add('active');
    }
    if (e.code == 'Enter') {
      enter.classList.add('active');
    }
    if (e.code == 'ArrowUp') {
      arrowUp.classList.add('active');
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.add('active');
    }
    if (e.code == 'ArrowLeft') {
      arrowLeft.classList.add('active');
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.add('active');
    }
  });
});

window.addEventListener('keyup', (e) => {
  btns.forEach((button) => {
    if (e.key == button.getAttribute('keyname') || e.key == button.getAttribute('lowerCase')) {
      button.classList.remove('active');
    }
    if (e.code == 'Space') {
      space.classList.remove('active');
    }
    if (e.code == 'Tab') {
      tab.classList.remove('active');
    }
    if (e.code == 'CapsLock') {
      caps.classList.remove('active');
    }
    if (e.code == 'ShiftLeft') {
      shift.classList.remove('active');
    }
    if (e.code == 'ShiftRight') {
      shift.classList.remove('active');
    }
    if (e.code == 'Backspace') {
      backspace.classList.remove('active');
    }
    if (e.code == 'Delete') {
      del.classList.remove('active');
    }
    if (e.code == 'ControlLeft') {
      ctrl.classList.remove('active');
    }
    if (e.code == 'ControlRight') {
      ctrl.classList.remove('active');
    }
    if (e.code == 'Enter') {
      enter.classList.remove('active');
    }
    if (e.code == 'ArrowUp') {
      arrowUp.classList.remove('active');
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.remove('active');
    }
    if (e.code == 'ArrowLeft') {
      arrowLeft.classList.remove('active');
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.remove('active');
    }
  });
});

for (let i = 0; i < btns.length; i++) {
  if (btns[i].classList.contains('keyboard__btn-black')) continue
  btns[i].addEventListener('mousedown', () => {
    input.value += btns[i].innerHTML.toLowerCase();
    btns[i].classList.add('active');
  });
}

for (let i = 0; i < btns.length; i++) {
  if (btns[i].classList.contains('keyboard__btn-caps')) continue;
  btns[i].addEventListener('mouseup', () => {
    btns[i].classList.remove('active');
  });
}

tab.addEventListener('click', () => {
  input.value += '\t';
});

backspace.addEventListener('click', () => {
  const currentPosition = input.selectionStart;
  const inputValue = input.value;
  const newValue = inputValue.substr(0, currentPosition - 1) + inputValue.substr(currentPosition);
  input.value = newValue;
  input.selectionStart = currentPosition - 1;
  input.selectionEnd = currentPosition - 1;
});

enter.addEventListener('click', () => {
  input.value += '\n';
});

space.addEventListener('click', () => {
  input.value += ' ';
});

del.addEventListener('click', () => {
  const currentPosition = input.selectionStart;
  const inputValue = input.value;
  const newValue = inputValue.substr(0, currentPosition) + inputValue.substr(currentPosition + 1);
  input.value = newValue;
  input.selectionStart = currentPosition;
  input.selectionEnd = currentPosition;
});

arrowLeft.addEventListener('click', () => {
  const newPosition = input.selectionStart - 1;
  input.setSelectionRange(newPosition);
});

arrowRight.addEventListener('click', () => {
  const newPosition = input.selectionStart + 1;
  input.setSelectionRange(newPosition);
});

caps.addEventListener('click', () => {
  if (capsLockActive) {
    for (let btn of btns) {
      if (btn.classList.contains('keyboard__btn-black')) {
        ''
      } else {
        btn.innerText = btn.innerText.toLowerCase()
      }
    }
  } else {
    for (let btn of btns) {
      if (btn.classList.contains('keyboard__btn-black')) {
        ''
      } else {
        btn.innerText = btn.innerText.toUpperCase()
        
      }
    }
  }
  capsLockActive = !capsLockActive
})

function renderKeyboard() {
  keyboard.innerHTML = '';

  curLayout.forEach((char) => {
    const btn = createKey(char.charCodeAt(0), capsLockActive ? char.toUpperCase() : char);
    if (char == 'Tab') {
      btn.classList.add('keyboard__btn-tab', 'keyboard__btn-black');
    } else if (char == 'Backspace') {
      btn.classList.add('keyboard__btn-backspace', 'keyboard__btn-black');
    } else if (char == 'CapsLock') {
      btn.classList.add('keyboard__btn-caps', 'keyboard__btn-black');
    } else if (char == 'Enter') {
      btn.classList.add('keyboard__btn-enter', 'keyboard__btn-black');
    } else if (char == 'Shift') {
      btn.classList.add('keyboard__btn-shift--left', 'keyboard__btn-black');
    } else if (char == 'Alt') {
      btn.classList.add('keyboard__btn-alt', 'keyboard__btn-black');
    } else if (char == 'Ctrl') {
      btn.classList.add('keyboard__btn-ctrl', 'keyboard__btn-black');
    } else if (char == 'Win') {
      btn.classList.add('keyboard__btn-win', 'keyboard__btn-black');
    } else if (char == ' ') {
      btn.classList.add('keyboard__btn-space');
    } else if (char == 'Del') {
      btn.classList.add('keyboard__btn-del', 'keyboard__btn-black');
    } else if (char == '▲') {
      btn.classList.add('keyboard__btn-up', 'keyboard__btn-black');
    } else if (char == '◄') {
      btn.classList.add('keyboard__btn-left', 'keyboard__btn-black');
    } else if (char == '▼') {
      btn.classList.add('keyboard__btn-down', 'keyboard__btn-black');
    } else if (char == '►') {
      btn.classList.add('keyboard__btn-right', 'keyboard__btn-black');
    }
    keyboard.appendChild(btn);
  });
}

