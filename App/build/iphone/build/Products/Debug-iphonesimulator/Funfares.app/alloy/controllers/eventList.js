var Alloy = require('/alloy'),
    Backbone = Alloy.Backbone,
    _ = Alloy._;

function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'eventList';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;
	var dept_id = args.dept_id || {};

	$.win.title = dept_id;
	Alloy.Collections.events.fetch();

	$.win.addEventListener("close", function () {
		$.destroy();
	});
	function filterFunction(collection) {
		return collection.filter(function (model) {
			return model.get("id") < 17;
		});
	}

	_.extend($, exports);
}

module.exports = Controller;