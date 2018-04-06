function eachNode(f) {
  function process(n) {
    f(n)
    if (n.childNodes) n.childNodes.forEach(process)
  }
  process(document.body)
}

eachNode(function (n) {
  if (n.nodeType === Node.TEXT_NODE) {
    n.textContent = n.textContent.split('').reverse().join('')
  }
})
