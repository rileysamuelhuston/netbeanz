document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-image');
  const closeBtn = document.getElementById('lightbox-close');

  if (!overlay || !lightboxImg || !closeBtn) {
    console.error('One or more lightbox elements are missing in the HTML.');
    return; // Stop execution if elements not found
  }

  // Open lightbox when any grid-image is clicked
  document.querySelectorAll('.grid-image').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', e => {
      lightboxImg.src = e.currentTarget.src;
      overlay.style.display = 'flex';
    });
  });

  // Close on overlay click or close-button click
  [overlay, closeBtn].forEach(el => {
    el.addEventListener('click', e => {
      if (e.target === lightboxImg) return; // Don't close if clicking the image itself
      overlay.style.display = 'none';
      lightboxImg.src = '';
    });
  });
});
