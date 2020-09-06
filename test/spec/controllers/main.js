// write your code here for controller
//Note: dont remove existing codes
describe('Unit Test', function() {
  beforeEach(module('ourAppApp'));
  var $controller;

  beforeEach(inject(function(_$controller_){
            $controller = _$controller_;
  }));
  describe('Do not remove', function() {
    it('Check 1', function() {
      expect(1).toBe(1);
    });
    it('Check 2', function() {
      expect(1).toBe(1);
    });
  });
  describe('$scope.addition',function() {
      it('Check addition of two numbers', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.num1 + $scope.num2).toEqual($scope.result);
      });
  });
  describe('$scope.subtraction',function() {
      it('Check subtraction of two numbers', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.num1 - $scope.num2).toEqual($scope.result);
      });
  });
  describe('$scope.multiplication',function() {
      it('Check multiplication of two numbers', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.num1 * $scope.num2).toEqual($scope.result);
      });
  });
  describe('$scope.division',function() {
      it('Check division of two numbers', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.num1 / $scope.num2).toEqual($scope.result);
      });
  });
  describe('$scope.square',function() {
      it('Check square of a number', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.number * $scope.number).toEqual($scope.answer);
      });
  });
  describe('$scope.cube',function() {
      it('Check cube of a number', function() {
          var $scope = {};
          var controller = $controller('MainCtrl', { $scope: $scope });
          expect($scope.number * $scope.number * $scope.number).toEqual($scope.answer);
      });
   });
});