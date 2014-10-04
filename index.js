module.exports = function asyncEarlyError(errback, callback) {
	return function(err /* ...res */) {
		var res = [].slice.call(arguments, 1);
		if(err) {
			errback(err);
		} else {
			callback.apply(null, res);
		}
	};
};
