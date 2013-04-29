if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(args) {
            return str + ', ' + args;
        }
    },

    makeClosures : function(arr, fn) {
        var res = [];

        var cuadrado = function(x) {
            return function () {
                return fn(x);
            }
        }

        for (var i = 0; i < arr.length; i++) {
            res.push(cuadrado(arr[i]));
        };

        return res;
    },

    partial : function(fn, str1, str2) {
        return function(punctuation) {
            return fn.call(null, str1, str2, punctuation);
        }
    },

    useArguments : function() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        //arguments no es un Array, por lo tanto no tiene el metodo slice(). Primero debo convertirlo a Array.
        var args = Array.prototype.slice.call(arguments, 1); //me quedo con todos los argumentos menos el primero (fn);
        fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var ext_args = Array.prototype.slice.call(arguments, 1);
        return function(){
            var int_args = Array.prototype.slice.call(arguments);
    
            return fn.apply(null, ext_args.concat(int_args));
        }
    },

    curryIt : function(fn) {
        function resolverFn(fn, args) {
            return fn.apply(null, args);
        }

        function sumarArgumentos(args, ned_args) {
            return function (new_args) {
              args.push(new_args);

              var isComplete = args.length === ned_args;

              if (isComplete) {
                return resolverFn(fn, args);
              } else {
                return sumarArgumentos(args, ned_args);
              }
            };
        }

        var argumentos_necesarios = fn.length; //guardo la cantidad de parametros que necesito

        //la funcion sumar argumentos, suma los argumentos de esta llamada y devuelve una funcion.
        return sumarArgumentos([], argumentos_necesarios); 
    }
  };
});
