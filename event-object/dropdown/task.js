const dropDownValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropDownlinks = Array.from(document.querySelectorAll('.dropdown__link'));

dropDownValue.addEventListener('click', clickDropDown);

dropDownlinks.forEach(elem => elem.addEventListener('click', clickOnLink));

function clickDropDown() {
    if(dropDownList.classList.contains('dropdown__list_active')) {
        removeDropDown()
    } else {
        dropDownList.classList.add('dropdown__list_active');
    }
}

function removeDropDown() {
    dropDownList.classList.remove('dropdown__list_active');
}

function clickOnLink(e) {
    e.preventDefault();
    removeDropDown()
    dropDownValue.textContent = e.target.textContent;
}
