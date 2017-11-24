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

  var __alloyId26 = [];$.__views.__alloyId28 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Funfares", id: "__alloyId28" });
  $.__views.__alloyId29 = Ti.UI.createTableView({ id: "__alloyId29" });
  $.__views.__alloyId28.add($.__views.__alloyId29);
  var __alloyId39 = Alloy.Collections['place'] || place;function __alloyId40(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId40.opts || {};var models = __alloyId39.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId30 = models[i];__alloyId30.__transform = transformFunction(__alloyId30);var __alloyId32 = Ti.UI.createTableViewRow({ layout: "vertical", city: __alloyId30.__transform.city });
      rows.push(__alloyId32);
      var __alloyId34 = Ti.UI.createImageView({ image: __alloyId30.__transform.imageUrl, top: 20 });
      __alloyId32.add(__alloyId34);
      var __alloyId36 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId30.__transform.city, bottom: 20 });
      __alloyId32.add(__alloyId36);
      var __alloyId37 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 16, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId30.__transform.class + ' class, $' + __alloyId30.__transform.price, bottom: 20 });
      __alloyId32.add(__alloyId37);
      var __alloyId38 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#555", font: { fontSize: 12, fontFamily: "Helvetica Neue" }, textAlign: "left", text: 'ValidTill:' + __alloyId30.__transform.dataValidTill, bottom: 20 });
      __alloyId32.add(__alloyId38);
    }$.__views.__alloyId29.setData(rows);
  };__alloyId39.on('fetch destroy change add remove reset', __alloyId40);detailClick ? $.addListener($.__views.__alloyId29, 'click', detailClick) : __defers['$.__views.__alloyId29!click!detailClick'] = true;$.__views.__alloyId27 = Ti.UI.createTab({ window: $.__views.__alloyId28, title: "Funfares", icon: "home.png", id: "__alloyId27" });
  __alloyId26.push($.__views.__alloyId27);$.__views.__alloyId42 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Price Select", id: "__alloyId42" });
  var __alloyId44 = [];$.__views.__alloyId45 = Ti.UI.createTableViewSection({ headerTitle: "Business Class", id: "__alloyId45" });
  __alloyId44.push($.__views.__alloyId45);$.__views.__alloyId46 = Ti.UI.createTableViewRow({ title: "Under $7000", CompareType: "BU", hasChild: true, id: "__alloyId46" });
  $.__views.__alloyId45.add($.__views.__alloyId46);$.__views.__alloyId47 = Ti.UI.createTableViewRow({ title: "Above $7000", CompareType: "BA", hasChild: true, id: "__alloyId47" });
  $.__views.__alloyId45.add($.__views.__alloyId47);$.__views.__alloyId48 = Ti.UI.createTableViewSection({ headerTitle: "Economy Class", id: "__alloyId48" });
  __alloyId44.push($.__views.__alloyId48);$.__views.__alloyId49 = Ti.UI.createTableViewRow({ title: "Under $8000", CompareType: "EU", hasChild: true, id: "__alloyId49" });
  $.__views.__alloyId48.add($.__views.__alloyId49);$.__views.__alloyId50 = Ti.UI.createTableViewRow({ title: "Above $8000", CompareType: "EA", hasChild: true, id: "__alloyId50" });
  $.__views.__alloyId48.add($.__views.__alloyId50);$.__views.__alloyId43 = Ti.UI.createTableView({ data: __alloyId44, id: "__alloyId43" });
  $.__views.__alloyId42.add($.__views.__alloyId43);
  tableClick ? $.addListener($.__views.__alloyId43, 'click', tableClick) : __defers['$.__views.__alloyId43!click!tableClick'] = true;$.__views.__alloyId41 = Ti.UI.createTab({ window: $.__views.__alloyId42, title: "Price Select", icon: "price select.png", id: "__alloyId41" });
  __alloyId26.push($.__views.__alloyId41);$.__views.__alloyId52 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Area Select", id: "__alloyId52" });
  $.__views.__alloyId53 = Ti.UI.createTableView({ id: "__alloyId53" });
  $.__views.__alloyId52.add($.__views.__alloyId53);
  var __alloyId59 = Alloy.Collections['place'] || place;function __alloyId60(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId60.opts || {};var models = __alloyId59.models;var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId54 = models[i];__alloyId54.__transform = getGroup(__alloyId54);var __alloyId58 = Ti.UI.createTableViewSection({ headerTitle: __alloyId54.__transform.headerTitle });
      rows.push(__alloyId58);
      var __alloyId57 = Ti.UI.createTableViewRow({ title: __alloyId54.__transform.city + ' Till: ' + __alloyId54.__transform.dataValidTill, hasChild: true, city: __alloyId54.__transform.city });
      __alloyId58.add(__alloyId57);
    }$.__views.__alloyId53.setData(rows);
  };__alloyId59.on('fetch destroy change add remove reset', __alloyId60);detailClick ? $.addListener($.__views.__alloyId53, 'click', detailClick) : __defers['$.__views.__alloyId53!click!detailClick'] = true;$.__views.__alloyId51 = Ti.UI.createTab({ window: $.__views.__alloyId52, title: "Area Select", icon: "place select.png", id: "__alloyId51" });
  __alloyId26.push($.__views.__alloyId51);$.__views.__alloyId62 = Ti.UI.createWindow({ backgroundColor: "#fff", title: "Map", navBarHidden: true, id: "__alloyId62" });
  var __alloyId63 = [];
  $.__views.__alloyId64 = require("ti.map").createAnnotation({ rightButton: Titanium.UI.iOS.SystemButton.DISCLOSURE, latitude: NaN, longitude: NaN, id: "__alloyId64" });
  __alloyId63.push($.__views.__alloyId64);
  $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({ region: { latitude: 22.27856, longitude: 114.165228, latitudeDelta: 0.05, longitudeDelta: 0.05 }, annotations: __alloyId63, id: "mapView", userLocation: true });
  $.__views.__alloyId62.add($.__views.mapView);
  var __alloyId66 = Alloy.Collections['mapData'] || mapData;function __alloyId67(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId67.opts || {};var models = __alloyId66.models;var len = models.length;for (var i = 0; i < len; i++) {
      var __alloyId65 = models[i];__alloyId63.push(require('ti.map').createAnnotation(getMapPoint(__alloyId65)));
    }$.__views.mapView.annotations = __alloyId63;
  };__alloyId66.on('fetch destroy change add remove reset', __alloyId67);mapClicked ? $.addListener($.__views.mapView, 'click', mapClicked) : __defers['$.__views.mapView!click!mapClicked'] = true;$.__views.__alloyId61 = Ti.UI.createTab({ window: $.__views.__alloyId62, title: "Map", icon: "map.png", id: "__alloyId61" });
  __alloyId26.push($.__views.__alloyId61);$.__views.userWin = Ti.UI.createWindow({ backgroundColor: "#fff", title: "User", layout: "vertical", id: "userWin" });
  $.__views.__alloyId68 = Ti.UI.createImageView({ image: "admin.png", top: 20, width: "200px", id: "__alloyId68" });
  $.__views.userWin.add($.__views.__alloyId68);
  $.__views.userLabel = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: "Welcome! Please Login!", id: "userLabel", top: 20 });
  $.__views.userWin.add($.__views.userLabel);
  var __alloyId70 = [];$.__views.__alloyId71 = Ti.UI.createTableViewSection({ headerTitle: "", id: "__alloyId71" });
  __alloyId70.push($.__views.__alloyId71);$.__views.loginRow = Ti.UI.createTableViewRow({ title: "Login", hasChild: true, id: "loginRow" });
  $.__views.__alloyId71.add($.__views.loginRow);loginClick ? $.addListener($.__views.loginRow, 'click', loginClick) : __defers['$.__views.loginRow!click!loginClick'] = true;$.__views.__alloyId72 = Ti.UI.createTableViewRow({ title: "Booked Package", hasChild: true, hidden: true, id: "__alloyId72" });
  $.__views.__alloyId71.add($.__views.__alloyId72);$.__views.__alloyId73 = Ti.UI.createTableViewRow({ title: "About Us", hasChild: true, id: "__alloyId73" });
  $.__views.__alloyId71.add($.__views.__alloyId73);$.__views.__alloyId69 = Ti.UI.createTableView({ data: __alloyId70, id: "__alloyId69" });
  $.__views.userWin.add($.__views.__alloyId69);
  $.__views.userTab = Ti.UI.createTab({ window: $.__views.userWin, title: "User", icon: "login.png", id: "userTab" });
  __alloyId26.push($.__views.userTab);$.__views.index = Ti.UI.createTabGroup({ tabs: __alloyId26, id: "index" });
  $.__views.index && $.addTopLevelView($.__views.index);
  exports.destroy = function () {
    __alloyId39 && __alloyId39.off('fetch destroy change add remove reset', __alloyId40);__alloyId59 && __alloyId59.off('fetch destroy change add remove reset', __alloyId60);__alloyId66 && __alloyId66.off('fetch destroy change add remove reset', __alloyId67);
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

  Alloy.Globals.host = "http://localhost:1337";

  Alloy.Globals.tabGroup = $.index;
  Alloy.Globals.userLabel = $.userLabel;
  Alloy.Globals.loginRow = $.loginRow;

  __defers['$.__views.__alloyId29!click!detailClick'] && $.addListener($.__views.__alloyId29, 'click', detailClick);__defers['$.__views.__alloyId43!click!tableClick'] && $.addListener($.__views.__alloyId43, 'click', tableClick);__defers['$.__views.__alloyId53!click!detailClick'] && $.addListener($.__views.__alloyId53, 'click', detailClick);__defers['$.__views.mapView!click!mapClicked'] && $.addListener($.__views.mapView, 'click', mapClicked);__defers['$.__views.loginRow!click!loginClick'] && $.addListener($.__views.loginRow, 'click', loginClick);

  _.extend($, exports);
}

module.exports = Controller;