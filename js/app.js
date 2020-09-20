const wrapper = document.querySelector("body");
const burger = document.querySelector(".header_burger");
const menu = document.querySelector(".header_nav");

	burger.addEventListener("click", function(){
		wrapper.classList.toggle("lock");
		burger.classList.toggle("_active");
		menu.classList.toggle("_active");
	});


AOS.init({
	duration: 500,
  	easing: 'ease-out',
  	delay: 100,
});