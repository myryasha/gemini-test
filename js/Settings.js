
/*

	State
	0 - closed
	1 - opened

*/

class Settings {

	constructor() {
		this.self = document.querySelector('[data-settings]');
		this.transition = 550;
		this.togglers = document.querySelectorAll('[data-settings-toggle]');
		this.activeClass = 'settings-sidebar-visible';
		this.state = 0;
	}

	init() {
		[].forEach.call(this.togglers, (el) => {
			el.addEventListener('mousedown', (event) => {
				this.toggle();
			}, true);
		})
	}

	show() {
		if (this.state === 1) return;
		this.self.classList.add(this.activeClass);
		this.state = 1;
	}

	close() {
		if (this.state === 0) return;
		this.self.classList.remove(this.activeClass);
		this.state = 0;
	}

	toggle() {
		if (this.state === 0) {
			this.show();
		} else {
			this.close();
		}
	}
}

window.settings = new Settings();