/* global angular */
'use strict';

angular.module('AngularJSDemoApp', ['ngRoute', 'angularJsDemoApp']).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.html',
            controller: 'HomeController'
        }).otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
});
var angularJsDemoApp = angular.module('angularJsDemoApp', [])