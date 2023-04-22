"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const startDateInput = document.getElementById("start-date");
  const calculateBtn = document.getElementById("calculate-btn");
  const resultDiv = document.getElementById("result");

  function calculateTimeDiff() {
    const inputDate = new Date(startDateInput.value);
    // Проверяем, является ли введенное значение корректной датой
    if (!isNaN(inputDate.getTime())) {
      const timeDiff = Date.now() - inputDate.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hoursDiff = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minsDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      resultDiv.innerHTML = `От заданной вами даты прошло: ${daysDiff} дней, ${hoursDiff} часов и ${minsDiff} минут`;
    } else {
      resultDiv.innerHTML = "Введена некорректная дата";
    }
  }

  calculateBtn.addEventListener("click", calculateTimeDiff);
  startDateInput.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      calculateTimeDiff();
    }
  });
});

// В этом примере мы используем методы document.getElementById()
// для получения доступа к элементам input и div, добавляем обработчик
// события клика на кнопку calculateBtn и используем метод innerHTML
// для вывода результата в div с id resultDiv. Обратите внимание, что
// мы используем значение, введенное пользователем в элемент input,
// чтобы установить начальную дату.
// позже я добавил функцию calculateTimeDiff(), которая содержит весь
// код для вычисления временной разницы и вывода результата в resultDiv.
// Затем я добавил обработчик события keydown на startDateInput, который проверяет,
// была ли нажата клавиша Enter (код клавиши - 13) и вызывает функцию calculateTimeDiff(), если это так.
// Также я перенес обработчик клика на calculateBtn в функцию calculateTimeDiff(),
// чтобы его можно было вызвать из обоих обработчиков.
