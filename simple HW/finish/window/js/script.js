window.addEventListener('DOMContentLoaded', function() {
    // alert('i am here!');

    //=======================  модальное окно popup_engineer  =============

    let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
        popup_engineer = document.querySelector('.popup_engineer'),
        popup_engineer_close = popup_engineer.querySelector('.popup_close');

    popup_engineer_btn.addEventListener('click', () => {
        popup_engineer.style.display = 'flex';
    });

    popup_engineer_close.addEventListener('click', () => {
        popup_engineer.style.display = 'none';
    });
    // =====================================================================

    // =======================  модальное окно popup  ======================

    let phone_link = document.querySelectorAll('.phone_link'),
        popup = document.querySelector('.popup'),
        popup_close = popup.querySelector('.popup_close');

    phone_link[0].addEventListener('click', () => {
        popup.style.display = 'flex';
    });
    phone_link[1].addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    popup_close.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // =====================================================================
    // ==================  отправка форм по средствам AJAX  ================

    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо, скоро мы с вами свяжемся!';
    message.failur = 'что-то пошло не так(((';

    let form = document.querySelector('.form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        //AJAX
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMessage.innerHTML = message.success;
                    // Добавляем контент на страницу
                } else {
                    statusMessage.innerHTML = message.failur;
                }
            }
        }
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
            // очищаем поля ввода
        }
    });

});