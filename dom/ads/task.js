const spans = document.querySelectorAll('span');

let currentIndex = 0;

function updateSpans() {
  if (currentIndex > 0) {
    spans[currentIndex - 1].classList.remove('rotator__case_active');
  }
  spans[currentIndex].classList.add('rotator__case_active');

  currentIndex = (currentIndex + 1) % spans.length;
}
setInterval(updateSpans, 1000);