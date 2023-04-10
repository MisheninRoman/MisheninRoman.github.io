// Получить все кнопки аккордеона
var acc = document.getElementsByClassName("accordion");

// Добавить обработчик события click к каждой кнопке аккордеона
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Переключить класс "active" для текущей кнопки
    this.classList.toggle("active");

    // Найти следующий элемент панели (следующий элемент после кнопки)
    var panel = this.nextElementSibling;

    // Если панель отображается, скрыть ее, и наоборот
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
