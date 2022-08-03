const balanceEl = document.querySelector('.balane .value')
const incomeTotalEl = document.querySelector('.income-total')
const outcomeTotalEl = document.querySelector('.outcome-total')
const incomeEl = document.querySelector('.#income-tracker')
const expenseEl = document.querySelector('.#expense-tracker')
const allEl = document.querySelector('#all')
const incomeList = document.querySelector('.#income-tracker .list')
const expenseList = document.querySelector('.#expense-tracker .list')
const allList = document.querySelector('.#all .list')
const lists = document.querySelectorAll('.list')


// TABS
const incomeBtn = document.querySelector('.tab2')
const expenseBtn = document.querySelector('.tab1')
const allBtn = document.querySelector('.tab3')

// INPUT BUTTONS
const addIncome = document.querySelector('.add-income')
const incomeTitle = document.querySelector('.#income-title-input')
const incomeAmount = document.querySelector('#income-amount-input')


const addExpense = document.querySelector('.add-expense')
const expenseTitle = document.querySelector('.#expense-title-input')
const expenseAmount = document.querySelector('#expense-amount-input')

// NECESSARY VARIABLES
let ENTRY_LIST = []
let [balance, income, outcome] = [0,0,0]
let [deleteIcon, editIcon] = ['fas fa-trash', 'far fa-edit']

