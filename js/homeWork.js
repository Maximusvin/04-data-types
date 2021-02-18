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

const btn2 = document.querySelector(".js2");

btn2.addEventListener("click", () => {
  const orderPrice = prompt("Ваша сума замовлення?");

  if (orderPrice === null) {
    alert("Зачекайте! Куди ви зыбрались? Платити хто буде? ");
  } else if (orderPrice.trim().length === 0) {
    alert("Чим ви маєте розраховуватись? ");
  } else if (orderPrice < 500) {
    alert(
      `Ваша знижка 1%. До розрахунку ${orderPrice - orderPrice * 0.01} грн`
    );
  } else if (orderPrice > 500 && orderPrice < 1000) {
    alert(
      `Ваша знижка 5%. До розрахунку ${orderPrice - orderPrice * 0.05} грн`
    );
  } else if (orderPrice > 1000) {
    alert(
      `Ваша знижка 10%. До розрахунку ${
        orderPrice - orderPrice * 0.1
      } грн та подарунковий сертифікат на 200 грн`
    );
  } else {
    alert('Ми приймеєм лише кошти. Ваше "Дякую" нас не цікавить');
  }
});

// task-3
/* 
Створити тест на знання будь-чого, юзер має відповісти на
5 питань, вірна відповідь - 1 бал, якщо юзер відповість
правильно на всі 5 запитань - додатково додати 1
бонусний бал.
*/

const btn3 = document.querySelector(".js3");

btn3.addEventListener("click", () => {
  const question1 = prompt("1. Який це буде колір #fff");

  const question2 = confirm(
    "2. Тег div це строковий тег? Якщо так - жми Ок, якщо ні - клікай на відміну"
  );
  const question3 = prompt("3. Що виведе консоль? ('' + 1 + 0)");
  const question4 = prompt("4. Скільки буде 2 + 2 * 2 + 2 * 2");
  const question5 = prompt("5.  Скільки буде (2 + 2) * (2 + 2) * 2");

  let totalPoint = null;

  if (!question1) {
    totalPoint;
  } else if (question1.toLowerCase() === "білий") {
    totalPoint += 1;
  }

  if (question2) {
    totalPoint += 1;
  }

  if (question3 === "10") {
    totalPoint += 1;
  }

  if (question4 === "10") {
    totalPoint += 1;
  }

  if (question5 === "18") {
    totalPoint += 1;
  }

  if (totalPoint === 5) {
    totalPoint += 1;
  }

  alert(`Ви набрали ${totalPoint} балів`);
});

// task-4
/* 
Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
*/

const btn4 = document.querySelector(".js4");

btn4.addEventListener("click", () => {
  const count = prompt("Введіть трьохзгачне число");

  if (!count || !count.trim()) {
    alert("Ви нічого не ввели. Спробуйте ще");
  } else if (Number.isNaN(+count)) {
    alert("Введіть число, а не текст");
  }

  const countArr = count.split("");

  if (
    countArr[0] === countArr[1] ||
    countArr[0] === countArr[2] ||
    countArr[1] === countArr[2]
  ) {
    alert("Дане число містить однакові цифри");
  }
});

// task-5
/* 
Запитатись у юзера одну кнопоку від 1 до = на клавіатурі 
та вивести що буде при нажиманні цифри разом з шифтом.
*/

const btn5 = document.querySelector(".js5");

btn5.addEventListener("click", () => {
  const keyPressed = prompt("Нажміть одну із кнопок від 1 до =");

  if (+keyPressed === 1) {
    alert("!");
  } else if (+keyPressed === 2) {
    alert("@");
  } else if (+keyPressed === 3) {
    alert("#");
  } else if (+keyPressed === 4) {
    alert("$");
  } else if (+keyPressed === 5) {
    alert("%");
  } else if (+keyPressed === 6) {
    alert("^");
  } else if (+keyPressed === 7) {
    alert("&");
  } else if (+keyPressed === 8) {
    alert("*");
  } else if (+keyPressed === 9) {
    alert("(");
  } else if (+keyPressed === 0) {
    alert(")");
  } else if (keyPressed === "-") {
    alert("_");
  } else if (keyPressed === "=") {
    alert("+");
  } else {
    alert("Щось пішло не так. Потрібно тиснути клавішу від 1 до =");
  }
});
