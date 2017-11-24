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
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	var __alloyId8 = [];$.__views.__alloyId10 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab 1", id: "__alloyId10" });
	var __alloyId12 = [];$.__views.__alloyId13 = Ti.UI.createTableViewSection({ headerTitle: " ", id: "__alloyId13" });
	__alloyId12.push($.__views.__alloyId13);$.__views.__alloyId14 = Ti.UI.createTableViewRow({ title: "Computer Science", dept_id: "comp", hasChild: true, id: "__alloyId14" });
	$.__views.__alloyId13.add($.__views.__alloyId14);$.__views.__alloyId15 = Ti.UI.createTableViewSection({ headerTitle: " ", id: "__alloyId15" });
	__alloyId12.push($.__views.__alloyId15);$.__views.__alloyId16 = Ti.UI.createTableViewRow({ title: "Communication Studies", dept_id: "coms", hasChild: true, id: "__alloyId16" });
	$.__views.__alloyId15.add($.__views.__alloyId16);$.__views.__alloyId11 = Ti.UI.createTableView({ data: __alloyId12, id: "__alloyId11" });
	$.__views.__alloyId10.add($.__views.__alloyId11);
	tableClick ? $.addListener($.__views.__alloyId11, 'click', tableClick) : __defers['$.__views.__alloyId11!click!tableClick'] = true;$.__views.__alloyId9 = Ti.UI.createTab({ window: $.__views.__alloyId10, title: "Tab 1", icon: "KS_nav_ui.png", id: "__alloyId9" });
	__alloyId8.push($.__views.__alloyId9);$.__views.__alloyId18 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab 1", id: "__alloyId18" });
	$.__views.__alloyId19 = Ti.UI.createTableView({ id: "__alloyId19" });
	$.__views.__alloyId18.add($.__views.__alloyId19);
	var __alloyId27 = Alloy.Collections['webNews'] || webNews;function __alloyId28(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId28.opts || {};var models = __alloyId27.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
			var __alloyId20 = models[i];__alloyId20.__transform = transformFunction(__alloyId20);var __alloyId22 = Ti.UI.createTableViewRow({ layout: "vertical" });
			rows.push(__alloyId22);
			var __alloyId24 = Ti.UI.createImageView({ image: __alloyId20.__transform.image, top: 20 });
			__alloyId22.add(__alloyId24);
			var __alloyId26 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId20.__transform.name, bottom: 20 });
			__alloyId22.add(__alloyId26);
		}$.__views.__alloyId19.setData(rows);
	};__alloyId27.on('fetch destroy change add remove reset', __alloyId28);$.__views.__alloyId17 = Ti.UI.createTab({ window: $.__views.__alloyId18, title: "Tab233", icon: "KS_nav_ui.png", id: "__alloyId17" });
	__alloyId8.push($.__views.__alloyId17);$.__views.__alloyId30 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Map", navBarHidden: true, id: "__alloyId30" });
	var __alloyId31 = [];
	$.__views.acHall = require("ti.map").createAnnotation({ latitude: 22.341072, longitude: 114.179645, title: "AC Hall", subtitle: "香港浸會大學大學會堂", id: "acHall" });
	__alloyId31.push($.__views.acHall);
	$.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.337827, longitude: 114.181962, latitudeDelta: 0.006, longitudeDelta: 0.006 }, annotations: __alloyId31, id: "mapView", userLocation: true });
	$.__views.__alloyId30.add($.__views.mapView);
	$.__views.__alloyId32 = Ti.UI.createButton({ title: "Move", bottom: 10, id: "__alloyId32" });
	$.__views.mapView.add($.__views.__alloyId32);
	btClick ? $.addListener($.__views.__alloyId32, 'click', btClick) : __defers['$.__views.__alloyId32!click!btClick'] = true;$.__views.__alloyId29 = Ti.UI.createTab({ window: $.__views.__alloyId30, title: "Tab 2", icon: "KS_nav_views.png", id: "__alloyId29" });
	__alloyId8.push($.__views.__alloyId29);$.__views.__alloyId34 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Tab 2", id: "__alloyId34" });
	var __alloyId36 = [];$.__views.__alloyId37 = Ti.UI.createTableViewSection({ headerTitle: "About HKBU", id: "__alloyId37" });
	__alloyId36.push($.__views.__alloyId37);$.__views.__alloyId38 = Ti.UI.createTableViewRow({ id: "__alloyId38" });
	$.__views.__alloyId37.add($.__views.__alloyId38);$.__views.__alloyId39 = Ti.UI.createTextArea({ value: "Hong Kong Baptist University (HKBU) is a publicly funded tertiary institution with a Christian education heritage... \n", id: "__alloyId39" });
	$.__views.__alloyId38.add($.__views.__alloyId39);
	$.__views.__alloyId35 = Ti.UI.createTableView({ data: __alloyId36, id: "__alloyId35" });
	$.__views.__alloyId34.add($.__views.__alloyId35);
	$.__views.__alloyId33 = Ti.UI.createTab({ window: $.__views.__alloyId34, title: "Tab 2", icon: "KS_nav_views.png", id: "__alloyId33" });
	__alloyId8.push($.__views.__alloyId33);$.__views.index = Ti.UI.createTabGroup({ tabs: __alloyId8, id: "index" });
	$.__views.index && $.addTopLevelView($.__views.index);
	exports.destroy = function () {
		__alloyId27 && __alloyId27.off('fetch destroy change add remove reset', __alloyId28);
	};

	_.extend($, $.__views);

	$.index.open();
	function btClick(e) {
		$.mapView.region = {
			latitude: 22.339468,
			longitude: 114.181879,
			latitudeDelta: 0.001,
			longitudeDelta: 0.001
		};
	};
	function tableClick(e) {
		var eventListController = Alloy.createController('eventList', {
			dept_id: e.row.dept_id
		});

		$.index.activeTab.open(eventListController.getView());
	};

	__defers['$.__views.__alloyId11!click!tableClick'] && $.addListener($.__views.__alloyId11, 'click', tableClick);__defers['$.__views.__alloyId32!click!btClick'] && $.addListener($.__views.__alloyId32, 'click', btClick);

	_.extend($, exports);
}

module.exports = Controller;