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

	Alloy.Collections.instance('events');

	$.__views.win = Ti.UI.createWindow({ id: "win" });
	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.__alloyId2 = Ti.UI.createTableView({ id: "__alloyId2" });
	$.__views.win.add($.__views.__alloyId2);
	var __alloyId6 = Alloy.Collections['events'] || events;function __alloyId7(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId7.opts || {};var models = filterFunction(__alloyId6);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
			var __alloyId3 = models[i];__alloyId3.__transform = _.isFunction(__alloyId3.transform) ? __alloyId3.transform() : __alloyId3.toJSON();var __alloyId5 = Ti.UI.createTableViewRow({ title: __alloyId3.__transform.title });
			rows.push(__alloyId5);
		}$.__views.__alloyId2.setData(rows);
	};__alloyId6.on('fetch destroy change add remove reset', __alloyId7);exports.destroy = function () {
		__alloyId6 && __alloyId6.off('fetch destroy change add remove reset', __alloyId7);
	};

	_.extend($, $.__views);

	var args = $.args;
	var dept_id = args.dept_id || {};

	$.win.title = dept_id;
	Alloy.Collections.events.fetch();

	$.win.addEventListener("close", function () {
		$.destroy();
	});
	function filterFunction(collection) {
		return collection.where({ db_dept_id: dept_id });
	}

	_.extend($, exports);
}

module.exports = Controller;