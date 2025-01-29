// JavaScript to handle full-screen image display
const overlay = document.getElementById('overlay');
const fullScreenImage = document.getElementById('fullScreenImage');
const clickableImages = document.querySelectorAll('.clickable-image');

// Add click event to all clickable images
clickableImages.forEach(image => {
  image.addEventListener('click', () => {
    fullScreenImage.src = image.src; // Set the clicked image source
    overlay.classList.add('active'); // Show the overlay
  });
});

// Close the overlay when clicking outside the image
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});