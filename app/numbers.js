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
		var cant_dec_a = String(a).indexOf('.') - 1, //si a = 0.0001 entonces cant_dec_a = 0;
			cant_dec_b = String(b).indexOf('.') - 1, //si b = 3 entonces cant_dec_b = -1;
			
			atens = Math.pow(10,String(a).length - cant_dec_a), //10^6 = 1,000,000
			btens = Math.pow(10,String(b).length - cant_dec_b), //10^1 = 10
			
			result = (a * atens) * (b * btens) / (atens * btens); //100 * 30 / 10,000,000 = 0.0003
		return result;
    }
  };
});

