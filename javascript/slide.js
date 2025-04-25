const images = [
    "https://upload.wikimedia.org/wikipedia/commons/7/74/Hiking_trail_in_Belize.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/37/Belize_hiking_forest.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Belize_mountains.jpg"
  ];
  
  let currentIndex = 0;
  const slideshow = document.getElementById("slideshow");
  
  function showSlide(index) {
    slideshow.src = images[index];
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }
  
  // Auto-play every 5 seconds
  setInterval(nextSlide, 5000);
  
  // Swipe support
  let startX = 0;
  
  slideshow.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  
  slideshow.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
  
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  });
  
  showSlide(currentIndex);
  