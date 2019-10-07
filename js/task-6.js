"use strict";

let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число:");
  if (isNaN(input) || input === "") {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(+input);
  }
} while (input != null);
  for (let element of numbers) {
    total += element;
  };
  if (total != 0) {
    alert(`Общая сумма чисел равна ${total}`);
  } else {
    alert('Вы не ввели ни одного числа!');
  }
