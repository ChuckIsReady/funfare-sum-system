var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {
		"columns": {
			"id": "INTEGER PRIMARY KEY",
			"region": "TEXT",
			"city": "TEXT",
			"class": "TEXT",
			"price": "INTEGER",
			"imageUrl": "TEXT",
			"dataValidTill": "TEXT",
			"overallQuota": "TEXT",
			"travelDatesStart": "TEXT",
			"travelDatesEnd": "TEXT"
		},

		"URL": "https://api.myjson.com/bins/wazq3",

		"adapter": {
			"type": "sqlrest",
			"collection_name": "place",
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

model = Alloy.M('place', exports.definition, []);

collection = Alloy.C('place', exports.definition, model);

exports.Model = model;
exports.Collection = collection;