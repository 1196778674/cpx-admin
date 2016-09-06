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

window.routerApp.directive('width', [function () {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			var width = $(window).width();
			scope.width = width - 80;
		}
	};
}])

window.routerApp.factory('urlType', [function () {
	var urlType = function(hash,scope){
		switch(hash) {
			case 'index':
				scope.isActive0 = true;
				scope.isActive1 = false;
				scope.isActive2 = false;
				scope.isActive3 = false;
				break;
			case 'storemanagement':
				scope.isActive1 = true;
				scope.isActive0 = false;
				scope.isActive2 = false;
				scope.isActive3 = false;
				break;
			case 'contractedstores':
				scope.isActive2 = true;
				scope.isActive1 = false;
				scope.isActive0 = false;
				scope.isActive3 = false;
				break;
			case 'datastatistics':
				scope.isActive3 = true;
				scope.isActive1 = false;
				scope.isActive2 = false;
				scope.isActive0 = false;
				break;
		}
	}

	return {
		urlType : urlType
	};
}])

window.routerApp.directive('isactive', ['urlType',function (urlType) {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			iElement.on('click', function(e) {
				var path = iAttrs.href.split('/');
				var hash = path[path.length - 1];
			    urlType.urlType(hash,scope);
			});
		}
	};
}])

window.routerApp.controller('leftNavCtrl', ['$scope','urlType', function ($scope,urlType) {
	$scope.isActive0 = false;
	$scope.isActive1 = false;
	$scope.isActive2 = false;
	$scope.isActive3 = false;
	var path = window.location.hash.split('/');
	var hash = path[path.length - 1];
	urlType.urlType(hash,$scope);
}])
