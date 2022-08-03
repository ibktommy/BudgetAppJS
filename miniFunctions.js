/**************************************/
function show(element) {
  element.classList.remove('hide')
}
function hide(elements) {
  elements.forEach((element) => {
    element.classList.add('hide')
  })
}
function active(element) {
  element.classList.add('active')
}
function inactive(elements) {
  elements.forEach((element) => element.classList.remove('active'))
}
/**************************************/




export { show, hide, active, inactive }