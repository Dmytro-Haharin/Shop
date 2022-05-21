let menuBtn = document.querySelector('.menu-btn__img');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu__close');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})
menuClose.addEventListener('click', function(){
	menu.classList.toggle('active');
})

alert("незнаю насколько правильно я сделал семантику, хотел бы услышать фитбек")