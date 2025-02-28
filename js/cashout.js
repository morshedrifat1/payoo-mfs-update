document.getElementById('withdraw-money').addEventListener('click', function (event) {
    event.preventDefault()
    const accountNumber = document.getElementById("cashout-account").value;
    const cashOutAmount = getInputValueById("withdraw-amount");
    const mainBalance = getInnerTextById("main-balance"); 
    const cashOutPin = getInputValueById("cashout-pin");

    
    if (cashOutAmount > mainBalance) {
        alert("Insufficient Balance");
    }

    if (accountNumber.length === 11 && accountNumber.startsWith("01")) {
      if (cashOutPin === 1234) {
        const sum = mainBalance - cashOutAmount;
        setInnerTextByIdAndValue("main-balance", sum);
        document.getElementById("cash-out-form").reset(); // .reset use for form clear after submit
        // transaction Selection
        const transactionContainer = document.getElementById(
          "transaction-container"
        );

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
                <div class="w-11 h-11 p-3 bg-[#f2f2f2] rounded-full"><img src="img/send1.png" alt=""></div>
                <div>
                  <h1 class="text-gray-700 font-semibold text-base">Cashout</h1>
                  <p class="text-gray-500 text-base mt-1">${accountNumber}</p>

                </div>
              </div>
              <div class="text-right">
                  <p class="text-red-700 font-semibold">- <span>${cashOutAmount}</span></p>
                  <p>${transactionTime}</p>
                <p>TrxID : <span>${tnxId}</span></p>
              </div>
            </div>
        `;
        transactionContainer.appendChild(createDiv);
      }
      else {
          alert('Wrong Pin Number')
        }
    }
  
    else {
      alert("Invalid Number");
    }



})