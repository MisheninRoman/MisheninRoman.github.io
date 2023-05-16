"use strict";

let isFormSubmitted = false;

function sendMessage() {
  const name = document.forms["contact-form"]["name"].value;
  const email = document.forms["contact-form"]["email"].value;
  const phone = document.forms["contact-form"]["phone"].value;
  const message = document.forms["contact-form"]["message"].value;

  if (!name || !email || !phone || !message) {
    alert("Заполните все строки");
    return;
  }

  const url = `https://api.telegram.org/bot5849871032:AAE4V9B8TW-ltvxv8e4ix9Ubifyo0jMD2Xk/sendMessage?chat_id=@RomaNotific&text=
        Имя: ${name}%0D%0A
        Email: ${email}%0D%0A
        Номер телефона: ${phone}%0D%0A
        Сообщение: ${message}`;
  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
    if (
      Http.readyState === XMLHttpRequest.DONE &&
      Http.status === 200 &&
      !isFormSubmitted
    ) {
      isFormSubmitted = true;
      alert("Заявка успешно отправлена");
    }
  };
}
