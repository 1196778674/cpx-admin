'use strict';


window.routerApp.directive('leftheight', [function () {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			var leftH = $(window).height();
			scope.height = leftH - 50;
		}
	};
}])

window.routerApp.directive('active', [function () {
	return {
		restrict: 'A',
		scope: {},
		link: function (scope, iElement, iAttrs) {
			iElement.on('click', function(e) {
				iElement.addClass('active').parents('li').siblings().find('a').removeClass('active');
			});
		}
	};
}])