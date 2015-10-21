
/*

	State
	0 - скрыт
	1 - открыт

*/

class Overlay {

	constructor() {
		this.state = 0;
		this.self = document.querySelector('[data-overlay]');
		this.transition = 600;
		this.classes = ['opacity', 'visible'];
	}

	show(callback = null) {
		if (this.state === 1) return;
		this.self.classList.add(this.classes[0]);
		this.self.classList.add(this.classes[1]);
		this.state = 1;
		if (callback !== null && typeof callback === 'function') {
			let timeout = setTimeout( () => {
				callback();
			}, this.transition);
		}
	}

	close(callback = null) {
		if (this.state === 0) return;
		this.self.classList.remove(this.classes[0]);
		this.state = 0;
		let timeout = setTimeout( () => {
			this.self.classList.remove(this.classes[1])
			if (callback !== null && typeof callback === 'function') {
				callback();
			}
		}, this.transition);
	}

}

window.overlay = new Overlay();