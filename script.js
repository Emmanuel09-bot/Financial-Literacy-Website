function toggleMenu() {
  const links = document.querySelector('.nav-links');
  links.classList.toggle('active');
}

// Simple expense tracker demo
const form = document.getElementById('expense-form');
if (form) {
  const list = document.getElementById('expense-list');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('expense-name').value.trim();
    const amount = document.getElementById('expense-amount').value.trim();
    if (!name || !amount) return;
    const li = document.createElement('li');
    li.textContent = `${name}: ₦${amount}`;
    list.appendChild(li);
    form.reset();
  });
}

// --- Budget Calculator ---
function calculateBudget() {
  const income = parseFloat(document.getElementById('income').value);
  const expenses = parseFloat(document.getElementById('expenses').value);
  const resultDiv = document.getElementById('budget-result');

  if (isNaN(income) || isNaN(expenses)) {
    resultDiv.textContent = "Please enter valid numbers for income and expenses.";
    resultDiv.style.color = "#d9534f";
    return;
  }

  const balance = income - expenses;
  if (balance < 0) {
    resultDiv.textContent = `You're over budget by $${Math.abs(balance).toFixed(2)} 😟`;
    resultDiv.style.color = "#d9534f";
  } else {
    resultDiv.textContent = `You have $${balance.toFixed(2)} remaining. Great job! 🎉`;
    resultDiv.style.color = "#28a745";
  }
}

// --- Expense Tracker ---
let totalExpense = 0;

function addExpense() {
  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);
  const list = document.getElementById('expense-list');
  const totalDisplay = document.getElementById('total-expense');

  if (!name || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid expense name and amount.");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `${name} <span>$${amount.toFixed(2)}</span>`;
  list.appendChild(li);

  totalExpense += amount;
  totalDisplay.textContent = `Total Spent: $${totalExpense.toFixed(2)}`;

  document.getElementById('expense-name').value = 'phone';
  document.getElementById('expense-amount').value = '100,000';
}