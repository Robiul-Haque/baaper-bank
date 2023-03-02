// Deposit
document.getElementById('deposit-btn').addEventListener('click', function () {
    // finding html element
    let depositField = document.getElementById('deposit-input');
    let depositElementOutput = document.getElementById('deposit-output');
    let balanceElementOutput = document.getElementById('balance-output');

    let depositValue = depositField.value;
    let depositAmount = parseFloat(depositValue);

    if (!isNaN(depositAmount)) {
        // Deposit
        let previousDeposit = parseFloat(depositElementOutput.innerText);
        let totalDeposit = previousDeposit + depositAmount;
        depositElementOutput.innerText = totalDeposit;

        // Balance
        let previousBalance = parseFloat(balanceElementOutput.innerText);
        let totalBalance = previousBalance + depositAmount;
        balanceElementOutput.innerText = totalBalance;
        depositField.value = '';
    } else {
        alert('Please enter a valid deposit amount');
        depositField.value = '';
    }

});


// Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // finding html element
    let withdrawField = document.getElementById('withdraw-input');
    let withdrawElementOutput = document.getElementById('withdraw-output');
    let balanceElementOutput = document.getElementById('balance-output');

    let withdrawValue = withdrawField.value;
    let withdrawAmount = parseFloat(withdrawValue);

    let previousBalance = parseFloat(balanceElementOutput.innerText);
    
    if (withdrawAmount <= previousBalance) {
        // Withdraw
        let previousWithdraw = parseFloat(withdrawElementOutput.innerText);
        let totalWithdraw = previousWithdraw + withdrawAmount;
        withdrawElementOutput.innerText = totalWithdraw;

        // Balance
        let totalBalance = previousBalance - withdrawAmount;
        balanceElementOutput.innerText = totalBalance;
        withdrawField.value = '';
    } else {
        alert('Tor Bapp er Bank e ato Taka nai.');
        withdrawField.value = '';
    }
});