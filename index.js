function addExpense() {
    var category = document.getElementById('expense-category').value;
    var amount = parseFloat(document.getElementById('expense-amount').value);
    var date = document.getElementById('expense-date').value;

    if (!category || isNaN(amount) || !date) {
        alert('Please fill in all fields');
        return;
    }

    var expenseList = document.getElementById('expense-list');

    var expenseItem = document.createElement('div');
    expenseItem.className = 'expense-item';

    var details = document.createElement('div');
    details.textContent = `${category} - $${amount.toFixed(2)} - ${date}`;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        expenseList.removeChild(expenseItem);
        updateSummary();
    };

    expenseItem.appendChild(details);
    expenseItem.appendChild(deleteButton);

    expenseList.appendChild(expenseItem);

    updateSummary();

    // Clear input fields after adding expense
    document.getElementById('expense-category').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-date').value = '';
}

function updateSummary() {
    var expenseList = document.getElementById('expense-list');
    var totalExpenses = 0;

    for (var i = 0; i < expenseList.children.length; i++) {
        var amount = parseFloat(expenseList.children[i].textContent.split(' - ')[1].replace('$', ''));
        totalExpenses += amount;
    }

    document.getElementById('expense-header').textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;
}