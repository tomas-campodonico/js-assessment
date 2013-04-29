if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
	  var deferred = $.Deferred();
	  setTimeout(function() {
	  	deferred.resolve(value);
	  }, 10);
	  return deferred.promise();
    },

    manipulateRemoteData : function(url) {
    	var def = $.Deferred();
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		
		xhr.onload = function (e) {
			if (this.status === 200) {
				$.getJSON(url, function(data) {
					var people = [];
					for (var i=0; i<data.people.length; i++) {
						people.push(data.people[i].name);
					}
					def.resolve(people.sort());
				});
			}
		};
	 
		xhr.onerror = function (e) {
			def.reject(e);
		};
 
		xhr.send();
		
		return def;
    }
  };
});
