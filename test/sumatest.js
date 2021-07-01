'use strict';

var expect = require("chai").expect;
var calculator = require("../app/suma");

describe("Calculator - Test", function() {

  describe("Testing the Operations", function() {

    
    it("Testing the divide operation", function() {
      expect(calculator.divide(3,3)).to.equal(3/3);
    });

    it("Testing the divide operation by zero", function() {
      const expectedError = new Error("No se puede dividir por cero");
      expect(calculator.divide(3,0).message).to.equal(expectedError.message);
    });

  });
});