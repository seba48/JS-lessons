window.onload = function() {
    let items = document.querySelectorAll(".menu-item"),
        menu = document.querySelector(".menu");

    menu.insertBefore(items[1], items[3]);

    let newLi =  document.createElement('li');

    newLi.textContent = 'Пятый пункт';
    console.log(newLi);

    menu.appendChild(newLi);

    newLi.classList.add('menu-item');
    
    document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

    let title = document.getElementById('title');
    title.textContent = 'Мы продаем только подлинную технику Apple';

    document.querySelector('.adv').remove();

    let answer = prompt('Как вы относитесь к технике Apple?'),

    message = document.getElementById('prompt');

    message.textContent = answer;
    
};