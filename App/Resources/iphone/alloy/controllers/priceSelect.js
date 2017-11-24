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
		$.__views.__alloyId84 = Ti.UI.createTableView({ id: "__alloyId84" });
		$.__views.win.add($.__views.__alloyId84);
		var __alloyId88 = Alloy.Collections['place'] || place;function __alloyId89(e) {
				if (e && e.fromAdapter) {
						return;
				}var opts = __alloyId89.opts || {};var models = Pricefilter(__alloyId88);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
						var __alloyId85 = models[i];__alloyId85.__transform = _.isFunction(__alloyId85.transform) ? __alloyId85.transform() : __alloyId85.toJSON();var __alloyId87 = Ti.UI.createTableViewRow({ title: __alloyId85.__transform.city + ' Till: ' + __alloyId85.__transform.dataValidTill, city: __alloyId85.__transform.city });
						rows.push(__alloyId87);
				}$.__views.__alloyId84.setData(rows);
		};__alloyId88.on('fetch destroy change add remove reset', __alloyId89);detailClick ? $.addListener($.__views.__alloyId84, 'click', detailClick) : __defers['$.__views.__alloyId84!click!detailClick'] = true;exports.destroy = function () {
				__alloyId88 && __alloyId88.off('fetch destroy change add remove reset', __alloyId89);
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

		__defers['$.__views.__alloyId84!click!detailClick'] && $.addListener($.__views.__alloyId84, 'click', detailClick);

		_.extend($, exports);
}

module.exports = Controller;