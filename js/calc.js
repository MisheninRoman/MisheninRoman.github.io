"use strict"; // Включение строгого режима, обеспечивающего более строгую проверку синтаксиса и более безопасное поведение.

document.addEventListener("DOMContentLoaded", () => {
  // Добавление слушателя событий, который вызовет функцию обратного вызова после загрузки всего DOM-дерева.
  let display = document.getElementById("prj-calc__calc-disp"); // Нахождение элемента с идентификатором "prj-wrap__calc-disp" и присвоение его переменной "display".
  let btns = Array.from(
    document.getElementsByClassName("prj-calc__calc-btns__btn")
  ); // Получение массива элементов с классом "prj-wrap__calc-btns__btn" и преобразование его в массив с помощью "Array.from()", затем присвоение результата переменной "btns".

  btns.map((button) => {
    // Использование метода "map()" массива "btns" для перебора всех элементов в массиве.
    button.addEventListener("click", (e) => {
      // Добавление слушателя событий "click" на каждую кнопку в массиве.
      switch (
        e.target.innerText // Определение действия, связанного с текстом кнопки, которую нажали.
      ) {
        case "C": // Если текст кнопки - "C"...
          display.innerText = ""; // Очистка значения "innerText" элемента "display".
          break; // Завершение оператора "switch".
        case "=": // Если текст кнопки - "="...
          try {
            // Попытка выполнить следующий код.
            display.innerText = eval(display.innerText); // Вычисление выражения, заданного в "innerText" элемента "display" и присвоение результата "innerText" элемента "display".
          } catch {
            // Если вычисление не удалось...
            display.innerText = "Error"; // Задание "Error" в качестве "innerText" элемента "display".
          }
          break; // Завершение оператора "switch".
        case "Del": // Если текст кнопки - "Del"...
          if (display.innerText) {
            // Если "innerText" элемента "display" не является пустой строкой...
            display.innerText = display.innerText.slice(0, -1); // Удаление последнего символа из "innerText" элемента "display".
          }
          break; // Завершение оператора "switch".
        default: // Если текст кнопки не соответствует ни одному из предыдущих условий...
          display.innerText += e.target.innerText; // Добавление текста кнопки к текущему значению "innerText" элемента "display".
      }
    });
  });
});
