if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> bit - 1);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var res = []; //siempre devuelve 8 digitos

        for (var i = 7; i > -1; i--) { //desde el bit 7 al 0 (8 en total)
            res.push( num & (1 << i) ? 1 : 0 );
        }

        return res.join('');
    },

    multiply: function(a, b) {
        return a * b;
    }
  };
});

