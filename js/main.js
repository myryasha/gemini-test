window.addEventListener('load', function (event) {

	navigation.init();
	screenLocker.check();
	settings.init();

	window.addEventListener('resize', () => {
		navigation.check();
		screenLocker.check();
	}, false);

	// Sidebar
	document.addEventListener('mousedown', (event) => {
		if (event.target.hasAttribute('data-sidebar-toggle') &&
			navigation.state === 0) {
			navigation.show();
			event.target.classList.remove(navigation.togglerHideClass);
		} else if (event.target.hasAttribute('data-sidebar-toggle') &&
			navigation.state === 1) {
			navigation.close();
			settings.close();
			event.target.classList.add(navigation.togglerHideClass);
		}
	}, false);

	// Group and links
	document.addEventListener('mousedown', (event) => {
		if (event.target.hasAttribute('data-navigation-item') ||
			event.target.parentNode.hasAttribute('data-navigation-item')) {
			var target = event.target.hasAttribute('data-navigation-item') ?
				event.target :
				event.target.parentNode;
			navigation.link(target);
		} else if (event.target.hasAttribute('data-navigation-group') ||
			event.target.parentNode.hasAttribute('data-navigation-group')) {
			var target = event.target.hasAttribute('data-navigation-group') ?
				event.target :
				event.target.parentNode;
			navigation.group(target);
		}
	}, true);


}, false);