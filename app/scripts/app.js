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
                'footer@index': {
                    templateUrl: 'views/partials/footer.html'
                },
                'left@index': {
                    templateUrl: 'views/partials/left.html'
                },
                'right@index': {
                    templateUrl: 'views/partials/right.html'
                }
            }
        })
        // .state('index.usermng', {
        //     url: '/usermng',
        //     views: {
        //         'main@index': {
        //             templateUrl: 'tpls3/usermng.html',
        //             controller: function($scope, $state) {
        //                 $scope.addUserType = function() {
        //                     $state.go("index.usermng.addusertype");
        //                 }
        //             }
        //         }
        //     }
        // })
        // .state('index.usermng.highendusers', {
        //     url: '/highendusers',
        //     templateUrl: 'tpls3/highendusers.html'
        // })
        // .state('index.usermng.normalusers', {
        //     url: '/normalusers',
        //     templateUrl: 'tpls3/normalusers.html'
        // })
        // .state('index.usermng.lowusers', {
        //     url: '/lowusers',
        //     templateUrl: 'tpls3/lowusers.html'
        // })
        // .state('index.usermng.addusertype', {
        //     url: '/addusertype',
        //     templateUrl: 'tpls3/addusertypeform.html',
        //     controller: function($scope, $state) {
        //         $scope.backToPrevious = function() {
        //             window.history.back();
        //         }
        //     }
        // })
        // .state('index.permission', {
        //     url: '/permission',
        //     views: {
        //         'main@index': {
        //             template: '这里是权限管理'
        //         }
        //     }
        // })
        // .state('index.report', {
        //     url: '/report',
        //     views: {
        //         'main@index': {
        //             template: '这里是报表管理'
        //         }
        //     }
        // })
        // .state('index.settings', {
        //     url: '/settings',
        //     views: {
        //         'main@index': {
        //             template: '这里是系统设置'
        //         }
        //     }
        // })
});

