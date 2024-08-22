const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  
  describe('SUM', function() {
    it('should return 4 when inputs are 1 and 3', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should return 6 when inputs are 1.5 and 4.4', function() {
      assert.strictEqual(calculateNumber('SUM', 1.5, 4.4), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return 2 when inputs are 3.7 and 2', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 2), 2);
    });

    it('should return -2 when inputs are 1.7 and 3.7', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 3.7), -2);
    });

    it('should return -4 when inputs are 1.5 and 5.7', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 5.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when inputs are 8.4 and 4.2', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 4.2), 2);
    });

    it('should return "Error" when b is rounded to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
    });

    it('should return 1 when inputs are 2.8 and 2.5', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 2.8, 2.5), 1);
    });
  });

  describe('Invalid operation type', function() {
    it('should return "invalid operation" for unsupported operation type', function() {
      assert.strictEqual(calculateNumber('MULTIPLY', 1, 3), 'invalid operation');
    });
  });
});
