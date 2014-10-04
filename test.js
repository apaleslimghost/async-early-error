var sinon = require('sinon');
var expect = require('sinon-expect').enhance(
	require('expect.js'),
	sinon,
	'was'
);

var asyncEarlyError = require('./');

describe('async-early-error', function() {
	it('should be a function', function() {
		expect(asyncEarlyError).to.be.a(Function);
	});

	describe('error path', function() {
		it('should call first callback if first arg is non null', function() {
			var spy1 = sinon.spy();
			var spy2 = sinon.spy();
			var cb = asyncEarlyError(spy1, spy2);
			cb(true);
			expect(spy1).was.called();
			expect(spy2).was.notCalled();
		});

		it('should call first callback with actual thing passed to callback', function() {
			var spy1 = sinon.stub();
			var spy2 = sinon.spy();
			var e = {};
			var cb = asyncEarlyError(spy1, spy2);
			cb(e);
			expect(spy1).was.calledWith(e);
		});
	});

	describe('success path', function() {
		it('should call second callback if first arg is null', function() {
			var spy1 = sinon.spy();
			var spy2 = sinon.spy();
			var cb = asyncEarlyError(spy1, spy2);
			cb(null);
			expect(spy1).was.notCalled();
			expect(spy2).was.called();
		});
		it('should call second callback with second argument', function() {
			var spy1 = sinon.spy();
			var spy2 = sinon.stub();
			var cb = asyncEarlyError(spy1, spy2);
			cb(null, 1);
			expect(spy2).was.calledWith(1);
		});
	});
});
