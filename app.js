'use strict';
angular.module('ngWebglDemo', [])
	
  .controller('AppCtrl', ['$scope', function ($scope) {

    $scope.canvasWidth = 128;
    $scope.canvasHeight = 128;
    $scope.scale = 1;
    $scope.materialType = 'lambert';

  }]);