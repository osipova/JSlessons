'use strict';

let start = document.getElementById('start'),
  btnPlus = document.getElementsByTagName('button'),
  incomePlus = btnPlus[1],
  expensesPlus = btnPlus[2],
  additionalincomeItem = document.querySelectorAll('.additional_income-item'),
  budgetDayValue = document.getElementsByClassName('budget_day-value'),
  budgetMonthValue = document.getElementsByClassName('budget_month-value'),
  expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
  accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value'),
  additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
  incomePeriodValue = document.getElementsByClassName('income_period-value'),
  incomePeriodValue = document.getElementsByClassName('income_period-value'),
  salaryAmount = document.querySelector('salary-amount'),
  incomeTitle = document.querySelector('income-title'),
  incomeAmount = document.querySelector('income-amount'),
  expensesTitle = document.querySelector('expenses-title'),
  expensesAmount = document.querySelector('expenses-amount'),
  additionalExpenses = document.querySelector('additional_expenses-item'),
  periodSelect = document.querySelector('period-select');
//targetAmount = document.querySelector('target-amount'),
// depositAmount = document.querySelector('deposit-amount'),
// depositPercent = document.querySelector('deposit-percent'),