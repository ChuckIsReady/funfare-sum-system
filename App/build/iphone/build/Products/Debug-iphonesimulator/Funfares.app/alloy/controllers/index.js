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

  var __alloyId22 = [];$.__views.__alloyId24 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Funfares", id: "__alloyId24" });
  $.__views.__alloyId25 = Ti.UI.createTableView({ id: "__alloyId25" });
  $.__views.__alloyId24.add($.__views.__alloyId25);
  var __alloyId35 = Alloy.Collections['place'] || place;function __alloyId36(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId36.opts || {};var models = __alloyId35.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId26 = models[i];__alloyId26.__transform = transformFunction(__alloyId26);var __alloyId28 = Ti.UI.createTableViewRow({ layout: "vertical", city: __alloyId26.__transform.city });
      rows.push(__alloyId28);
      var __alloyId30 = Ti.UI.createImageView({ image: __alloyId26.__transform.imageUrl, top: 20 });
      __alloyId28.add(__alloyId30);
      var __alloyId32 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId26.__transform.city, bottom: 20 });
      __alloyId28.add(__alloyId32);
      var __alloyId33 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 16, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId26.__transform.class + ' class, $' + __alloyId26.__transform.price, bottom: 20 });
      __alloyId28.add(__alloyId33);
      var __alloyId34 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#555", font: { fontSize: 12, fontFamily: "Helvetica Neue" }, textAlign: "left", text: 'ValidTill:' + __alloyId26.__transform.dataValidTill, bottom: 20 });
      __alloyId28.add(__alloyId34);
    }$.__views.__alloyId25.setData(rows);
  };__alloyId35.on('fetch destroy change add remove reset', __alloyId36);detailClick ? $.addListener($.__views.__alloyId25, 'click', detailClick) : __defers['$.__views.__alloyId25!click!detailClick'] = true;$.__views.__alloyId23 = Ti.UI.createTab({ window: $.__views.__alloyId24, title: "Funfares", icon: "home.png", id: "__alloyId23" });
  __alloyId22.push($.__views.__alloyId23);$.__views.__alloyId38 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Price Select", id: "__alloyId38" });
  var __alloyId40 = [];$.__views.__alloyId41 = Ti.UI.createTableViewSection({ headerTitle: "Business Class", id: "__alloyId41" });
  __alloyId40.push($.__views.__alloyId41);$.__views.__alloyId42 = Ti.UI.createTableViewRow({ title: "Under $7000", CompareType: "BU", hasChild: true, id: "__alloyId42" });
  $.__views.__alloyId41.add($.__views.__alloyId42);$.__views.__alloyId43 = Ti.UI.createTableViewRow({ title: "Above $7000", CompareType: "BA", hasChild: true, id: "__alloyId43" });
  $.__views.__alloyId41.add($.__views.__alloyId43);$.__views.__alloyId44 = Ti.UI.createTableViewSection({ headerTitle: "Economy Class", id: "__alloyId44" });
  __alloyId40.push($.__views.__alloyId44);$.__views.__alloyId45 = Ti.UI.createTableViewRow({ title: "Under $8000", CompareType: "EU", hasChild: true, id: "__alloyId45" });
  $.__views.__alloyId44.add($.__views.__alloyId45);$.__views.__alloyId46 = Ti.UI.createTableViewRow({ title: "Above $8000", CompareType: "EA", hasChild: true, id: "__alloyId46" });
  $.__views.__alloyId44.add($.__views.__alloyId46);$.__views.__alloyId39 = Ti.UI.createTableView({ data: __alloyId40, id: "__alloyId39" });
  $.__views.__alloyId38.add($.__views.__alloyId39);
  tableClick ? $.addListener($.__views.__alloyId39, 'click', tableClick) : __defers['$.__views.__alloyId39!click!tableClick'] = true;$.__views.__alloyId37 = Ti.UI.createTab({ window: $.__views.__alloyId38, title: "Price Select", icon: "price select.png", id: "__alloyId37" });
  __alloyId22.push($.__views.__alloyId37);$.__views.__alloyId48 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Area Select", id: "__alloyId48" });
  $.__views.__alloyId49 = Ti.UI.createTableView({ id: "__alloyId49" });
  $.__views.__alloyId48.add($.__views.__alloyId49);
  var __alloyId55 = Alloy.Collections['place'] || place;function __alloyId56(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId56.opts || {};var models = __alloyId55.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId50 = models[i];__alloyId50.__transform = getGroup(__alloyId50);var __alloyId54 = Ti.UI.createTableViewSection({ headerTitle: __alloyId50.__transform.headerTitle });
      rows.push(__alloyId54);
      var __alloyId53 = Ti.UI.createTableViewRow({ title: __alloyId50.__transform.city + ' Till: ' + __alloyId50.__transform.dataValidTill, hasChild: true, city: __alloyId50.__transform.city });
      __alloyId54.add(__alloyId53);
    }$.__views.__alloyId49.setData(rows);
  };__alloyId55.on('fetch destroy change add remove reset', __alloyId56);detailClick ? $.addListener($.__views.__alloyId49, 'click', detailClick) : __defers['$.__views.__alloyId49!click!detailClick'] = true;$.__views.__alloyId47 = Ti.UI.createTab({ window: $.__views.__alloyId48, title: "Area Select", icon: "place select.png", id: "__alloyId47" });
  __alloyId22.push($.__views.__alloyId47);$.__views.__alloyId58 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Map", navBarHidden: true, id: "__alloyId58" });
  var __alloyId59 = [];
  $.__views.__alloyId60 = require("ti.map").createAnnotation({ rightButton: Titanium.UI.iOS.SystemButton.DISCLOSURE, latitude: NaN, longitude: NaN, id: "__alloyId60" });
  __alloyId59.push($.__views.__alloyId60);
  $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.27856, longitude: 114.165228, latitudeDelta: 0.05, longitudeDelta: 0.05 }, annotations: __alloyId59, id: "mapView", userLocation: true });
  $.__views.__alloyId58.add($.__views.mapView);
  var __alloyId62 = Alloy.Collections['mapData'] || mapData;function __alloyId63(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId63.opts || {};var models = __alloyId62.models;var len = models.length;for (var i = 0; i < len; i++) {
      var __alloyId61 = models[i];__alloyId59.push(require('ti.map').createAnnotation(getMapPoint(__alloyId61)));
    }$.__views.mapView.annotations = __alloyId59;
  };__alloyId62.on('fetch destroy change add remove reset', __alloyId63);mapClicked ? $.addListener($.__views.mapView, 'click', mapClicked) : __defers['$.__views.mapView!click!mapClicked'] = true;$.__views.__alloyId57 = Ti.UI.createTab({ window: $.__views.__alloyId58, title: "Map", icon: "map.png", id: "__alloyId57" });
  __alloyId22.push($.__views.__alloyId57);$.__views.userWin = Ti.UI.createWindow({ backgroundColor: "#fff", title: "User", layout: "vertical", id: "userWin" });
  $.__views.__alloyId64 = Ti.UI.createImageView({ image: "admin.png", top: 20, width: "200px", id: "__alloyId64" });
  $.__views.userWin.add($.__views.__alloyId64);
  $.__views.userLabel = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: "Welcome! Please Login!", id: "userLabel", top: 20 });
  $.__views.userWin.add($.__views.userLabel);
  var __alloyId66 = [];$.__views.__alloyId67 = Ti.UI.createTableViewSection({ headerTitle: "", id: "__alloyId67" });
  __alloyId66.push($.__views.__alloyId67);$.__views.loginRow = Ti.UI.createTableViewRow({ title: "Login", hasChild: true, id: "loginRow" });
  $.__views.__alloyId67.add($.__views.loginRow);loginClick ? $.addListener($.__views.loginRow, 'click', loginClick) : __defers['$.__views.loginRow!click!loginClick'] = true;$.__views.__alloyId68 = Ti.UI.createTableViewRow({ title: "Booked Package", hasChild: true, hidden: true, id: "__alloyId68" });
  $.__views.__alloyId67.add($.__views.__alloyId68);getMyPackage ? $.addListener($.__views.__alloyId68, 'click', getMyPackage) : __defers['$.__views.__alloyId68!click!getMyPackage'] = true;$.__views.__alloyId69 = Ti.UI.createTableViewRow({ title: "About Us", hasChild: true, id: "__alloyId69" });
  $.__views.__alloyId67.add($.__views.__alloyId69);aboutUs ? $.addListener($.__views.__alloyId69, 'click', aboutUs) : __defers['$.__views.__alloyId69!click!aboutUs'] = true;$.__views.__alloyId65 = Ti.UI.createTableView({ data: __alloyId66, id: "__alloyId65" });
  $.__views.userWin.add($.__views.__alloyId65);
  $.__views.userTab = Ti.UI.createTab({ window: $.__views.userWin, title: "User", icon: "login.png", id: "userTab" });
  __alloyId22.push($.__views.userTab);$.__views.index = Ti.UI.createTabGroup({ tabs: __alloyId22, id: "index" });
  $.__views.index && $.addTopLevelView($.__views.index);
  exports.destroy = function () {
    __alloyId35 && __alloyId35.off('fetch destroy change add remove reset', __alloyId36);__alloyId55 && __alloyId55.off('fetch destroy change add remove reset', __alloyId56);__alloyId62 && __alloyId62.off('fetch destroy change add remove reset', __alloyId63);
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
  function loginClick() {
    if (Alloy.Globals.username == "") {
      var Controller = Alloy.createController('login', {});
      $.index.activeTab.open(Controller.getView());
    } else {
      var xhr = Ti.Network.createHTTPClient();
      xhr.onload = function (e) {
        var res = JSON.parse(this.responseText);
        if (res.msg == "Logout successfully") {
          Alloy.Globals.username = "";
          Alloy.Globals.userLabel.text = "Welcome! Please Login!";
          Alloy.Globals.loginRow.title = "Login";
        } else alert("Logout Error! please contact admin!");
      };
      xhr.open('POST', Alloy.Globals.host + '/user/logout');
      xhr.send();
    }
  }
  function getMyPackage() {
    if (Alloy.Globals.username == "") {
      alert("Please login first!");
      return false;
    }

    var jumpMapController = Alloy.createController('package', {});

    Alloy.Globals.tabGroup.activeTab.open(jumpMapController.getView());
  }

  function aboutUs() {
    alert("Funfare App \n Name: Cheng Bo\n Id: 17433045");
  }

  Alloy.Globals.host = "http://localhost:1337";

  Alloy.Globals.tabGroup = $.index;
  Alloy.Globals.userLabel = $.userLabel;
  Alloy.Globals.loginRow = $.loginRow;

  __defers['$.__views.__alloyId25!click!detailClick'] && $.addListener($.__views.__alloyId25, 'click', detailClick);__defers['$.__views.__alloyId39!click!tableClick'] && $.addListener($.__views.__alloyId39, 'click', tableClick);__defers['$.__views.__alloyId49!click!detailClick'] && $.addListener($.__views.__alloyId49, 'click', detailClick);__defers['$.__views.mapView!click!mapClicked'] && $.addListener($.__views.mapView, 'click', mapClicked);__defers['$.__views.loginRow!click!loginClick'] && $.addListener($.__views.loginRow, 'click', loginClick);__defers['$.__views.__alloyId68!click!getMyPackage'] && $.addListener($.__views.__alloyId68, 'click', getMyPackage);__defers['$.__views.__alloyId69!click!aboutUs'] && $.addListener($.__views.__alloyId69, 'click', aboutUs);

  _.extend($, exports);
}

module.exports = Controller;