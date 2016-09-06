'use strict';

window.routerApp.directive('start', [function () {
	return {
		restrict: 'E',
		template: '<input type="date" id="startTime" ng-model="startTime" name="start" autocomplete="off" readonly>',
		replace: true,
		link: function (scope, iElement, iAttrs) {
			laydate({
				elem: '#' + iAttrs.id,
				format: 'YYYY-MM-DD',
				issure: false
			})
		}
	};
}])
window.routerApp.directive('end', [function () {
	return {
		restrict: 'E',
		template: '<input type="date" id="endTime" ng-model="endTime" name="end" autocomplete="off" readonly>',
		replace: true,
		link: function (scope, iElement, iAttrs) {
			laydate({
				elem: '#' + iAttrs.id,
				format: 'YYYY-MM-DD',
				issure: false
			})
		}
	};
}])