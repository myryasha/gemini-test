
/*

	show(@domEl, @function)

*/

class Modal {

	constructor() {
		this.modals = document.querySelectorAll('[data-popup]');
		this.transition = 400;
		this.classes = ['opacity', 'visible'];
	}

	show(popup = null, callback = null) {
		if (popup === null) return;
		popup.classList.add(this.classes[1]);
		popup.classList.add(this.classes[0]);
		if (callback !== null && typeof callback === 'function') {
			let timeout = setTimeout( () => {
				callback();
			}, this.transition);
		}
	}

	close(popup = null, callback = null) {
		if (popup === null) return;
		popup.classList.remove(this.classes[0]);
		let timeout = setTimeout( () => {
			popup.classList.remove(this.classes[1]);
			if (callback !== null && typeof callback === 'function') {
				callback.call(overlay);
			}
		}, this.transition);
	}

}

window.modal = new Modal();