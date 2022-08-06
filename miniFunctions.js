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
// Function to Display the ENTRY_LIST as a list Item in the App
const showEntry = (list, type, title, amount, id) => {
  const entry = `
                  <li id="${id}" class="${type}">
                    <div class="entry">${title}: $${amount}</div>
                    <div class"action">
                      <i class="far fa-edit"></i>
                      <i class="fas fa-trash"></i>
                    </div>
                  </li>
                `
  const position = 'afterbegin'
  list.insertAdjacentHTML(position, entry)
}


export { show, hide, active, inactive, clearInputs, calculateBalance, calculateTotal, showEntry }

