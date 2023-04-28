const btns = document.querySelectorAll('.keyboard__btn');
const input = document.getElementById('input');
const space = document.querySelector('.keyboard__btn-space');
const backspace = document.querySelector('.keyboard__btn-backspace')
const tab = document.querySelector('.keyboard__btn-tab')
const del = document.querySelector('.keyboard__btn-del')
const caps = document.querySelector('.keyboard__btn-caps')
const leftShift = document.querySelector('.keyboard__btn-shift--left')
const rigthShift = document.querySelector('.keyboard__btn-shift--right')
const ctrlRight = document.querySelector('.keyboard__btn-ctrl--right')
const ctrlLeft = document.querySelector('.keyboard__btn-ctrl--left')
const enter = document.querySelector('.keyboard__btn-enter')
const arrowUp = document.querySelector('.keyboard__btn-up')
const arrowDown = document.querySelector('.keyboard__btn-down')
const arrowLeft = document.querySelector('.keyboard__btn-left')
const arrowRight = document.querySelector('.keyboard__btn-right')
const specBtns = [space, backspace, tab, del, caps, leftShift, rigthShift, ctrlLeft, ctrlRight, enter, arrowDown, arrowLeft, arrowUp, arrowRight]

specBtns.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.classList.add('active')
  })
})

window.addEventListener('keydown', (e) => {
  if (e.key == 'Tab') {
    e.preventDefault()
  }
  if (e.key == 'Alt') {
    e.preventDefault()
  }
})

for (let i = 0; i < btns.length; i++) {
  btns[i].setAttribute('keyname', btns[i].innerText)

  btns[i].setAttribute('lowerCase', btns[i].innerText.toLowerCase())
}

window.addEventListener('keydown', (e) => {
  btns.forEach(button => {
    if (e.key == button.getAttribute('keyname') || e.key ==  button.getAttribute('lowerCase')) {
      button.classList.add('active')
    }
    if (e.code == 'Space') {
      space.classList.add('active')
    }
    if (e.code == 'Tab') {
      tab.classList.add('active')
    }
    if (e.code == 'CapsLock') {
      caps.classList.add('active')
    }
    if (e.code == 'ShiftLeft') {
      leftShift.classList.add('active')
    }
    if (e.code == 'ShiftRight') {
      rigthShift.classList.add('active')
    }
    if (e.code == 'Backspace') {
      backspace.classList.add('active')
    }
    if (e.code == 'Delete') {
      del.classList.add('active')
    }
    if (e.code == 'ControlLeft') {
      ctrlLeft.classList.add('active')
    }
    if (e.code == 'ControlRight') {
      ctrlRight.classList.add('active')
    }
    if (e.code == 'Enter') {
      enter.classList.add('active')
    }
    if (e.code == 'ArrowUp') {
      arrowUp.classList.add('active')
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.add('active')
    }
    if (e.code == 'ArrowLeft') {
      arrowLeft.classList.add('active')
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.add('active')
    }
  })
  // console.log(e);
})

window.addEventListener('keyup', (e) => {
  btns.forEach(button => {
    if (e.key == button.getAttribute('keyname') || e.key ==  button.getAttribute('lowerCase')) {
      button.classList.remove('active')
    }
    if (e.code == 'Space') {
      space.classList.remove('active')
    }
    if (e.code == 'Tab') {
      tab.classList.remove('active')
    }
    if (e.code == 'CapsLock') {
      caps.classList.remove('active')
    }
    if (e.code == 'ShiftLeft') {
      leftShift.classList.remove('active')
    }
    if (e.code == 'ShiftRight') {
      rigthShift.classList.remove('active')
    }
    if (e.code == 'Backspace') {
      backspace.classList.remove('active')
    }
    if (e.code == 'Delete') {
      del.classList.remove('active')
    }
    if (e.code == 'ControlLeft') {
      ctrlLeft.classList.remove('active')
    }
    if (e.code == 'ControlRight') {
      ctrlRight.classList.remove('active')
    }
    if (e.code == 'Enter') {
      enter.classList.remove('active')
    }
    if (e.code == 'ArrowUp') {
      arrowUp.classList.remove('active')
    }
    if (e.code == 'ArrowDown') {
      arrowDown.classList.remove('active')
    }
    if (e.code == 'ArrowLeft') {
      arrowLeft.classList.remove('active')
    }
    if (e.code == 'ArrowRight') {
      arrowRight.classList.remove('active')
    }
  })
})
// btns.forEach(item => {
//   item.addEventListener('click', () => {
//     input.value += item.innerHTML
//   })
// })

