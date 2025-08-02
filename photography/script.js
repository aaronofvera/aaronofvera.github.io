// Shuffle images on load
function shufflePhotos() {
  const gallery = document.getElementById('photo-gallery');
  const photos = Array.from(gallery.children);
  for (let i = photos.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    gallery.appendChild(photos[j]);
  }
}

// Filter photos by album
document.getElementById('album-filter').addEventListener('click', (e) => {
  if (e.target.tagName !== 'LI') return;

  document.querySelectorAll('#album-filter li').forEach(li => li.classList.remove('active'));
  e.target.classList.add('active');

  const selected = e.target.dataset.album;
  const photos = document.querySelectorAll('.photo');
  
  photos.forEach(photo => {
    photo.style.display = (selected === 'all' || photo.dataset.album === selected)
      ? 'block'
      : 'none';
  });
});

window.onload = shufflePhotos;