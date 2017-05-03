'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Job', function($scope, Job) {
  $scope.init = function () {
    $scope.addDialogVisible = false;

    Job.async().then(function() {
      $scope.data = Job.data();
    });
  }

  $scope.showAddDialog = function() {
    $scope.addDialogVisible = true
  };

  $scope.saveJob = function() {
    $scope.addDialogVisible = false;
  };

  $scope.cancelJob = function() {
    $scope.addDialogVisible = false;
  };


}]);
