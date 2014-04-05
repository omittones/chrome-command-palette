window.ccpUtil = {

	filter: function(array, filter) {
	    var filtered = [];
	    for(var i = 0; i < array.length; i++) {
	        if (filter(array[i])){
	            filtered.push(array[i]);
	        }
	    }
	    return filtered;
	},
	map: function(array, map) {
	    var mapped = [];
	    for(var i = 0; i<array.length;i++) {
	        mapped.push(map(array[i]));
	    }
	    return mapped;
	}
};