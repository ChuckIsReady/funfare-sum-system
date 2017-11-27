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
	this.__controllerPath = 'package';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	Alloy.Collections.instance('packageData');

	$.__views.win = Ti.UI.createWindow({ id: "win" });
	$.__views.win && $.addTopLevelView($.__views.win);
	$.__views.__alloyId80 = Ti.UI.createTableView({ id: "__alloyId80" });
	$.__views.win.add($.__views.__alloyId80);
	var __alloyId84 = Alloy.Collections['packageData'] || packageData;function __alloyId85(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId85.opts || {};var models = __alloyId84.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
			var __alloyId81 = models[i];__alloyId81.__transform = _.isFunction(__alloyId81.transform) ? __alloyId81.transform() : __alloyId81.toJSON();var __alloyId83 = Ti.UI.createTableViewRow({ title: __alloyId81.__transform.city + ' travelDates: ' + __alloyId81.__transform.travelDates, city: __alloyId81.__transform.city, idd: __alloyId81.__transform.id });
			rows.push(__alloyId83);
		}$.__views.__alloyId80.setData(rows);
	};__alloyId84.on('fetch destroy change add remove reset', __alloyId85);detailClick ? $.addListener($.__views.__alloyId80, 'click', detailClick) : __defers['$.__views.__alloyId80!click!detailClick'] = true;exports.destroy = function () {
		__alloyId84 && __alloyId84.off('fetch destroy change add remove reset', __alloyId85);
	};

	_.extend($, $.__views);

	var args = $.args;
	$.win.title = "My package";
	Alloy.Collections.packageData.fetch();
	console.log("mypackage is refresh");

	$.win.addEventListener("close", function () {
		$.destroy();
	});
	function detailClick(e) {
		var detailController = Alloy.createController('detail', {
			id: e.row.idd, city: e.row.city
		});

		Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
	};

	__defers['$.__views.__alloyId80!click!detailClick'] && $.addListener($.__views.__alloyId80, 'click', detailClick);

	_.extend($, exports);
}

module.exports = Controller;