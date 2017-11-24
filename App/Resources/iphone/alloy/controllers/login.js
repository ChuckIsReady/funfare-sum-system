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

	$.__views.loginWin = Ti.UI.createWindow({ title: "Login", layout: "vertical", id: "loginWin" });
	$.__views.loginWin && $.addTopLevelView($.__views.loginWin);
	$.__views.textField = Ti.UI.createTextField({ id: "textField", top: 80, height: 50, width: 300, hintText: "Enter your username", borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED });
	$.__views.loginWin.add($.__views.textField);
	$.__views.textField2 = Ti.UI.createTextField({ id: "textField2", passwordMask: true, height: 50, width: 300, hintText: "Enter your password", borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED });
	$.__views.loginWin.add($.__views.textField2);
	$.__views.__alloyId76 = Ti.UI.createButton({ title: "Login", top: 40, width: 200, color: "#fff", borderRadius: 5, backgroundColor: "#00c0ff", id: "__alloyId76" });
	$.__views.loginWin.add($.__views.__alloyId76);
	loginFunction ? $.addListener($.__views.__alloyId76, 'click', loginFunction) : __defers['$.__views.__alloyId76!click!loginFunction'] = true;exports.destroy = function () {};

	_.extend($, $.__views);

	var args = $.args;
	function loginFunction(e) {

		var xhr = Ti.Network.createHTTPClient();
		xhr.onload = function (e) {
			var res = JSON.parse(this.responseText);

			if (res.msg == "login successfully") {
				Alloy.Globals.username = res.username;
				Alloy.Globals.userLabel.text = "Welcome, " + Alloy.Globals.username + "! ";
				Alloy.Globals.loginRow.title = "Logout";
				$.loginWin.close();
			} else alert("Login Error! please Check your username and password!");
		};
		xhr.open('POST', Alloy.Globals.host + '/user/login');
		xhr.send({
			"username": $.textField.value,
			"password": $.textField2.value
		});
	}

	__defers['$.__views.__alloyId76!click!loginFunction'] && $.addListener($.__views.__alloyId76, 'click', loginFunction);

	_.extend($, exports);
}

module.exports = Controller;