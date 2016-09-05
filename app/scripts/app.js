'use strict';

/**
 * @ngdoc overview
 * @name cpxAdminApp
 * @description
 * # cpxAdminApp
 *
 * Main module of the application.
 */
var routerApp = angular.module('cpxAdminApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
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
                }
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

