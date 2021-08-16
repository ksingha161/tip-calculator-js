const billInput = document.querySelector(".total");
const btnFive = document.querySelector(".five");
const resetBtn = document.querySelector(".reset");
let tipAmount = document.querySelector(".amount-money");
let totalMoney = document.querySelector(".total-money");

window.addEventListener("click", (e) => {
  let tipAmountResult;
  switch (e.target.className) {
    case "percent five":
      tipAmountResult = (billInput.value * 5) / 100;
      tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
      totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
      break;

    case "percent ten":
      tipAmountResult = (billInput.value * 10) / 100;
      tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
      totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
      break;

    case "percent fifteen":
      tipAmountResult = (billInput.value * 15) / 100;
      tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
      totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
      break;

    case "percent twent-five":
      tipAmountResult = (billInput.value * 25) / 100;
      tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
      totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
      break;

    case "percent fifty":
      tipAmountResult = (billInput.value * 50) / 100;
      tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
      totalMoney.innerHTML = `<h4 class="total-money">$${billInput.value}</h4>`;
      break;

    default:
      break;
  }
});

resetBtn.addEventListener("click", () => {
  tipAmount.innerHTML = `<h4 class="amount-money">$0</h4>`;
  totalMoney.innerHTML = `<h4 class="amount-money">$0</h4>`;
});
