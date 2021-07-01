'use strict'

function divide(a, b) {

    if (b === 0) {
      return new Error("No se puede dividir por cero!");
    } else {
      return a / b;
    }
  }

  module.exports = {
   
    divide
  }