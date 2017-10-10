'use strict';

var app = angular.module('myApp.home', ['ngRoute','md.data.table'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope','$http','$filter', function ($scope, $http,$filter) {
        var vm = $scope;
        var weaterDataLinks = [
            {
                name: 'Bradford',
                link: 'https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/bradforddata.txt'
            }
        ];
        $http({method: 'GET', url: "http://ip-api.com/json"}).success(function (data) {
            vm.country = data.country+',';
            vm.city = data.city;

        }).error(function () {
            console.log('faild attempt to load data from ip-api.com');
        });

    app.factory('getDataFunc', function() {


    });

    }]);


















