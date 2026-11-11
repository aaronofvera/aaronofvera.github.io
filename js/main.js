// Shared by every page. Each block only runs if its page has the elements it needs.
const $ = sel => document.querySelector(sel)
const $c = tag => document.createElement(tag)

// Kept in case other pages still call "x".pad(n). Search your site for ".pad(" and delete this if nothing does.
String.prototype.pad = function (size = 2) { return this.padStart(size, '0') }

// The carousel needs no code here: #myCarousel's data-ride="carousel" already starts it,
// and Bootstrap's defaults (5s, keyboard, pause on hover, touch) match what this file used to pass in.

/* Taskbar clock */
const clock = $('#clock')
if (clock) {
	const tick = () => {
		const d = new Date()
		clock.textContent = `${String(d.getHours()).pad()}:${String(d.getMinutes()).pad()}`
	}
	tick()
	setInterval(tick, 5000)
}

/* 3D art desktop: only on the page that has these two elements */
const art3d = $('#art3dicons')
const mainDesktop = $('#mainDesktop')

if (art3d && mainDesktop) {
	for (let i = 1; i <= 55; i++) {
		const name = String(i).pad(3)
		const img = new Image()
		img.src = `3d/${name}.jpg`
		img.onload = () => {
			const icon = $c('fos-icon')
			icon.setAttribute('href', `art3d${name}`)
			icon.setAttribute('fixed', true)
			icon.setAttribute('name', name)
			icon.appendChild(img)
			art3d.appendChild(icon)

			const win = $c('fos-window')
			win.className = 'viewer'
			win.appendChild(img.cloneNode())
			win.setAttribute('title', `3D Art - ${name}`)
			win.setAttribute('name', `art3d${name}`)
			win.style.left = 0
			win.style.top = 0
			win.style.height = Math.min(innerHeight * 0.95, Math.min(innerWidth / img.width, 1) * img.height) + 'px'
			mainDesktop.appendChild(win)
		}
	}
}
