const income_5tr = 5000000;
const income_10tr = 10000000;
const income_18tr = 18000000;
const income_32tr = 32000000;
const income_52tr = 52000000;
const income_80tr = 80000000;

const tax_5tr = 0.05;
const tax_10tr = 0.1;
const tax_18tr = 0.15;
const tax_32tr = 0.2;
const tax_52tr = 0.25;
const tax_80tr = 0.3;
const taxover_81tr = 0.35;

function formula() {
  let money = Number(document.querySelector("#money").value);
  let payTaxes = document.querySelector("#payTaxes");
  switch (true) {
    case money >= 0 && money <= income_5tr: {
      payTaxes.value = money * tax_5tr;
      break;
    }
    case money <= income_10tr: {
      payTaxes.value = (money - income_5tr) * tax_10tr + income_5tr * tax_5tr;
      break;
    }
    case money <= income_18tr: {
      payTaxes.value =
        (money - income_10tr) * tax_18tr +
        income_10tr * tax_10tr +
        income_5tr * tax_5tr;
      break;
    }
    case money <= income_32tr: {
      payTaxes.value =
        (money - income_18tr) * tax_32tr +
        income_18tr * tax_18tr +
        income_10tr * tax_10tr +
        income_5tr * tax_5tr;
      break;
    }
    case money <= income_52tr: {
      payTaxes.value =
        (money - income_32tr) * tax_52tr +
        income_32tr * tax_32tr +
        income_18tr * tax_18tr +
        income_10tr * tax_10tr +
        income_5tr * tax_5tr;
      break;
    }
    case money <= income_80tr: {
      payTaxes.value =
        (money - income_52tr) * tax_80tr +
        income_52tr * tax_52tr +
        income_32tr * tax_32tr +
        income_18tr * tax_18tr +
        income_10tr * tax_10tr +
        income_5tr * tax_5tr;
      break;
    }
    case money > income_80tr: {
      payTaxes.value =
        (money - income_80tr) * taxover_81tr +
        income_80tr * tax_80tr +
        income_52tr * tax_52tr +
        income_32tr * tax_32tr +
        income_18tr * tax_18tr +
        income_10tr * tax_10tr +
        income_5tr * tax_5tr;
      break;
    }
  }
}
