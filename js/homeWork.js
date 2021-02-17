// task-1
/* 
Написати конвертер валют - пишете скільки у вас є
гривень і які очікуємо можливі конвертації - у долар, євро,
нафту(brent), золото. Додатково зробити перевірку чи не
обманює вас юзер і перевіряти чи не прийшов вам null or
undefined.
*/

const btn1 = document.querySelector(".js1");

const currency = [
  { curr: "dollar", idx: 0.6 },
  { curr: "euro", idx: 0.85 },
  { curr: "brent", idx: 0.34 },
  { curr: "gold", idx: 0.23 },
];

btn1.addEventListener("click", () => {
  const amountMoney = prompt("Скільки у вас коштів?");

  if (!amountMoney) {
    alert("Можливо спробуєте ще раз?");
    return;
  }

  if (Number.isNaN(+amountMoney)) {
    alert(
      "Ви ввели не число. Прохання повторити операцію та ввести коректну суму "
    );
    return;
  }

  if (!amountMoney.trim()) {
    alert(
      "Ви нічого не ввели. Прохання повторити операцію та ввести суму коштів"
    );
    return;
  }

  let currentDirection = prompt(
    `Вкажіть бажаний напрямок конвертації: ${currency
      .map((item) => item.curr)
      .join(", ")}`
  );

  if (!currentDirection) {
    alert("Можливо спробуєте ще раз?");
    return;
  }

  if (!currentDirection.trim()) {
    alert(
      "Ви нічого не ввели. Прохання повторити операцію та ввести коректні дані"
    );
    return;
  }

  currentDirection = currentDirection.toLowerCase();

  if (currentDirection === currency[0].curr) {
    alert(
      `Сума після конвертації становитиме: ${(
        amountMoney * currency[0].idx
      ).toFixed(2)} ${currency[0].curr}`
    );
  } else if (currentDirection === currency[1].curr) {
    alert(
      `Сума після конвертації становитиме: ${(
        amountMoney * currency[1].idx
      ).toFixed(2)} ${currency[1].curr}`
    );
  } else if (currentDirection === currency[2].curr) {
    alert(
      `Сума після конвертації становитиме: ${(
        amountMoney * currency[2].idx
      ).toFixed(2)} ${currency[2].curr}`
    );
  } else if (currentDirection === currency[3].curr) {
    alert(
      `Сума після конвертації становитиме: ${(
        amountMoney * currency[3].idx
      ).toFixed(2)} ${currency[3].curr}`
    );
  } else {
    alert(
      "Невірний напрямок. Прохання повторити операцію та ввести коректний напрямок"
    );
    return;
  }
});

// task-2
/* 
Спитатись у юзера суму замовлення і вивести результат з
урахуванням знижки : до 500 гривень знижка -1 %, від 500
до 1000 - 5%, більше 1000 - 10% та подарунковий
сертифікат на 200 гривень у подарунок!
*/
