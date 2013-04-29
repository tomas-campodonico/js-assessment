if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
       // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      if (!isNaN(num)){
        if (num % 3) { //si no es divisible por 3
          if (num % 5) { //si no es divisible por 5 ni por 3
            return num;
          }
          return 'buzz';
        } else {
          if (num % 5) {//si no es divisible por 5 pero si por 3
            return 'fizz';
          }
          return 'fizzbuzz';
        }
      }

      return false;
     
    }
  };
});
