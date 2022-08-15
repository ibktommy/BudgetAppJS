const balanceEl = document.querySelector('.balance .value')
const incomeTotalEl = document.querySelector('.income-total')
const outcomeTotalEl = document.querySelector('.outcome-total')
const incomeEl = document.querySelector('#income-tracker')
const expenseEl = document.querySelector('#expense-tracker')
const allEl = document.querySelector('#all')
const incomeList = document.querySelector('#income-tracker .list')
const expenseList = document.querySelector('#expense-tracker .list')
const allList = document.querySelector('#all .list')
const lists = document.querySelectorAll('.list')


// TABS
const incomeBtn = document.querySelector('.tab2')
const expenseBtn = document.querySelector('.tab1')
const allBtn = document.querySelector('.tab3')

// INPUT BUTTONS
const addIncome = document.querySelector('.add-income')
const incomeTitle = document.querySelector('#income-title-input')
const incomeAmount = document.querySelector('#income-amount-input')


const addExpense = document.querySelector('.add-expense')
const expenseTitle = document.querySelector('#expense-title-input')
const expenseAmount = document.querySelector('#expense-amount-input')

// NECESSARY VARIABLES
let ENTRY_LIST;
let [balance, income, outcome] = [0, 0, 0]
let [deleteIcon, editIcon] = ['fas fa-trash', 'far fa-edit']

// Get Entry List Data From localStorage if data exist there or just set it to an Empty Array
ENTRY_LIST = JSON.parse(localStorage.getItem('EntryList')) || []
updateUI() //Run Function After getting data from Local Storage

/**********************************/

/* IMPORT MINI-FUNCTIONS - DISPLAY_FUNCTIONS */
import { show, hide, active, inactive } from './miniFunctions.js'

// Income-Btn Event Listener
incomeBtn.addEventListener('click', function () {
  show(incomeEl)
  hide([expenseEl, allList])
  active(incomeBtn)
  inactive([expenseBtn, allBtn])
})
// Expense-Btn Event Listener
expenseBtn.addEventListener('click', function () {
  show(expenseEl)
  hide([incomeEl, allList])
  active(expenseBtn)
  inactive([incomeBtn, allBtn])
})
// All-Btn Event Listener
allBtn.addEventListener('click', function () {
  show(allList)
  hide([incomeEl, expenseEl])
  active(allBtn)
  inactive([incomeBtn, expenseBtn])
})

/**********************************/
// IMPORTING FUNCTIONS
import { clearInputs, calculateBalance, calculateTotal, showEntry, clearElementList, deleteListsItem, editListItem } from './miniFunctions.js'

// Add-Income & Add-Expense Enter Key Event Listener
document.addEventListener('keypress', function (e) {
  if (e.key !== 'Enter') return;

  budgetOut(e)
  budgetIn(e)
})

// Add-Income Event Listener
addIncome.addEventListener('click', budgetIn)

// Budget In Function
function budgetIn(e) {
  e.preventDefault()

  if (!incomeTitle.value || !incomeAmount.value) return

  let income = {
    type: 'income',
    title: incomeTitle.value,
    amount: parseFloat(incomeAmount.value)
  }

  ENTRY_LIST.push(income)
  // console.log(ENTRY_LIST)

  // Updating the UI after submitting the values
  updateUI()

  // Clear Input Fields after submitting values
  clearInputs([incomeTitle, incomeAmount])
}

// Add-Expense Event Listener
addExpense.addEventListener('click', budgetOut)

// Budget Out Function
function budgetOut(e) {
  e.preventDefault()

  if (!expenseTitle.value || !expenseAmount.value) return

  let expense = {
    type: 'expense',
    title: expenseTitle.value,
    amount: parseFloat(expenseAmount.value)
  }

  ENTRY_LIST.push(expense)
  // console.log(ENTRY_LIST)

  // Updating the UI after submitting the values
  updateUI()

  clearInputs([expenseTitle, expenseAmount])
}

// Function to update the UI
function updateUI() {
  income = calculateTotal('income', ENTRY_LIST)
  outcome = calculateTotal('expense', ENTRY_LIST)
  balance = Math.abs(calculateBalance(income, outcome))

  // Creating Variable to check for the num-comparison of the inputs
  let sign = income >= outcome ? '$' : "-$"

  // Getting the income, outcome and balance value to be displayed In the App UI
  balanceEl.innerHTML = `<p>${sign}${balance.toLocaleString()}</p>`
  incomeTotalEl.innerHTML = `<p>$${income.toLocaleString()}</p>`
  outcomeTotalEl.innerHTML = `<p>-$${outcome.toLocaleString()}</p>`

  clearElementList([incomeList, expenseList, allList])

  ENTRY_LIST.forEach((entry, index) => {
    if (entry.type === 'income') {
      showEntry(incomeList, entry.type, entry.title, entry.amount, index)
    } else if (entry.type === 'expense') {
      showEntry(expenseList, entry.type, entry.title, entry.amount, index)
    }
    showEntry(allList, entry.type, entry.title, entry.amount, index)
  })

  updateChart(income, outcome)

  // Save ENTRY_LIST to local Storage
  localStorage.setItem('EntryList', JSON.stringify(ENTRY_LIST))
}

/**********************************/

// LIST EVENT LISTENER
lists.forEach((list) => {
  list.addEventListener('click', (e) => {
    if (e.target.localName !== 'i') return

    let targetBtn = e.target.attributes.class.value
    let entry = e.target.parentNode.parentNode
    let targetID = entry.attributes.id.value

    // console.log(targetBtn, targetID, entry)

    if (targetBtn === deleteIcon) {
      // console.log("Delete")
      deleteListsItem(targetID, ENTRY_LIST, updateUI)

    } else if (targetBtn === editIcon) {
      console.log("Edit");
      editListItem(targetID, ENTRY_LIST, incomeAmount, incomeTitle, expenseAmount, expenseTitle)
      deleteListsItem(targetID, ENTRY_LIST, updateUI)
    }
  })
})

/**********************************/