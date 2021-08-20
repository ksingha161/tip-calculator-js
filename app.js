const billInput = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");
const numberOfPeople = document.querySelector(".total-people");
const tipAmount = document.querySelector(".amount-money");
const totalMoney = document.querySelector(".total-money");
const custom = document.querySelector(".custom");
const percentage = document.querySelector(".percentage");
const newElement = document.createElement(`input`);

let dividedBillAmount;

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("five")) {
    divideBillAmount();
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 5) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("ten")) {
    divideBillAmount();
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 10) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("fifteen")) {
    divideBillAmount();
    console.log(`amount divided betwen people is ${dividedBillAmount}`);
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 15) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("twent-five")) {
    divideBillAmount();
    console.log(`amount divided betwen people is ${dividedBillAmount}`);
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 25) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("fifty")) {
    divideBillAmount();
    console.log(`amount divided betwen people is ${dividedBillAmount}`);
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * 50) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  } else if (e.target.classList.contains("custom")) {
    createCustom();
  }
});

function divideBillAmount() {
  const people = Number(numberOfPeople.value);
  dividedBillAmount = billInput.value / people;
  console.log(`divided bill is ${dividedBillAmount}`);
}

function createCustom() {
  newElement.classList.add("total");
  newElement.classList.add("custom-total");
  newElement.style.margin = "auto";
  newElement.style.marginBottom = "0.75rem";
  newElement.style.maxWidth = "21.125rem";
  percentage.appendChild(newElement);
  const customTotal = document.querySelector(".custom-total").value;
  const customTotalNumber = Number(customTotal);
  const calculateBtn = document.querySelector(".calculate");
  calculateBtn.addEventListener("click", () => {
    const people = Number(numberOfPeople.value);
    dividedBillAmount = billInput.value / people;
    const tipAmountInner = (tipAmount.innerHTML =
      (dividedBillAmount * customTotalNumber) / 100);
    totalMoney.innerHTML = `<h4 class="amount-money">$${
      Number(dividedBillAmount.toFixed(2)) + Number(tipAmountInner.toFixed(2))
    }</h4>`;
  });
}

resetBtn.addEventListener("click", () => {
  billInput.value = 0;
  numberOfPeople.value = 0;
  tipAmount.innerHTML = `<h4 class="amount-money">$0.00</h4>`;
  totalMoney.innerHTML = `<h4 class="amount-money">$0.00</h4>`;
  percentage.removeChild(newElement);
});
