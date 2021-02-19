// task-1
/* 
Емуляція гри в кубики, юзер клацає на конфірм та отримує
2 результати (кубики стандартні 1-6 значення на них.)
Якщо випадає 2 шестірки , вивести додаткове повідомлення
що це - джекпот!
*/

const btn1 = document.querySelector(".jsc1");

const num1 = 6;
const min = 1;

btn1.addEventListener("click", () => {
  confirm("Кидайте кубики (жмакніть Ок)");
  const dice1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const dice2 = Math.floor(Math.random() * (max - min + 1)) + min;

  if (dice1 === 6 && dice2 === 6) {
    alert(`ДЖЕК ПОТ!!! Випало ${dice1} та ${dice2}`);
  } else {
    alert(`Випало ${dice1} та ${dice2}`);
  }
});

// task-2
/* 
Створіть програму яка запитує у юзера 2 значення та
виводить рандомно число між цими 2 значеннями. 

*/

const btn2 = document.querySelector(".jsc2");

btn2.addEventListener("click", () => {
  const num1 = Number(prompt("Введіть перше число"));
  const num2 = Number(prompt("Введіть друге число"));

  const randomNum = Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
  alert(`Число в проміжку між ${num1} та ${num2} становить ${randomNum}`);
});

// task-3
/* 
Створити масив у якому буде 3 юзера описані як обєкти з
такими полями - age, name, hobby (теж повинно бути
масивом ).

*/

const btn3 = document.querySelector(".jsc3");

const users = [
  { id: 1, age: 23, name: "Max", hobby: ["1", "2", "3"] },
  { id: 2, age: 45, name: "Pitter", hobby: ["1", "2", "3"] },
  { id: 3, age: 67, name: "Parker", hobby: ["1", "2", "3"] },
];

btn3.addEventListener("click", () => {
  const userId = +prompt("Вкажыть id користувача (1, 2 або 3)");

  if (userId === 1) {
    alert(
      `Користувач ${users[0].name}. Вік: ${
        users[0].age
      } Хобі: ${users[0].hobby.join(", ")}`
    );
  } else if (userId === 2) {
    alert(
      `Користувач ${users[1].name}. Вік: ${
        users[1].age
      } Хобі: ${users[1].hobby.join(", ")}`
    );
  } else if (userId === 3) {
    alert(
      `Користувач ${users[2].name}. Вік: ${
        users[2].age
      } Хобі: ${users[2].hobby.join(", ")}`
    );
  } else {
    alert("Такого юзера не існує");
  }
});
