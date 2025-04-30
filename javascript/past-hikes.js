// Fade-in zoom on scroll
window.addEventListener('scroll', () => {
    const group = document.getElementById('groupPhotoWrapper');
    const rect = group.getBoundingClientRect();
  
    if (rect.top < window.innerHeight - 100) {
      group.classList.add('fade-in-zoom');
      group.classList.remove('opacity-0', 'scale-95');
    }
  });
  