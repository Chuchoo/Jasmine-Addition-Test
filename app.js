//  app.js

var app = angular.module("Calculator", []);

app.controller("CalcController", ["$scope", function ($scope) {  
    $scope.result = 0;

    $scope.sum = function () {
        $scope.result = $scope.first + $scope.second;
    };
}]);