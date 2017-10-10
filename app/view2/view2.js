'use strict';

angular.module('myApp.view2', ['ngRoute','md.data.table'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'sampleController'
  });
}])

.controller('sampleController', ['$scope', function ($nutrition, $scope) {
    'use strict';
    //
    // $scope.selected = [];
    //
    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };
    //
    // function success(desserts) {
    //     $scope.desserts = desserts;
    // }
    //
    // $scope.getDesserts = function () {
    //     $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
    // };

}]);