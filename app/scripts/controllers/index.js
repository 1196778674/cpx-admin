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
	$scope.dateTime = '2016-9-5';
	$scope.show = function(){
		$scope.dateTime = new Date();
	}
	httpServer.getDataList('json/index.json',$scope);
}])