// Dropdown list misk-aside

const miskParagrafList = Array.from(document.querySelectorAll('.misc__aside-list p'));
const miskLinks = Array.from(document.querySelectorAll('.misc__aside-list a'));

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

