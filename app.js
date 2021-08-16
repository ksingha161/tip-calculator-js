const billInput = document.querySelector(".total");
const btnFive = document.querySelector(".five");
let tipAmount = document.querySelector(".amount-money");

btnFive.addEventListener("click", () => {
  let tipAmountResult = (billInput.value * 5) / 100;
  tipAmount.innerHTML = `<h4 class="amount-money">$${tipAmountResult}</h4>`;
});
