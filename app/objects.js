if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
    	return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
    	constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
    	var res = [];
    	for (var property in obj){
    		if (obj.hasOwnProperty(property))
    			res.push(property + ': ' + obj[property]);
    	}
    	return res;
    }
  };
});
