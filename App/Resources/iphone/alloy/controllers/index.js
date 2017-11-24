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

  Alloy.Collections.instance('place');Alloy.Collections.instance('mapData');

  var __alloyId21 = [];$.__views.__alloyId23 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Funfares", id: "__alloyId23" });
  $.__views.__alloyId24 = Ti.UI.createTableView({ id: "__alloyId24" });
  $.__views.__alloyId23.add($.__views.__alloyId24);
  var __alloyId34 = Alloy.Collections['place'] || place;function __alloyId35(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId35.opts || {};var models = __alloyId34.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId25 = models[i];__alloyId25.__transform = transformFunction(__alloyId25);var __alloyId27 = Ti.UI.createTableViewRow({ layout: "vertical", city: __alloyId25.__transform.city });
      rows.push(__alloyId27);
      var __alloyId29 = Ti.UI.createImageView({ image: __alloyId25.__transform.imageUrl, top: 20 });
      __alloyId27.add(__alloyId29);
      var __alloyId31 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId25.__transform.city, bottom: 20 });
      __alloyId27.add(__alloyId31);
      var __alloyId32 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 16, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId25.__transform.class + ' class, $' + __alloyId25.__transform.price, bottom: 20 });
      __alloyId27.add(__alloyId32);
      var __alloyId33 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#555", font: { fontSize: 12, fontFamily: "Helvetica Neue" }, textAlign: "left", text: 'ValidTill:' + __alloyId25.__transform.dataValidTill, bottom: 20 });
      __alloyId27.add(__alloyId33);
    }$.__views.__alloyId24.setData(rows);
  };__alloyId34.on('fetch destroy change add remove reset', __alloyId35);detailClick ? $.addListener($.__views.__alloyId24, 'click', detailClick) : __defers['$.__views.__alloyId24!click!detailClick'] = true;$.__views.__alloyId22 = Ti.UI.createTab({ window: $.__views.__alloyId23, title: "Funfares", icon: "home.png", id: "__alloyId22" });
  __alloyId21.push($.__views.__alloyId22);$.__views.__alloyId37 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Price Select", id: "__alloyId37" });
  var __alloyId39 = [];$.__views.__alloyId40 = Ti.UI.createTableViewSection({ headerTitle: "Business Class", id: "__alloyId40" });
  __alloyId39.push($.__views.__alloyId40);$.__views.__alloyId41 = Ti.UI.createTableViewRow({ title: "Under $7000", CompareType: "BU", hasChild: true, id: "__alloyId41" });
  $.__views.__alloyId40.add($.__views.__alloyId41);$.__views.__alloyId42 = Ti.UI.createTableViewRow({ title: "Above $7000", CompareType: "BA", hasChild: true, id: "__alloyId42" });
  $.__views.__alloyId40.add($.__views.__alloyId42);$.__views.__alloyId43 = Ti.UI.createTableViewSection({ headerTitle: "Economy Class", id: "__alloyId43" });
  __alloyId39.push($.__views.__alloyId43);$.__views.__alloyId44 = Ti.UI.createTableViewRow({ title: "Under $8000", CompareType: "EU", hasChild: true, id: "__alloyId44" });
  $.__views.__alloyId43.add($.__views.__alloyId44);$.__views.__alloyId45 = Ti.UI.createTableViewRow({ title: "Above $8000", CompareType: "EA", hasChild: true, id: "__alloyId45" });
  $.__views.__alloyId43.add($.__views.__alloyId45);$.__views.__alloyId38 = Ti.UI.createTableView({ data: __alloyId39, id: "__alloyId38" });
  $.__views.__alloyId37.add($.__views.__alloyId38);
  tableClick ? $.addListener($.__views.__alloyId38, 'click', tableClick) : __defers['$.__views.__alloyId38!click!tableClick'] = true;$.__views.__alloyId36 = Ti.UI.createTab({ window: $.__views.__alloyId37, title: "Price Select", icon: "price select.png", id: "__alloyId36" });
  __alloyId21.push($.__views.__alloyId36);$.__views.__alloyId47 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Area Select", id: "__alloyId47" });
  $.__views.__alloyId48 = Ti.UI.createTableView({ id: "__alloyId48" });
  $.__views.__alloyId47.add($.__views.__alloyId48);
  var __alloyId54 = Alloy.Collections['place'] || place;function __alloyId55(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId55.opts || {};var models = __alloyId54.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId49 = models[i];__alloyId49.__transform = getGroup(__alloyId49);var __alloyId53 = Ti.UI.createTableViewSection({ headerTitle: __alloyId49.__transform.headerTitle });
      rows.push(__alloyId53);
      var __alloyId52 = Ti.UI.createTableViewRow({ title: __alloyId49.__transform.city + ' Till: ' + __alloyId49.__transform.dataValidTill, hasChild: true, city: __alloyId49.__transform.city });
      __alloyId53.add(__alloyId52);
    }$.__views.__alloyId48.setData(rows);
  };__alloyId54.on('fetch destroy change add remove reset', __alloyId55);detailClick ? $.addListener($.__views.__alloyId48, 'click', detailClick) : __defers['$.__views.__alloyId48!click!detailClick'] = true;$.__views.__alloyId46 = Ti.UI.createTab({ window: $.__views.__alloyId47, title: "Area Select", icon: "place select.png", id: "__alloyId46" });
  __alloyId21.push($.__views.__alloyId46);$.__views.__alloyId57 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Map", navBarHidden: true, id: "__alloyId57" });
  var __alloyId58 = [];
  $.__views.__alloyId59 = require("ti.map").createAnnotation({ rightButton: Titanium.UI.iOS.SystemButton.DISCLOSURE, latitude: NaN, longitude: NaN, id: "__alloyId59" });
  __alloyId58.push($.__views.__alloyId59);
  $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.27856, longitude: 114.165228, latitudeDelta: 0.05, longitudeDelta: 0.05 }, annotations: __alloyId58, id: "mapView", userLocation: true });
  $.__views.__alloyId57.add($.__views.mapView);
  var __alloyId61 = Alloy.Collections['mapData'] || mapData;function __alloyId62(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId62.opts || {};var models = __alloyId61.models;var len = models.length;for (var i = 0; i < len; i++) {
      var __alloyId60 = models[i];__alloyId58.push(require('ti.map').createAnnotation(getMapPoint(__alloyId60)));
    }$.__views.mapView.annotations = __alloyId58;
  };__alloyId61.on('fetch destroy change add remove reset', __alloyId62);mapClicked ? $.addListener($.__views.mapView, 'click', mapClicked) : __defers['$.__views.mapView!click!mapClicked'] = true;$.__views.__alloyId56 = Ti.UI.createTab({ window: $.__views.__alloyId57, title: "Map", icon: "map.png", id: "__alloyId56" });
  __alloyId21.push($.__views.__alloyId56);$.__views.userWin = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Login", layout: "vertical", id: "userWin" });
  $.__views.userTab = Ti.UI.createTab({ window: $.__views.userWin, title: "Login", icon: "login.png", id: "userTab" });
  __alloyId21.push($.__views.userTab);loginSwitch ? $.addListener($.__views.userTab, 'click', loginSwitch) : __defers['$.__views.userTab!click!loginSwitch'] = true;$.__views.index = Ti.UI.createTabGroup({ tabs: __alloyId21, id: "index" });
  $.__views.index && $.addTopLevelView($.__views.index);
  exports.destroy = function () {
    __alloyId34 && __alloyId34.off('fetch destroy change add remove reset', __alloyId35);__alloyId54 && __alloyId54.off('fetch destroy change add remove reset', __alloyId55);__alloyId61 && __alloyId61.off('fetch destroy change add remove reset', __alloyId62);
  };

  _.extend($, $.__views);

  $.index.open();
  Alloy.Globals.username = "";
  Alloy.Collections.place.fetch();
  Alloy.Collections.mapData.fetch();
  function btClick(e) {
    $.mapView.region = {
      latitude: 22.339468,
      longitude: 114.181879,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    };
  };
  function tableClick(e) {
    var priceSelectController = Alloy.createController('priceSelect', {
      id: e.row.id, CompareType: e.row.CompareType
    });

    $.index.activeTab.open(priceSelectController.getView());
  };
  function detailClick(e) {
    var detailController = Alloy.createController('detail', {
      id: e.row.id, city: e.row.city
    });

    $.index.activeTab.open(detailController.getView());
  };

  function transformFunction(model) {
    var transform = model.toJSON();
    return transform;
  }
  function getMapPoint(model) {
    transform = model.toJSON();
    transform.title = transform.country + " Consulate General";
    transform.subtitle = transform.city;
    transform.rightButton = Titanium.UI.iOS.SystemButton.DISCLOSURE;
    return transform;
  }
  var pr = "";
  function getGroup(model) {
    var transform = model.toJSON();
    var g = transform.region;
    if (g != pr) {
      transform.headerTitle = g;
      pr = g;
    }
    return transform;
  }
  function mapClicked(e) {

    if (e.clicksource == 'rightButton') {
      console.log(e.annotation.city);
      var detailController = Alloy.createController('detail', {
        city: e.annotation.city
      });

      $.index.activeTab.open(detailController.getView());
    }
  }
  function loginSwitch() {
    if (Alloy.Globals.name == "") {
      var Controller = Alloy.createController('login', {});
    } else {
      var Controller = Alloy.createController('user', {});
    }
    $.index.activeTab.open(Controller.getView());
  }
  Alloy.Globals.host = "http://localhost:1337";

  Alloy.Globals.tabGroup = $.index;

  __defers['$.__views.__alloyId24!click!detailClick'] && $.addListener($.__views.__alloyId24, 'click', detailClick);__defers['$.__views.__alloyId38!click!tableClick'] && $.addListener($.__views.__alloyId38, 'click', tableClick);__defers['$.__views.__alloyId48!click!detailClick'] && $.addListener($.__views.__alloyId48, 'click', detailClick);__defers['$.__views.mapView!click!mapClicked'] && $.addListener($.__views.mapView, 'click', mapClicked);__defers['$.__views.userTab!click!loginSwitch'] && $.addListener($.__views.userTab, 'click', loginSwitch);

  _.extend($, exports);
}

module.exports = Controller;