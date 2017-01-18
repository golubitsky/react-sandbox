import GradientTest from './GradientTest.js';

var assert = require('assert');
describe('GradientTest', function() {
  describe('#nextColor()', function() {
    it('should return the next color', function() {
      var sut = new GradientTest();

      assert.equal("#111111", sut.nextColor("#000000"));
    });
  });
});

describe('GradientTest', function() {
  describe('#nextDegrees()', function() {
    it('should increment the degree', function() {
      var sut = new GradientTest();

      assert.equal(1, sut.nextDegrees(360));
    });
  });
});