'use strict'

function sendMessage() {
    const name = document.forms["contact-form"]["name"].value;
    const email = document.forms["contact-form"]["email"].value;
    const phone = document.forms["contact-form"]["phone"].value;
    const message = document.forms["contact-form"]["message"].value;
    const url = `https://api.telegram.org/bot5849871032:AAE4V9B8TW-ltvxv8e4ix9Ubifyo0jMD2Xk/sendMessage?chat_id=@RomaNotific&text=
        Имя: ${name}
        Email: ${email}
        Номер телефона: ${phone}
        Сообщение: ${message}`
    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}