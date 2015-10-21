/*

	Метод Check проверяет ширину окна и если она меньше брекпоинта
	то скрывает сайдбар, если больше - то показывает
	первый коллбек - открытие
	второй коллбек - закрытие
	Check(@function, @function)


	Navigation.state
	0 - закрыто
	1 - открыто

*/


class Navigation {

	constructor() {
		this.transitionTime = 550;
		this.self = document.querySelector('[data-navigation-panel]');
		this.settings = document.querySelector('[data-navigation-panel]');
		this.toggler = document.querySelector('[data-sidebar-toggle]');
		this.links = document.querySelectorAll('[data-navigation-item]');
		this.groups = document.querySelectorAll('[data-navigation-group]');
		this.breakpoint = 1100;
		// classes
		this.hideClass = 'navbar-hidden';
		this.togglerHideClass = 'note-hidden';
		this.linkActive = 'choosed';
		this.groupActive = 'opened';
		this.groupSetActive = 'group-content-opened';
		// states
		this.state = window.innerWidth > this.breakpoint ? 1 : 0;
	}

	init() {
		let windowWidth = window.innerWidth;
		if (windowWidth > this.breakpoint) {
			this.show();
		} else {
			this.close();
		}
	}

	close(callback = null) {
		this.self.classList.add(this.hideClass);
		this.toggler.classList.add(this.togglerHideClass);
		this.state = 0;
		if (callback !== null && typeof callback === 'function') {
			let timeout = setTimeout( () => {
				callback();
			}, this.transition);
		}
	}

	show(callback = null) {
		this.self.classList.remove(this.hideClass);
		this.toggler.classList.remove(this.togglerHideClass);
		this.state = 1;
		if (callback !== null && typeof callback === 'function') {
			let timeout = setTimeout( () => {
				callback();
			}, this.transition);
		}
	}

	check(showCallback = null, closeCallback = null) {
		let windowWidth = window.innerWidth;
		if (windowWidth > this.breakpoint && this.state === 0) {
			this.show(showCallback);
		} else if (windowWidth <= this.breakpoint && this.state === 1) {
			this.close(closeCallback);
			settings.close();
		}
	}

	group(domEl = null) {
		if (domEl === null) return;
		if (domEl.getAttribute('data-navigation-group') === 'active') {
			domEl.classList.remove(this.groupActive);
			domEl.querySelector('[data-navigation-groupset]').classList.remove(this.groupSetActive);
			domEl.setAttribute('data-navigation-group', null);
			return;
		}
		// single element only active
		[].forEach.call(this.groups, (el) => {
			el.classList.remove(this.groupActive);
			el.querySelector('[data-navigation-groupset]').classList.remove(this.groupSetActive);
			el.setAttribute('data-navigation-group', null);
		});
		domEl.classList.add(this.groupActive);
		domEl.setAttribute('data-navigation-group', 'active');
		domEl.querySelector('[data-navigation-groupset]').classList.add(this.groupSetActive);
	}

	link(domEl = null) {
		if (domEl === null || domEl.getAttribute('data-navigation-item') === 'active') return;
		[].forEach.call(this.links, (el) => {
			el.classList.remove(this.linkActive);
			el.setAttribute('data-navigation-item', null);
		});
		domEl.classList.add(this.linkActive);
		domEl.setAttribute('data-navigation-item', 'active');
	}

}

window.navigation = new Navigation();



// "use strict"
// var w = document.documentElement.clientWidth;
	
// function closeNav () {
// 		$(".navbar").addClass("navbar-hidden");
// 		$(".note").addClass("note-hidden");
// 		$('.settings-sidebar').addClass('settings-sidebar-none');
// 	}
// function showNav () {
// 		$(".navbar").removeClass("navbar-hidden");
// 		$(".note").removeClass("note-hidden");
// 		$('.settings-sidebar').removeClass('settings-sidebar-none');
// 	}

// function showSidebar () {
// 	$('.settings-sidebar').removeClass("settings-sidebar-hidden");
// 		setTimeout("$('.settings-sidebar').css({'z-index': 3})", 450);
// }
// function closeSidebar () {
// 		$('.settings-sidebar').addClass('settings-sidebar-hidden');
// 		$('.settings-sidebar').css({'z-index': 0});

// }


// $( window ).resize(function() {
// 	w = document.documentElement.clientWidth;
// 	if (w < 1100) {
// 		closeNav();
// 	} else {
// 		showNav();
// 	};
// });


// $(".note").on("click", function() {
// 	if ($(".note").hasClass("note-hidden")) {
// 		showNav();

// 	} else {
// 		closeNav();
// 		closeSidebar();
// 	}
// })



// $('.group').find('.name').on("click", function () {
// 	var group = $(this).parent();
// 	if ( group.hasClass("opened") ) {

// 		group.removeClass("opened");
// 		group.find(".group-content").toggleClass("group-content-opened");
// 	}
// 	else {
		
// 		group.addClass("opened");
// 		group.find(".group-content").toggleClass("group-content-opened");
// 	}

	
// });

// $('.items').on("click", function () {
// 	var item = $(this);
// 	if ( !item.hasClass("choosed") ) {
// 		item.addClass('choosed');
// 		item.siblings().removeClass('choosed');
// 	};
// });



// $('.icon-box').on('click', function () {
// 	if ($('.settings-sidebar').hasClass('settings-sidebar-hidden')) {
// 		showSidebar();
// 	} else {
// 		closeSidebar();
// 	}
// })

// $('.settings-sidebar')
// 	.find('.settings-sidebar-header')
// 		.find('.closebtn').on('click', function () {
// 			closeSidebar();
// 		})



