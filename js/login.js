const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault(); //off automatic reload

  const accountNumber = document.getElementById("account-number").value;

  const accountPin = document.getElementById("account-pin").value;

//   const myAccountNumber = 01609522523;
//   const myAccountPin = 1234;

  if (accountNumber.length == 11 && accountNumber.startsWith('01')) {
    if (parseInt(accountPin) === 1234) {
      window.location.href = "main.html";
    } else {
      document.getElementById("wrong-pin").style.display = "inline";
      document.getElementById("account-pin").classList.add("border-wrong");
    }
  } else {
    document.getElementById("wrong-number").style.display = "inline";
    document.getElementById("account-number").classList.add("border-wrong");
  }
});
