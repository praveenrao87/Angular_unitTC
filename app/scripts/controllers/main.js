angular.module('ourAppApp')
.service('service2', function() {
    this.add = function(a, b) { return a + b };
    
    this.subtract = function(a, b) { return a - b };
    
    this.multiply = function(a, b) { return a * b };
    
    this.divide = function(a, b) { return a / b };
})

.service('service1', function(service2){
    
    this.square = function(a) { return service2.multiply(a,a); };
    this.cube = function(a) { return service2.multiply(a, service2.multiply(a,a)); };

})

.controller('MainCtrl', function($scope, service1, service2) {

    $scope.findSquare = function() {
        $scope.answer = service1.square($scope.number);
    }

    $scope.findCube = function() {
        $scope.answer = service1.cube($scope.number);
    }

    $scope.addition = function() {
        $scope.result = service2.add($scope.num1,$scope.num2);
    }

    $scope.subtraction = function() {
        $scope.result = service2.subtract($scope.num1,$scope.num2);
    }

    $scope.multiplication = function() {
        $scope.result = service2.multiply($scope.num1,$scope.num2);
    }

    $scope.division = function() {
        $scope.result = service2.divide($scope.num1,$scope.num2);
    }
})