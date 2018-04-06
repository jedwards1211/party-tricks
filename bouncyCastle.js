var animation = document.createElement('style')
animation.textContent = '@keyframes bouncy { from { transform: scale(0.95); } to { transform: scale(1.05); } }'
document.head.appendChild(animation)

document.querySelectorAll('*').forEach(function (elem) {
  elem.style.animationName = 'bouncy'
  elem.style.animationDuration = (Math.random() + 0.5) + 's'
  elem.style.animationTimingFunction = 'ease'
  elem.style.animationIterationCount = 'infinite'
  elem.style.animationDirection = 'alternate-reverse' 
})
