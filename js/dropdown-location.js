
const choicesElement = document.querySelector('.choices');
const choicesInner = document.querySelector('.choices__inner');
const choicesList = document.querySelector('.choices__list--dropdown');
const choicesSingleItem = document.querySelector('.choices__list--single .choices__item');
const choicesDropdownList = Array.from(document.querySelectorAll('.choices__list--dropdown .choices__item'));

choicesElement.addEventListener('click', openLocationList);

// Открываем список локаций

function openLocationList() {
  choicesElement.classList.toggle('is-open');
  let n = "true" === choicesElement.getAttribute("aria-expanded");
  choicesElement.setAttribute("aria-expanded", !n);
  choicesList.classList.toggle('is-active');
}

choicesDropdownList.forEach(item => {
  item.addEventListener('click', selecteDropdownItem );
})

// Выбираем элемент из выпадающего списка 

function selecteDropdownItem(evt) {
  if(evt.target.dataset.value !== choicesSingleItem.dataset.value) {
    choicesDropdownList.forEach(item => {
      item.classList.remove('is-selected');
      item.classList.add('is-highlighted');
    })
    evt.target.classList.add('is-selected');
    evt.target.classList.remove('is-highlighted');
    choicesSingleItem.textContent = evt.target.textContent;
    choicesSingleItem.dataset.value = evt.target.dataset.value;
  }
}

// Отслеживаем клик вне выпадающего списка

window.addEventListener('click', (evt) => {
  console.log();
  if(!evt.target.closest('.choices') && choicesElement.className.includes('is-open')) {
    console.log('hi');
    choicesElement.classList.remove('is-open');
    let n = "true" === choicesElement.getAttribute("aria-expanded");
    choicesElement.setAttribute("aria-expanded", !n);
    choicesList.classList.remove('is-active');
  }
})