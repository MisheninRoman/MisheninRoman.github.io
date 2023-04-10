"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Получаем список всех ячеек игрового поля
  const cells = document.querySelectorAll("td");

  // Получаем элемент сообщения об окончании игры
  const message = document.querySelector(".prj-tic__message");

  // Получаем кнопку сброса игры
  const resetButton = document.querySelector(".prj-tic__reset");

  // Устанавливаем начального игрока
  let currentPlayer = "X";

  // Функция, которая проверяет, выиграл ли игрок
  function checkWinner() {
    // Массив возможных комбинаций для победы
    const possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Проверяем каждую комбинацию на наличие в ней символов текущего игрока
    for (let i = 0; i < possibleWins.length; i++) {
      const [a, b, c] = possibleWins[i];
      if (
        cells[a].textContent === currentPlayer &&
        cells[b].textContent === currentPlayer &&
        cells[c].textContent === currentPlayer
      ) {
        return true;
      }
    }

    return false;
  }

  // Функция, которая меняет текущего игрока
  function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  // Функция-обработчик клика на ячейку
  function cellClickHandler() {
    // Если ячейка уже занята, выходим из функции
    if (this.textContent !== "") {
      return;
    }

    // Устанавливаем символ текущего игрока в ячейку
    this.textContent = currentPlayer;

    // Если текущий игрок выиграл, выводим сообщение об этом
    if (checkWinner()) {
      message.textContent = `Игрок ${currentPlayer} выиграл!`;
    }
    // Если все ячейки заполнены, выводим сообщение о ничьей
    else if ([...cells].every((cell) => cell.textContent !== "")) {
      message.textContent = "Ничья!";
    }
    // Иначе меняем текущего игрока на следующего
    else {
      switchPlayer();
    }
  }

  // Функция-обработчик клика на кнопку сброса игры
  function resetButtonClickHandler() {
    // Очищаем все ячейки
    cells.forEach((cell) => (cell.textContent = ""));

    // Очищаем сообщение об окончании игры
    message.textContent = "";

    // Устанавливаем начального игрока
    currentPlayer = "X";
  }

  // Назначаем обработчики клика на каждую ячейку игрового поля
  cells.forEach((cell) => cell.addEventListener("click", cellClickHandler));

  // Назначаем обработчик клика на кнопку сброса игры
  resetButton.addEventListener("click", resetButtonClickHandler);
});