for (let i = 0; i < btns.length; i++) {
  if (btns[i].classList.contains('keyboard__btn-enter')) continue
  if (btns[i].classList.contains('keyboard__btn-backspace')) continue
  if (btns[i].classList.contains('keyboard__btn-tab')) continue
  if (btns[i].classList.contains('keyboard__btn-space')) continue
  if (btns[i].classList.contains('keyboard__btn-del')) continue
  if (btns[i].classList.contains('keyboard__btn-shift--right')) continue
  if (btns[i].classList.contains('keyboard__btn-shift--left')) continue
  if (btns[i].classList.contains('keyboard__btn-win')) continue
  if (btns[i].classList.contains('keyboard__btn-alt')) continue
  if (btns[i].classList.contains('keyboard__btn-ctrl--right')) continue
  if (btns[i].classList.contains('keyboard__btn-ctrl--left')) continue
  if (btns[i].classList.contains('keyboard__btn-left')) continue
  if (btns[i].classList.contains('keyboard__btn-up')) continue
  if (btns[i].classList.contains('keyboard__btn-down')) continue
  if (btns[i].classList.contains('keyboard__btn-right')) continue
  if (btns[i].classList.contains('keyboard__btn-caps')) continue
  btns[i].addEventListener('mousedown', () => {
    input.value += btns[i].innerHTML.toLowerCase()
    btns[i].classList.add('active')
  })
}

for (let i = 0; i < btns.length; i++) {
  if (btns[i].classList.contains('keyboard__btn-caps')) continue
  btns[i].addEventListener('mouseup', () => {
    btns[i].classList.remove('active')
  })
}

for (let i = 0; i < btns.length; i++) {
  if (btns[i].classList.contains('active')) {
    btns[i].addEventListener('click', () => {
      input.value += btns[i].innerHTML.toUpperCase()
      // btns[i].classList.add('active')
    })
  }
 }

backspace.addEventListener('click', () => {
  const currentPosition = input.selectionStart;
  const inputValue = input.value;
  const newValue = inputValue.substr(0, currentPosition - 1) + inputValue.substr(currentPosition);
  input.value = newValue;
  input.selectionStart = currentPosition - 1;
  input.selectionEnd = currentPosition - 1;
})

enter.addEventListener('click', () => {
  input.value += "\n"
})

space.addEventListener('click', () => {
  input.value += ' '
})

del.addEventListener('click', () => {
  const currentPosition = input.selectionStart;
  const inputValue = input.value;
  const newValue = inputValue.substr(0, currentPosition) + inputValue.substr(currentPosition + 1);
  input.value = newValue;
  input.selectionStart = currentPosition;
  input.selectionEnd = currentPosition;
})

arrowLeft.addEventListener('click', () => {
  const newPosition = input.selectionStart - 1
  input.setSelectionRange(newPosition)
})

arrowRight.addEventListener('click', () => {
  const newPosition = input.selectionStart + 1
  input.setSelectionRange(newPosition)
})


// TODO: доелать логику для капса
// сделать англ раскладку
// сделать так, чтобы клавиатура генерировалась из js кода и убрать ее из html файла
// опционально: чуть подправить саму клавиатуру (убрать лишние буквы, добавить нужные)