const level_50 = 50;
const level_100 = 100;
const level_200 = 200;
const level_300 = 300;
const level_400 = 400;
const over_400 = 401;

const priceLevel_50 = 1678;
const priceLevel_100 = 1734;
const priceLevel_200 = 2014;
const priceLevel_300 = 2536;
const priceLevel_400 = 2834;
const priceOver_400 = 2927;

function caculatorKwh() {
  let kwh = Number(document.querySelector("#kwh").value);
  let payAmount = document.querySelector("#payAmount");
  switch (true) {
    case kwh >= 0 && kwh <= level_50: {
      payAmount.value = kwh * priceLevel_50;
      break;
    }
    case kwh <= level_100: {
      payAmount.value =
        (kwh - level_50) * priceLevel_100 + level_50 * priceLevel_50;
      break;
    }
    case kwh <= level_200: {
      payAmount.value =
        (kwh - level_100) * priceLevel_200 +
        level_100 * priceLevel_100 +
        level_50 * priceLevel_50;
      break;
    }
    case kwh <= level_300: {
      payAmount.value =
        (kwh - level_200) * priceLevel_300 +
        level_200 * priceLevel_200 +
        level_100 * priceLevel_100 +
        level_50 * priceLevel_50;
      break;
    }
    case kwh <= level_400: {
      payAmount.value =
        (kwh - level_300) * priceLevel_400 +
        level_300 * priceLevel_300 +
        level_200 * priceLevel_200 +
        level_100 * priceLevel_100 +
        level_50 * priceLevel_50;
    }
    case kwh > over_400: {
      payAmount.value =
        (kwh - level_400) * priceOver_400 +
        level_400 * priceLevel_400 +
        level_300 * priceLevel_300 +
        level_200 * priceLevel_200 +
        level_100 * priceLevel_100 +
        level_50 * priceLevel_50;
      break;
    }
    default: {
      payAmount.value = "Số kwh không hợp lệ";
    }
  }
}
