function amountAfterTaxes(amount = 0, fedTax = 0, stateTax = 0, localTax = 0) {
  return amount + (amount * (fedTax + stateTax + localTax)) / 100;
}

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

console.log(amountAfterTaxes(amount)); //25.12
console.log(amountAfterTaxes(amount, fedTax)); //27.63
console.log(amountAfterTaxes(amount, fedTax, stateTax)); //28.13
console.log(amountAfterTaxes(amount, fedTax, stateTax, localTax)); //28.26
