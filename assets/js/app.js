// Get the element with the class "highlight"
var element = document.querySelector('.highlight');

// Get the text content of the element
var text = element.textContent;

// Create a new HTML content with each character wrapped in a span
var htmlContent = text.split('').map(function(char, index) {
  // Calculate animation delay for each span
  var animationDelay = (index + 1) * 0.1;
  // Wrap each character in a span with animation-delay
  return '<span style="animation-delay: ' + animationDelay.toFixed(1) + 's;">' + char + '</span>';
}).join('');

// Set the new HTML content back to the element
element.innerHTML = htmlContent;