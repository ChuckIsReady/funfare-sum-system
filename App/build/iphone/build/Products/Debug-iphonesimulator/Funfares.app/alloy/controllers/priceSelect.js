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
		this.__controllerPath = 'priceSelect';
		this.args = arguments[0] || {};

		if (arguments[0]) {
				var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
				var $model = __processArg(arguments[0], '$model');
				var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
		}
		var $ = this;
		var exports = {};
		var __defers = {};

		Alloy.Collections.instance('place');

		$.__views.win = Ti.UI.createWindow({ id: "win" });
		$.__views.win && $.addTopLevelView($.__views.win);
		$.__views.__alloyId79 = Ti.UI.createTableView({ id: "__alloyId79" });
		$.__views.win.add($.__views.__alloyId79);
		var __alloyId83 = Alloy.Collections['place'] || place;function __alloyId84(e) {
				if (e && e.fromAdapter) {
						return;
				}var opts = __alloyId84.opts || {};var models = Pricefilter(__alloyId83);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
						var __alloyId80 = models[i];__alloyId80.__transform = _.isFunction(__alloyId80.transform) ? __alloyId80.transform() : __alloyId80.toJSON();var __alloyId82 = Ti.UI.createTableViewRow({ title: __alloyId80.__transform.city + ' Till: ' + __alloyId80.__transform.dataValidTill, city: __alloyId80.__transform.city });
						rows.push(__alloyId82);
				}$.__views.__alloyId79.setData(rows);
		};__alloyId83.on('fetch destroy change add remove reset', __alloyId84);detailClick ? $.addListener($.__views.__alloyId79, 'click', detailClick) : __defers['$.__views.__alloyId79!click!detailClick'] = true;exports.destroy = function () {
				__alloyId83 && __alloyId83.off('fetch destroy change add remove reset', __alloyId84);
		};

		_.extend($, $.__views);

		var args = $.args;
		var id = args.id || {};
		console.log(args);
		$.win.title = "Price Select";
		Alloy.Collections.place.fetch();
		$.win.addEventListener("close", function () {
				$.destroy();
		});
		function Pricefilter(collection) {
				return collection.filter(function (model) {
						switch (args.CompareType) {
								case "BU":
										return model.get("class") == "Business" && model.get("price") < 7000;
										break;
								case "BA":
										return model.get("class") == "Business" && model.get("price") >= 7000;
										break;
								case "EU":
										return model.get("class") == "Economy" && model.get("price") < 8000;
										break;
								case "EA":
										return model.get("class") == "Economy" && model.get("price") >= 8000;
										break;

						}
				});
		}
		function detailClick(e) {
				var detailController = Alloy.createController('detail', {
						id: e.row.id, city: e.row.city
				});

				Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
		};

		__defers['$.__views.__alloyId79!click!detailClick'] && $.addListener($.__views.__alloyId79, 'click', detailClick);

		_.extend($, exports);
}

module.exports = Controller;