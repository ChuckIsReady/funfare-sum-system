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
	this.__controllerPath = 'jumpMap';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	Alloy.Collections.instance('mapData');

	$.__views.win = Ti.UI.createWindow({ title: "Map", navBarHidden: false, id: "win" });
	$.__views.win && $.addTopLevelView($.__views.win);
	var __alloyId65 = [];
	$.__views.__alloyId66 = require("ti.map").createAnnotation({ latitude: NaN, longitude: NaN, id: "__alloyId66" });
	__alloyId65.push($.__views.__alloyId66);
	$.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.27856, longitude: 114.165228, latitudeDelta: 0.05, longitudeDelta: 0.05 }, annotations: __alloyId65, id: "mapView", userLocation: true });
	$.__views.win.add($.__views.mapView);
	var __alloyId68 = Alloy.Collections['mapData'] || mapData;function __alloyId69(e) {
		if (e && e.fromAdapter) {
			return;
		}var opts = __alloyId69.opts || {};var models = mapfilter(__alloyId68);var len = models.length;for (var i = 0; i < len; i++) {
			var __alloyId67 = models[i];__alloyId65.push(require('ti.map').createAnnotation(getMapPoint(__alloyId67)));
		}$.__views.mapView.annotations = __alloyId65;
	};__alloyId68.on('fetch destroy change add remove reset', __alloyId69);exports.destroy = function () {
		__alloyId68 && __alloyId68.off('fetch destroy change add remove reset', __alloyId69);
	};

	_.extend($, $.__views);

	var args = $.args;

	$.win.title = args.city + " on the Map";
	$.win.addEventListener("close", function () {
		$.destroy();
	});

	Alloy.Collections.mapData.fetch();
	function mapfilter(collection) {
		return collection.filter(function (model) {
			model.titile = args.city;
			return model.get("city") == args.city;
		});
	}

	function getMapPoint(model) {
		transform = model.toJSON();
		transform.title = transform.country + " Consulate General";
		transform.subtitle = transform.city;
		return transform;
	}

	_.extend($, exports);
}

module.exports = Controller;