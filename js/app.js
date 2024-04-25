function scrollGallery(direction) {
    const gallery = document.getElementById('imageGallery');
    gallery.scrollBy({
      left: direction * gallery.offsetWidth, // Scroll by one screen width
      behavior: 'smooth' // Smooth scrolling
    });
  }