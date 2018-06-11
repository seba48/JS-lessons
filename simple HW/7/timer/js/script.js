window.addEventListener('DOMContentLoaded', function() {
    // let date = new Date();



    // function addZero(a) {
    //     if (a < 10) {
    //         a = '0' + a;
    //     }
    //     return a;
    // };


    // let timerId = setInterval(function () {
    //     document.body.textContent = (date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    //     location.reload();


    // }, 1000);
    function showTime() {
        let clock = document.getElementById('clock');

        let date = new Date(); // (*)

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        clock.children[0].innerHTML = hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;
        clock.children[1].innerHTML = minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;
        clock.children[2].innerHTML = seconds;
    }

    let timerId;

    function clockStart() { // запустить часы
        timerId = setInterval(showTime, 1000);
        showTime(); // (*)
    }

    clockStart();

    function clockStop() {
        clearInterval(timerId);
        timerId = null;
    }

});