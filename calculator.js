window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const defaultValues = {amount: 100000, years: 10, rate: 5};
  let amount = document.getElementById('loan-amount');
  amount.value = defaultValues.amount;
  let years = document.getElementById('loan-years')
  years.value = defaultValues.years;
  let rate = document.getElementById('loan-rate')
  rate.value = defaultValues.rate;

  update();
}

function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

function calculateMonthlyPayment(values) {
  let months = Math.floor(values.years * 12);
  let monthlyRate = (values.rate/100)/12;
  return ((monthlyRate * values.amount) /
  (1 - Math.pow((1 + monthlyRate), -months))).toFixed(2);

}

function updateMonthly(monthly) {
let monthlyPayment = document.getElementById('monthly-payment');
monthlyPayment.innerText = "$" + monthly;
}
