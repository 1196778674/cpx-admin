'use strict';

window.routerApp.factory('httpServer', ['$http',function ($http) {
	var getDataList = function(url,scope){
		$http.get(url).success(function(data){
			scope.dataList = data;
		})
	}

	return {
		getDataList: getDataList
	};
}])

window.routerApp.directive('datepicker', [function () {
	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			scope.startTime = new Date();
			$("." + iAttrs.class).datetimepicker({
	        format: "yyyy-mm-dd",
	        autoclose: true,
	        todayBtn: true,
	        startDate: scope.startTime,
	        minuteStep: 10
	    });
		}
	};
}])

window.routerApp.controller('indexCtrl', ['$scope','$http','httpServer', function ($scope,$http,httpServer) {
	$scope.show = function(){
		$scope.dateTime = new Date();
	}

	httpServer.getDataList('json/index.json',$scope);

}])