window.addEventListener('DOMContentLoaded', function(){
	// alert('i am here!');

	// модальное окно popup_engineer

	let popup_engineer_btn = document.querySelector('.popup_engineer_btn'),
		popup_engineer = document.querySelector('.popup_engineer'),
		popup_close = popup_engineer.querySelector('.popup_close');

	popup_engineer_btn.addEventListener('click', ()=>{
		popup_engineer.style.display = 'flex';
	});

	popup_close.addEventListener('click', () => {
		popup_engineer.style.display = 'none';
	})
});