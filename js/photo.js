document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('#photo-gallery')
  if (!gallery) return

  const buttons = gallery.querySelectorAll('.filter-buttons button')
  const items = gallery.querySelectorAll('.gallery-item')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.toggle('active', b === btn))
      const filter = btn.dataset.filter
      items.forEach(item => {
        item.style.display = (filter === 'all' || item.classList.contains(filter)) ? '' : 'none'
      })
    })
  })
})
