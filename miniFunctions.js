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
function clearInputs(inputs) {
  inputs.forEach((input) => input.value = '')
}


export { show, hide, active, inactive, clearInputs }