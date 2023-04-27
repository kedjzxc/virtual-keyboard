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
  console.log(e);
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
btns.forEach(item => {
  item.addEventListener('click', () => {
    input.value += item.innerHTML
  })
})

btns.forEach(item => {
  item.addEventListener('mousedown', () => {
    item.classList.add('active')
  })
})

btns.forEach(item => {
  item.addEventListener('mouseup', () => {
    item.classList.remove('active')
  })
})
