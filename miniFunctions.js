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
function calculateBalance(income, outcome) {
  return income - outcome
}
function calculateTotal(type, list) {
  let sum = 0
  list.forEach((entry) => {
    if (entry.type === type) {
      sum += entry.amount
    }
  })
  return sum
}


export { show, hide, active, inactive, clearInputs, calculateBalance, calculateTotal }

