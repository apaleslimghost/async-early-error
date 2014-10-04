<h1 align="center">
async-early-error
<br>
<a href="https://travis-ci.org/quarterto/async-early-error"><img alt="Build Status" src="https://travis-ci.org/quarterto/async-early-error.svg"></a>
</h1>

Because I'm tired of typing `if(err) return cb(err)`. Split up your error callbacks:

```javascript
function statAndRead(file, cb) {
	var handleErr = asyncEarlyError(cb);

	fs.stat(file, handleErr(function(stat) {
		fs.readFile(file, handleErr(function(data) {
			cb(null, stat, data);
		});
	});
}
```

Licence
-------

MIT.
