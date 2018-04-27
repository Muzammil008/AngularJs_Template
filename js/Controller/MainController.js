var appcontroller = angular.module('maincontrollermodule', ["calculatorservice"]);

appcontroller.controller("MainController", function ($scope, MathCalculator) {
    $scope.val = MathCalculator.sum(2, 4);
    $scope.name = '';
    $scope.showname = function () {
        alert($scope.name)
    }
});
