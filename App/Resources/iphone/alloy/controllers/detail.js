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
  this.__controllerPath = 'detail';
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
  $.__views.__alloyId2 = Ti.UI.createTableView({ id: "__alloyId2" });
  $.__views.win.add($.__views.__alloyId2);
  var __alloyId16 = Alloy.Collections['place'] || place;function __alloyId17(e) {
    if (e && e.fromAdapter) {
      return;
    }var opts = __alloyId17.opts || {};var models = detailDisplay(__alloyId16);var len = models.length;var rows = [];for (var i = 0; i < len; i++) {
      var __alloyId3 = models[i];__alloyId3.__transform = _.isFunction(__alloyId3.transform) ? __alloyId3.transform() : __alloyId3.toJSON();var __alloyId5 = Ti.UI.createTableViewRow({ layout: "vertical" });
      rows.push(__alloyId5);
      var __alloyId7 = Ti.UI.createImageView({ image: __alloyId3.__transform.imageUrl, top: 20 });
      __alloyId5.add(__alloyId7);
      var __alloyId9 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 20, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId3.__transform.city, bottom: 20 });
      __alloyId5.add(__alloyId9);
      var __alloyId10 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 16, fontFamily: "Helvetica Neue" }, textAlign: "center", text: __alloyId3.__transform.class + ' class, $' + __alloyId3.__transform.price, bottom: 20 });
      __alloyId5.add(__alloyId10);
      var __alloyId11 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#000", font: { fontSize: 16, fontFamily: "Helvetica Neue" }, textAlign: "center", text: 'Date: ' + __alloyId3.__transform.travelDatesStart + ' - ' + __alloyId3.__transform.travelDatesEnd, bottom: 20 });
      __alloyId5.add(__alloyId11);
      var __alloyId12 = Ti.UI.createLabel({ width: Ti.UI.SIZE, height: Ti.UI.SIZE, color: "#555", font: { fontSize: 12, fontFamily: "Helvetica Neue" }, textAlign: "left", text: 'Quota: ' + __alloyId3.__transform.overallQuota + ' ValidTill:' + __alloyId3.__transform.dataValidTill, bottom: 20 });
      __alloyId5.add(__alloyId12);
      var __alloyId14 = Ti.UI.createButton({ title: "Address for Visa Application", top: 10 });
      __alloyId5.add(__alloyId14);
      jumpToMap ? $.addListener(__alloyId14, 'click', jumpToMap) : __defers['__alloyId14!click!jumpToMap'] = true;var __alloyId15 = Ti.UI.createButton({ idd: __alloyId3.__transform.id, city: __alloyId3.__transform.city, quota: __alloyId3.__transform.overallQuota, travelDates: __alloyId3.__transform.travelDatesStart + ' - ' + __alloyId3.__transform.travelDatesEnd, classs: __alloyId3.__transform.class, title: "Buy this package", top: 5, bottom: 90, width: 200, color: "#fff", borderRadius: 5, backgroundColor: "#00c0ff" });
      __alloyId5.add(__alloyId15);
      buyPackage ? $.addListener(__alloyId15, 'click', buyPackage) : __defers['__alloyId15!click!buyPackage'] = true;
    }$.__views.__alloyId2.setData(rows);
  };__alloyId16.on('fetch destroy change add remove reset', __alloyId17);exports.destroy = function () {
    __alloyId16 && __alloyId16.off('fetch destroy change add remove reset', __alloyId17);
  };

  _.extend($, $.__views);

  var args = $.args;
  console.log(args);
  $.win.title = args.city + " Detail";

  $.win.addEventListener("close", function () {
    $.destroy();
  });
  Alloy.Collections.place.fetch();

  function jumpToMap() {
    var jumpMapController = Alloy.createController('jumpMap', {
      city: args.city
    });

    Alloy.Globals.tabGroup.activeTab.open(jumpMapController.getView());
  }

  function detailClick(e) {
    var detailController = Alloy.createController('detail', {
      id: e.row.id, city: e.row.city
    });

    Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
  };

  function detailDisplay(collection) {
    return collection.filter(function (model) {
      return model.get("city") == args.city;
    });
  }

  var opts = { title: 'Are you sure?\n Book this Package?' };
  opts.options = ['Yes', 'No'];

  item = {};
  function onSelectDialog(e) {

    if (e.index == 0) {
      if (item.quota < 1) {
        alert("Transaction Unsuccessful.\n Package already full.");
        return false;
      }

      var xhr = Ti.Network.createHTTPClient();
      xhr.onload = function (e) {
        var res = JSON.parse(this.responseText);
        if (res.msg == "Order Successfully") {
          alert("Package Successfully Booked!");
        } else alert("Order Error!");
      };
      xhr.open('POST', Alloy.Globals.host + '/order/createAjax');
      xhr.send({
        "id": item.idd,
        "travelDates": item.travelDates,
        "class": item.classs,
        "city": item.city
      });
    } else {
      return false;
    }
  }

  function buyPackage(e) {

    if (Alloy.Globals.username == "") {
      alert("Please login first!");
      return false;
    }

    var dialog;
    dialog = Ti.UI.createOptionDialog(opts);
    item.idd = e.source.idd, item.travelDates = e.source.travelDates, item.classs = e.source.classs, item.city = e.source.city;
    item.quota = e.source.quota;

    dialog.addEventListener('click', onSelectDialog);
    dialog.show();
  }

  __defers['__alloyId14!click!jumpToMap'] && $.addListener(__alloyId14, 'click', jumpToMap);__defers['__alloyId15!click!buyPackage'] && $.addListener(__alloyId15, 'click', buyPackage);

  _.extend($, exports);
}

module.exports = Controller;