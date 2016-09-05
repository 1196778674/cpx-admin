'use strict';

window.routerApp = angular.module('cpxAdminApp', ['ui.router']);

window.routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

window.routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'views/index.html'
                },
                'header@index': {
                    templateUrl: 'views/partials/header.html'
                },
                'left@index': {
                    templateUrl: 'views/partials/left.html'
                },
                'main@index': {
                    templateUrl: 'views/partials/right.html'
                }
            }
        })
        .state('index.storemanagement', {
            url: '/storemanagement',
            views: {
                'main@index': {
                    templateUrl: 'views/storemanagement.html'
                },
                // controller: function($scope, $state) {
                //     console.log($scope);
                // }
            }
        })
        .state('index.contractedstores', {
            url: '/contractedstores',
            views: {
                'main@index': {
                    templateUrl: 'views/contractedstores.html'
                }
            }
        })
        .state('index.datastatistics', {
            url: '/datastatistics',
            views: {
                'main@index': {
                    templateUrl: 'views/datastatistics.html'
                }
            }
        })

});