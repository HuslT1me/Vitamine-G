function menuToggle () {
	$('.js-menu').toggleClass('is-active');
	$('.bg-menu').toggleClass('active');
	$('.mobile-menu').toggleClass('opened');
}

const btns = document.querySelectorAll('.js-menu');

btns.forEach(item => {
	item.addEventListener('click', menuToggle)
})

const menuBottomElem = document.querySelector('.mobile-menu__bottom-row');
const menuItemElems = Array.from(menuBottomElem.querySelectorAll('.nav__link'));

menuItemElems.forEach(item => {
	item.addEventListener('click', () => {
		$('.mobile-menu').removeClass('opened');
	})
})