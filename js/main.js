'use strict';

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let getRandomNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function gameRandom() {
  let randomNumber = getRandomNum(1, 100);
  console.log(randomNumber);
  return function checkNumber() {
    let userNumber = prompt('Угадай число от 1 до 100');
    let num = +userNumber;
    if (isNumber(userNumber)) {
      if (num > randomNumber) {
        alert('Вы не угадали!Число МЕНЬШЕ');
      } else if (num < randomNumber) {
        alert('Вы не угадали!Число БОЛЬШЕ');
      } else if (num === randomNumber ) {
        alert('Вы угадали!игра окончена,спасибо за игру');
      }
      
    } else {
      if (userNumber === null) return alert('Пока друг!');
      alert('Введи число');
      checkNumber();
    }
  }
};
let game = gameRandom();

game();