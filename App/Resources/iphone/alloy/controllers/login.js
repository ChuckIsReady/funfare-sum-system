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
	this.__controllerPath = 'login';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};

	$.__views.userWin = Ti.UI.createWindow({ title: "Login", layout: "vertical", id: "userWin" });
	$.__views.userWin && $.addTopLevelView($.__views.userWin);
	$.__views.textField = Ti.UI.createTextField({ id: "textField", hintText: "Enter your username", borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL });
	$.__views.userWin.add($.__views.textField);
	$.__views.textField2 = Ti.UI.createTextField({ id: "textField2", hintText: "Enter your password", borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL });
	$.__views.userWin.add($.__views.textField2);
	$.__views.__alloyId70 = Ti.UI.createButton({ title: "Login", id: "__alloyId70" });
	$.__views.userWin.add($.__views.__alloyId70);
	loginFunction ? $.addListener($.__views.__alloyId70, 'click', loginFunction) : __defers['$.__views.__alloyId70!click!loginFunction'] = true;exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;
	function loginFunction(e) {

		var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function (e) {
			var res = JSON.parse(this.responseText);
			alert(res);
			if (res.msg == "login successfully") {
				Alloy.Globals.username = res.username;
				$.userRow.hidden = false;
				$.loginRow.hidden = true;
				$.userTab.title = "User";
				$.userWin.title = "User";
			} else alert("Login Error! please Check your username and password!");
		};
		xhr.open('POST', Alloy.Globals.host + '/user/login');
		xhr.send({
			"username": $.textField.value,
			"password": $.textField2.value
		});
	}

	__defers['$.__views.__alloyId70!click!loginFunction'] && $.addListener($.__views.__alloyId70, 'click', loginFunction);

	_.extend($, exports);
}

module.exports = Controller;