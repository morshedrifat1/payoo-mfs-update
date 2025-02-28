document.getElementById("cash-out-section").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// toggle for add money
document.getElementById("add-money-box").addEventListener("click", function () {
  handleToggle("cash-out-section", "none");
  handleToggle("transaction-history", "none");
  handleToggle("add-money-section", "inline");
});

// toggle for cashOut
document
  .getElementById("withdraw-money-box")
  .addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("transaction-history", "none");
    handleToggle("cash-out-section", "inline");
  });

// toggle for transactions
document
  .getElementById("transactions-box")
  .addEventListener("click", function () {
    handleToggle("add-money-section", "none");
    handleToggle("cash-out-section", "none");
    handleToggle("transaction-history", "inline");
  });


// toggle function
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
