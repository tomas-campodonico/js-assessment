if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {

    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var total = 0;

        for (var index in arr) {
            total += arr[index];
        }
        return total;
    },

    remove : function(arr, item) {
      
        for(var i in arr){
            if (arr[i] === item) arr.splice(i, 1);
        }

        return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
        var real_length = arr.length;

        for(var i = 0; i < real_length; i++){
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--; //vuelvo uno para atras porque acabo de borrar uno;
                real_length--;
            }
        }

        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i in arr){
            if (arr[i] === item) count++;
        }

        return count;
    },

    duplicates : function(arr) {
        var duplicates = [],
            elements_in_array = []; 

        for (var i = 0; i < arr.length - 1; i++) {
            if ( elements_in_array.indexOf(arr[i]) < 0 ) {
                elements_in_array.push(arr[i]); //primera aparicion
            } else {
                duplicates.push(arr[i]);
            }
        }

        return duplicates;
    },

    square : function(arr) {
        for (var index in arr) {
            arr[index] = arr[index] * arr[index];
        }
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var ocurrences = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) ocurrences.push(i);
        }

        return ocurrences;
    }
  };
});
