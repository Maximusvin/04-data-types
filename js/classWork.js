// task-1
/* 
Емуляція гри в кубики, юзер клацає на конфірм та отримує
2 результати (кубики стандартні 1-6 значення на них.)
Якщо випадає 2 шестірки , вивести додаткове повідомлення
що це - джекпот!
*/

const btn1 = document.querySelector(".jsc1");

const max = 6;
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
