module.exports = function asyncEarlyError(errback, callback) {
	return function(err, res) {
		if(err) {
			errback(err);
		} else {
			callback(res);
		}
	};
};
