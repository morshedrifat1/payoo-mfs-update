document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const mainBalance = getInnerTextById("main-balance");
    const amount = getInputValueById("add-amount");
    const pin = getInputValueById("account-pin");

    const account = document.getElementById("bank-account-number").value;
    const selectBank = document.getElementById('bank-name').value;

    if (amount <= 0) {
      alert("Wrong Amount Type");
    }
    else if(selectBank == ""){
      alert('Select A Bank')
    }
    else if (account.length == 11 && account.startsWith("01")) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIdAndValue("main-balance", sum);

        // transaction history Selection
        const transactionContainer = document.getElementById(
          "transaction-container"
        );
        const bankName = document.getElementById("bank-name").value;
        console.log(bankName);
        // tnxId generator
        function generateTransactionID() {
          const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          let transactionID = "";
          for (let i = 0; i < 10; i++) {
            transactionID += chars.charAt(
              Math.floor(Math.random() * chars.length)
            );
          }
          return transactionID;
        }
        const tnxId = generateTransactionID();

        // transaction time

        function getBangladeshTime() {
          const bdTime = new Date().toLocaleString("en-US", {
            timeZone: "Asia/Dhaka",
          });
          return bdTime;
        }
        const transactionTime = getBangladeshTime();

        //transaction item add
        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
        
        <div class="bg-white py-3 px-4 rounded-xl flex items-center justify-between">
              <div class="flex gap-2 items-center">
                <div class="w-11 h-11 p-3 bg-[#f2f2f2] rounded-full"><img src="img/wallet1.png" alt=""></div>
                <div>
                  <h1 class="text-gray-700 font-semibold text-base">${bankName} to <span>Payoo</span></h1>
                  <p class="text-gray-500 text-base mt-1 font-semibold">${bankName}</p>

                </div>
              </div>
              <div class="text-right">
                  <p class="text-green-600 font-semibold">+ <span>${amount}</span></p>
                  <p>${transactionTime}</p>
                <p>TrxID : <span>${tnxId}</span></p>
              </div>
            </div>
        `;
        transactionContainer.appendChild(createDiv);

        document.getElementById("add-money-form").reset(); // .reset use for form clear after submit
      }
      else {
        alert("Invalid Pin");
      }
    }
    else {
      alert("Invalid Number");
    }
  });
