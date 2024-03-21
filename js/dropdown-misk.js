// Dropdown list misk-aside

const miskParagrafList = Array.from(document.querySelectorAll('.misc__aside-list p'));
const miskLinks = Array.from(document.querySelectorAll('.misc__aside-list a'));
const miscTextEl = document.querySelector('.misc__text');
console.log(miscTextEl);

$('.nav__link').on('click', function(e){
    e.preventDefault();

	const listActiveElems = Array.from(document.querySelectorAll('.misc__aside-list.list-active'));
	listActiveElems.forEach(item => {
		item.classList.remove('list-active');
	});

    $('.nav__link').removeClass('tab--active');
    $('.misc__aside').removeClass('misc__aside--active');

	$('.misc__aside-list:first-child').addClass('list-active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('misc__aside--active')
	
	const miscAsideActiveEl = document.querySelector('.misc__aside--active');
	const linkActiveElems = miscAsideActiveEl.querySelector('.misc__aside-list.list-active a');
	linkActiveElems.classList.add('link-active');
})


miskParagrafList.forEach(list => {
	list.addEventListener('click', openList)
})

miskLinks.forEach(link => {
	link.addEventListener('click', isActiveLink)
})

function openList(evt) {
	const misc = evt.target.closest('.misc__aside-list');
	misc.classList.toggle('list-active');
}

function isActiveLink(evt){
	evt.preventDefault();
	miskLinks.forEach(link => {
		link.classList.remove('link-active');
	})
	evt.target.classList.toggle('link-active');
}

