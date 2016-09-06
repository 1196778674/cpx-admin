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


window.routerApp.controller('indexCtrl', ['$scope','$http','httpServer', function ($scope,$http,httpServer) {
	$scope.startTime = new Date();
	$scope.endTime = new Date();
	$scope.show = function(){
		$scope.dateTime = new Date();
	}

	httpServer.getDataList('json/index.json',$scope);

}])