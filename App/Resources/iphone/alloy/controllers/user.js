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
	this.__controllerPath = 'user';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	$.__views.userWin = Ti.UI.createWindow({ title: "User", layout: "vertical", id: "userWin" });
	$.__views.userWin && $.addTopLevelView($.__views.userWin);
	$.__views.__alloyId79 = Ti.UI.createLabel({ text: 'Welcome! ' + $model.__transform.Alloy.Globals.username, bottom: 20, id: "__alloyId79" });
	$.__views.userWin.add($.__views.__alloyId79);
	exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;

	_.extend($, exports);
}

module.exports = Controller;