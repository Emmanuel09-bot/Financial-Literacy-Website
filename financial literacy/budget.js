document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.getElementById("add-btn");
  const calcBtn = document.getElementById("calculate-btn");
  const resetBtn = document.getElementById("reset-btn");
  const descInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const typeSelect = document.getElementById("type");
  const tableBody = document.querySelector("#budget-table tbody");
  const totalDisplay = document.getElementById("total-display");

  let items = [];

  addBtn.addEventListener("click", () => {
    const desc = descInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (desc === "" || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid description and amount.");
      return;
    }

    items.push({ desc, amount, type });
    renderTable();
    descInput.value = "";
    amountInput.value = "";
  });

  function renderTable() {
    tableBody.innerHTML = "";
    items.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.desc}</td>
        <td class="${item.type}">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</td>
        <td>₦${item.amount.toLocaleString()}</td>
      `;
      tableBody.appendChild(row);
    });
  }

  calcBtn.addEventListener("click", () => {
    let income = 0;
    let expense = 0;

    items.forEach((item) => {
      if (item.type === "income") income += item.amount;
      else expense += item.amount;
    });

    const balance = income - expense;
    totalDisplay.textContent = `Total Balance: ₦${balance.toLocaleString()}`;
    totalDisplay.style.color = balance >= 0 ? "blue" : "red";
  });

  resetBtn.addEventListener("click", () => {
    items = [];
    tableBody.innerHTML = "";
    totalDisplay.textContent = "Total Balance: ₦0";
    totalDisplay.style.color = "black";
  });
});
