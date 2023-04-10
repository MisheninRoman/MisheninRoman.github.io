"use strict";
// // Получить все кнопки аккордеона
// var acc = document.getElementsByClassName("accordion");

// // Добавить обработчик события click к каждой кнопке аккордеона
// for (var i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     // Переключить класс "active" для текущей кнопки
//     this.classList.toggle("active");

//     // Найти следующий элемент панели (следующий элемент после кнопки)
//     var panel = this.nextElementSibling;

//     // Если панель отображается, скрыть ее, и наоборот
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $(".panel").hide(); // Скрыть все панели при загрузке страницы

    $(".accordion").click(function () {
      if ($(this).hasClass("active")) {
        // Если текущий аккордион уже открыт
        $(this).removeClass("active"); // Закрыть текущий аккордион
        $(this).next(".panel").slideUp(250); // Скрыть его панель с анимацией
      } else {
        // Если текущий аккордион закрыт
        $(".accordion.active").removeClass("active"); // Закрыть предыдущий аккордион
        $(".panel").slideUp(250); // Скрыть его панель с анимацией
        $(this).addClass("active"); // Открыть текущий аккордион
        $(this).next(".panel").slideDown(250); // Показать его панель с анимацией
      }
    });
  });
});
