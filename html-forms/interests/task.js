const interests = document.querySelector('.interests_main');

interests.addEventListener('change', (event) => {
    let target = event.target;
    if (target.classList.contains('interest__check')) {
        if (target.closest('label').nextElementSibling) {
            childrenCheck(target);
        } else if (target.closest('interests_active')) {
            parentCheck(target);
        }
    }
})

function childrenCheck(element) {
  const inputs = [...element.closest('label').nextElementSibling.querySelectorAll('input')];
  element.checked ? inputs.forEach(el => el.checked = true) : inputs.forEach(el => el.checked = false);
  parentCheck(element);
}
