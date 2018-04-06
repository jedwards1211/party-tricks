function randomColor() { return '#' + Math.floor(Math.random() * 0xfffffe).toString(16) }
document.querySelectorAll('*').forEach(function (n) {
  n.style.backgroundColor = randomColor()
  n.color = randomColor()
})
