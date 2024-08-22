const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {

  describe('SUM', function() {
    it('should return 4 when inputs are 1 and 3', function() {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should return 5 when inputs are 1 and 3.7', function() {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should return 6 when inputs are 1.5 and 4.4', function() {
      expect(calculateNumber('SUM', 1.5, 4.4)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return 2 when inputs are 3.7 and 2', function() {
      expect(calculateNumber('SUBTRACT', 3.7, 2)).to.equal(2);
    });

    it('should return -2 when inputs are 1.7 and 3.7', function() {
      expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2);
    });

    it('should return -4 when inputs are 1.5 and 5.5', function() {
      expect(calculateNumber('SUBTRACT', 1.5, 5.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 2 when inputs are 8.4 and 4.2', function() {
      expect(calculateNumber('DIVIDE', 8.4, 4.2)).to.equal(2);
    });

    it('should return "Error" when b is rounded to 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
    });

    it('should return 1 when inputs are 2.8 and 2.5', function() {
      expect(calculateNumber('DIVIDE', 2.8, 2.5)).to.equal(1);
    });
  });

  describe('Invalid operation type', function() {
    it('should return "invalid operation" for unsupported operation type', function() {
      expect(calculateNumber('MULTIPLY', 1, 3)).to.equal('invalid operation');
    });
  });
});
