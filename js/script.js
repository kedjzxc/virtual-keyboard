const btns = document.querySelectorAll('.keyboard__btn')
const input = document.getElementById('input')
const space = document.querySelector('.keyboard__btn-space')
btns.forEach(item => {
  item.addEventListener('click', () => {
    input.value += item.innerHTML
  })
})

document.addEventListener('keydown', (e) => {
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].innerHTML == e.key) {
      btns[i].classList.add('active')
    }
  }
  input.innerHTML += e.key

  if (e.key == 'Backspace') {
    input.innerHTML = input.innerHTML.slice(0, -10)
  }
})

document.addEventListener('keyup', (e) => {
  for (let i = 0; i < btns.length; i++) {
      if (btns[i].innerHTML == e.key) {
        btns[i].classList.remove('active')
      }
  }
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

space.addEventListener('mousedown', () => {
  space.classList.add('active')
  input.innerHTML += ' '
})