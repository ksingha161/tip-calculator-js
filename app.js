const billInput = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");
const numberOfPeople = document.querySelector(".total-people");
const tipAmount = document.querySelector(".amount-money");
const totalMoney = document.querySelector(".total-money");
// window.addEventListener("click", (e) => {
//   let tipAmountResult;
//   // let dividedTip;
//   switch (e.target.className) {
//     case "percent five":
//       tipAmountResult = (billInput.value * 5) / 100;
//       // dividedTip = tipAmountResult / numberOfPeople.value;
//       tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
//       totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
//       break;

//     case "percent ten":
//       tipAmountResult = (billInput.value * 10) / 100;
//       tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
//       totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
//       break;

//     case "percent fifteen":
//       tipAmountResult = (billInput.value * 15) / 100;
//       tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
//       totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
//       break;

//     case "percent twent-five":
//       tipAmountResult = (billInput.value * 25) / 100;
//       tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
//       totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
//       break;

//     case "percent fifty":
//       tipAmountResult = (billInput.value * 50) / 100;
//       tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
//       totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
//       break;

//     default:
//       break;
//   }
// });

window.addEventListener("click", (e) => {
  let dividedBillAmount;
  let g;
  let dividedTip;
  const people = Number(numberOfPeople.value);

  if (e.target.classList.contains("five")) {
    // divide the amount in number of people
    dividedBillAmount = billInput.value / people;
    console.log(`amount divided betwen people is ${dividedBillAmount}`);
    // per person divided amount
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 5) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("ten")) {
    // divide the amount in number of people
    dividedBillAmount = billInput.value / people;
    console.log(`amount divided betwen people is ${dividedBillAmount}`);
    // per person divided amount
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 10) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount) + Number(tipAmountInner)
    }</h4>`;
  }
});

resetBtn.addEventListener("click", () => {
  billInput.value = 0;
  numberOfPeople.value = 0;
  tipAmount.innerHTML = `<h4 class="amount-money">$0.00</h4>`;
  totalMoney.innerHTML = `<h4 class="amount-money">$0.00</h4>`;
});
