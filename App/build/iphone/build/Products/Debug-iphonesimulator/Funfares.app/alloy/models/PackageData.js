var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {
		"columns": {
			"id": "INTEGER PRIMARY KEY",
			"city": "TEXT",
			"class": "TEXT",

			"travelDates": "TEXT"
		},

		"URL": 'http://localhost:1337/order/getOrderListAJAX',

		"adapter": {
			"type": "sqlrest",
			"collection_name": "packageData",
			"idAttribute": "id"
		},

		"deleteAllOnFetch": true
	},
	extendModel: function (Model) {
		_.extend(Model.prototype, {});
		return Model;
	},
	extendCollection: function (Collection) {
		_.extend(Collection.prototype, {});

		return Collection;
	}
};

model = Alloy.M('packageData', exports.definition, []);

collection = Alloy.C('packageData', exports.definition, model);

exports.Model = model;
exports.Collection = collection;