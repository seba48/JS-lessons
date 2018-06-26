function modal () {
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';

    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';

    });

    let descriptionBtnParent = document.querySelector('.info');

    descriptionBtnParent.addEventListener('click', function(event) {
        let target = event.target,
            action = target.getAttribute('class');

        if (action == 'description-btn') {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });



}
module.exports = modal;