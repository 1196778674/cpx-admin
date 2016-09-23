'use strict';
define(['cpxAdmin'], function(cpxAdmin) {

	cpxAdmin.directive('sample', function() {
		return {
			restrict: 'E',
			template: '<span>Sample</span>'
		};
	});
});
