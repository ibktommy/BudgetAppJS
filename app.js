const balanceEl = document.querySelector('.balane .value')
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
let ENTRY_LIST = []
let [balance, income, outcome] = [0,0,0]
let [deleteIcon, editIcon] = ['fas fa-trash', 'far fa-edit']

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

// Add-Expense Event Listener
addExpense.addEventListener('click', budgetOut)

// Add-Income Event Listener
// addIncome.addEventListener('click', budgetIn)

// Add-Income & Add-Expense Enter Key Event Listener
document.addEventListener('keypress', function (e) {
  if (e.key !== 'Enter') return;

  budgetOut(e)
})

// Budget Out Function
function budgetOut(e) {
  e.preventDefault()

  if (!expenseTitle.value || !expenseAmount.value) return

  let expense = {
    type: 'expense',
    title: 'expenseTitle.value',
    amount: parseFloat(expenseAmount.value)
  }

  ENTRY_LIST.push(expense)
  console.log(expense)
}




