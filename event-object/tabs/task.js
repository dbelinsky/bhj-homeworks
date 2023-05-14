const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, index) => tab.addEventListener('click', function() {
    closeTabs();
    tab.classList.add('tab_active');
    tabContent[index].classList.add('tab__content_active');
}))

function closeTabs() {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContent.forEach(content => content.classList.remove('tab__content_active'));
}