window.addEventListener('DOMContentLoaded', function() {
    let age = document.getElementById('age');

    function showUser(surname, name){
        // this.value = age.value;
        alert('user: ' + surname + ' ' + name + ', ' + 'his age is ' + this.value);
    };

    showUser.call(age, 'Ivanov', 'Ivan');
});