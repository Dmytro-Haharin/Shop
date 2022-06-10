
let menu = document.querySelector('.menu');
let menuBtn = document.querySelector('.menu-btn__img');
let menuClose = document.querySelector('.menu__close');

menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
})
menuClose.addEventListener('click', function(){
	menu.classList.toggle('active');
})

let filter = document.querySelector('.filter__body');
let filterBtn = document.querySelector('.filter__heading');
let filterBody = document.querySelector('.filter__left');

filterBtn.addEventListener('click', function(){
	filter.classList.toggle('active');
})
filterBtn.addEventListener('click', function(){
	filterBody.classList.toggle('filter__left-active');
})

let FilterPartitionBodyOne = document.querySelector('.filter__partition-1')
let FilterPartitionBtnOne = document.querySelector('.filter__partition-heading_wrapper-1');

FilterPartitionBtnOne.addEventListener('click', function(){
	FilterPartitionBodyOne.classList.toggle('active');
})
let FilterPartitionBodyTwo = document.querySelector('.filter__partition-2')
let FilterPartitionBtnTwo = document.querySelector('.filter__partition-heading_wrapper-2');

FilterPartitionBtnTwo.addEventListener('click', function(){
	FilterPartitionBodyTwo.classList.toggle('active');
})
let FilterPartitionBodyThree = document.querySelector('.filter__partition-3')
let FilterPartitionBtnThree = document.querySelector('.filter__partition-heading_wrapper-3');

FilterPartitionBtnThree.addEventListener('click', function(){
	FilterPartitionBodyThree.classList.toggle('active');
})

let FilterRightBtnOne = document.querySelector('.filter-right__heading-1');
let FilterRightBodyOne = document.querySelector('.filter-right__item-1');

FilterRightBtnOne.addEventListener('click', function(){
	FilterRightBodyOne.classList.toggle('active');
})

let FilterRightBtnTwo = document.querySelector('.filter-right__heading-2');
let FilterRightBodyTwo = document.querySelector('.filter-right__item-2');

FilterRightBtnTwo.addEventListener('click', function(){
	FilterRightBodyTwo.classList.toggle('active');
})

let FilterRightBtnThree = document.querySelector('.filter-right__heading-3');
let FilterRightBodyThree = document.querySelector('.filter-right__item-3');

FilterRightBtnThree.addEventListener('click', function(){
	FilterRightBodyThree.classList.toggle('active');
})