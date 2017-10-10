'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.view2',
    'myApp.version',
    'ngMaterial',
    'md.data.table',
    'demoApp',
    'ui.bootstrap',
    'ngResource',
    'chart.js'
  ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
