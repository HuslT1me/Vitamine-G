function menuToggle () {
	$('.js-menu').toggleClass('is-active')
	$('.mobile-menu').toggleClass('opened');
}

$( document ).ready(function() {
	$('.js-menu').click(menuToggle);
});