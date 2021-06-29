'use strict'

function divide(a, b) {

    if (b === 0) {
      return new Error("Can't divide by zero");
    } else {
      return a / b;
    }
  }

  module.exports = {
   
    divide
  }