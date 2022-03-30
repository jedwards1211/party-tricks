var animation = document.createElement('style')
animation.textContent = '@keyframes bouncy { from { transform: scale(0.95); } to { transform: scale(1.05); } }'
document.head.appendChild(animation)

document.querySelectorAll('*').forEach(e => e.style.animation = `bouncy ${Math.random() + 0.5}s ease infinite alternate-reverse`)
