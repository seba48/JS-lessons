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
});