// Get all the spans on the page
const spans = document.querySelectorAll('span');

// Set an initial index to keep track of which span to add the class to
let currentIndex = 0;

// Define a function to add the class to the current span and remove it from the previous one
function updateSpans() {
  // Remove the class from the previous span
  if (currentIndex > 0) {
    spans[currentIndex - 1].classList.remove('rotator__case_active');
  }

  // Add the class to the current span
  spans[currentIndex].classList.add('rotator__case_active');

  // Increment the index, wrapping around to 0 if we've reached the end of the list
  currentIndex = (currentIndex + 1) % spans.length;
}

// Call the updateSpans function every second
setInterval(updateSpans, 1000);