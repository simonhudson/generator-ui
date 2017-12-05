'use strict';

function mainNav() {
	var namespace = 'js-main-nav__';
	var activeClass = 'is-open';
	var mainNav = {
		list: document.querySelector('.' + namespace + 'list'),
		toggle: document.querySelector('.' + namespace + 'toggle'),
	}
	if (!mainNav.list || !mainNav.toggle) return;
	mainNav.toggle.addEventListener('click', function(e) {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		var method = mainNav.list.classList.contains(activeClass) ? 'remove' : 'add';
		mainNav.list.classList[method](activeClass);
	});
}
mainNav();
