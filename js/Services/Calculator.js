var calculator = angular.module("calculatorservice", []);

calculator.service('MathCalculator', function () {
    this.sum = function (a, b) {
        return a + b;
    }
    this.subtract = function (a, b) {
        return a - b;
    }
    this.multiply = function (a, b) {
        return a * b;
    }
    this.divide = function (a, b) {
        return a / b;
    }
})