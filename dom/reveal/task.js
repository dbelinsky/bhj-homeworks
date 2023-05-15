
const divs = document.querySelectorAll('.reveal');


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal_active');
    } else {
      entry.target.classList.remove('reveal_active');
    }
  });
});

divs.forEach(div => {
  observer.observe(div);
});