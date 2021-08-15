const billInput = document.querySelector(".total");
const btnFive = document.querySelector(".five");
let tipAmount = document.querySelector(".amount-money");

btnFive.addEventListener("click", () => {
  tipAmount.innerHTML = (billInput.value * 5) / 100;
});
