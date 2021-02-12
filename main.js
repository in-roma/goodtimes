// Dynamic view navigation bar

const header = document.querySelector('.header');
const desktopHeader = document.querySelector('.header-desktop');
desktopHeader.innerHTML = header.innerHTML;

inView('.header')
	.on('enter', (el) => desktopHeader.classList.remove('visible'))
	.on('exit', (el) => desktopHeader.classList.add('visible'));
