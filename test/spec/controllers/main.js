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
});