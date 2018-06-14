// window.addEventListener('DOMContentLoaded', function() {
//     let age = document.getElementById('age');

//     function showUser(surname, name){
//         // this.value = age.value;
//         alert('user: ' + surname + ' ' + name + ', ' + 'his age is ' + this.value);
//     };

//     showUser.call(age, 'Ivanov', 'Ivan');
// });
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv() {
        let div = document.createElement('div');
        div.style.cssText = `height: ${this.height}px;\
        					width: ${this.width}px;\
        					background: ${this.bg};\
        					font-size: ${this.fontSize};\
        					text-align: ${this.textAlign};`;

        div.textContent = "this is element wich was created and stylized by JavaScript";
        document.body.appendChild(div);
    }
};

const newDiv = new Options(200, 200, 'gray', 'large', 'center');

newDiv.makeDiv();