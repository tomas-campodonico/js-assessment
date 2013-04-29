if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
    	var files = [],
    		dirs = [];
        
    	rec(data);

    	function rec(obj){
            dirs.push( obj.dir );

    		for (var i = 0; i < obj.files.length; i++) {
    			var file = obj.files[i];
	    		if (typeof file === 'string'){
	    			if (!dirName || dirs.indexOf(dirName) > -1) { //cuento todos los archivos porque entre por el test 1 || cuento los que estan en la subcarpeta
	    				files.push(obj.files[i]);
	    			}
	    		} else {
	    			rec(file);
	    		}
	    	}
	    	dirs.pop();
    	}

    	return files;
    },

    permute: function(arr) {
        var permArr = [],
            usedChars = [];

        function main(input){
            var i, ch;
            for (i = 0; i < input.length; i++) {
                ch = input.splice(i, 1)[0];
                usedChars.push(ch);
                if (input.length == 0) {
                    permArr.push(usedChars.slice());
                }
                main(input);
                input.splice(i, 0, ch);
                usedChars.pop();
            }
            return permArr;
        }
        
        return main(arr);
        }
  };
});
