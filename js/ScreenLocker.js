

class ScreenLocker {

	constructor() {
		this.modal = document.querySelector('[data-popup="mobile"]');
		this.widthBreakpoint = 979;
		this.heightBreakpoint = 499;
		this.state = 0;
	}

	check() {
		// if (this.state === 1) return;
		let w = window.innerWidth,
			h = window.innerHeight;
		if (w <= this.widthBreakpoint || h <= this.heightBreakpoint) {
			this.lock();
			// this.state = 1;
		} else {
			this.unlock();
		}
	}

	lock() {
		overlay.show(modal.show(this.modal));
		document.addEventListener('mousedown', (event) => {
			if (event.target.hasAttribute('data-close-popup')) {
				modal.close(this.modal, overlay.close);
			}
		}, false);
	}

	unlock() {
		overlay.close();
	}

}

window.screenLocker = new ScreenLocker();