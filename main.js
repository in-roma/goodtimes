// Register window display animation
let frontE1 = document.querySelector('.front');

const registerButton = document.querySelector('.register-button');
registerButton.addEventListener('click', (event) => {
	event.preventDefault();
	frontE1.classList.add('slide-up');
});

const buyButton = document.querySelector('.buy-button');
buyButton.addEventListener('click', (event) => {
	event.preventDefault();
	frontE1.classList.remove('slide-up');
});

// Dynamic view navigation bar

const header = document.querySelector('.header');
const desktopHeader = document.querySelector('.header-desktop');
desktopHeader.innerHTML = header.innerHTML;

inView('.header')
	.on('enter', (el) => desktopHeader.classList.remove('visible'))
	.on('exit', (el) => desktopHeader.classList.add('visible'));

// Tilt effect on pictures

VanillaTilt.init(document.querySelectorAll('.image'), {
	max: 35,
	speed: 800,
	glare: true,
	easing: 'cubic-bezier(.03,.98,.52,.99)',
});

// Fade in pictures

inView('.fade')
	.on('enter', (img) => img.classList.add('visible'))
	.on('exit', (img) => img.classList.remove('visible'));
