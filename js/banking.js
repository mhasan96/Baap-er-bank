document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get deposit value from user
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = parseFloat(depositInput.value);
    // display deposit amount to the website

    const depositTotal = document.getElementById("deposit-total");

    const depositTotalText = parseFloat(depositTotal.innerText);
    //console.log(depositTotalText);
    depositTotal.innerText = depositTotalText + depositAmount;

    // update balance

    const userBalanceText = document.getElementById("balance-total");
    const userBalance = parseFloat(userBalanceText.innerText);

    // get total balance

    const totalBalance = userBalance + depositAmount;
    userBalanceText.innerText = totalBalance;
    //clear input field
    depositInput.value = "";
  });
// withdraw amount from bank

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmountText = document.getElementById("withdraw-input");

    const withdrawAmount = parseFloat(withdrawAmountText.value);

    const totalWithdrawText = document.getElementById("withdraw-total");
    const totalWithdraw = parseFloat(totalWithdrawText.innerText);

    totalWithdrawText.innerText = withdrawAmount + totalWithdraw;

    //update balance

    const previousBalanceText = document.getElementById("balance-total");
    const previousBalance = parseFloat(previousBalanceText.innerText);

    previousBalanceText.innerText = previousBalance - withdrawAmount;

    // clear input field
    withdrawAmountText.value = "";
  });
