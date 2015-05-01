'use strict';

/* Controllers */


var myApp = angular.module('myApp', []);


myApp.controller('personCtrl', function ($scope) {

  
    $scope.toggle = function () {
        $scope.myVar = !$scope.myVar;
    }
});




myApp.controller('MyController', function ($scope) {
	$scope.count = 0;
	$scope.feet = "I have smelly feet";
	$scope.myVar = false;
    $scope.toggle = function () {
    	$scope.this.myVar = true;
    	return function (){
    	$scope.this.myVar = !$scope.this.myVar;
    	}();
    };
});
