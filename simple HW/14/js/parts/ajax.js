function ajax(){
        let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо, скоро мы с вами свяжемся!';
    message.failur = 'что-то пошло не так(((';

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {

            e.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);

            function postData(data) {

                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();

                    request.open("POST", 'server.php');

                    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

                    request.onreadystatechange = function() {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();

                            } else {
                                reject();
                            }
                        }
                    }

                    request.send(data);
                });
            } //END postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failur)
                .then(clearInput)
        });
    }

    sendForm(form);


    let contactForm = document.getElementById('form'),
        email = contactForm.getElementsByTagName('input')[0],
        phone = contactForm.getElementsByTagName('input')[1],
        formDiv = document.getElementsByClassName('contact-form')[0];


    sendForm(contactForm);
}
module.exports = ajax;