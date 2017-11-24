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
			"country": "TEXT",
			"latitude": "REAL",
			"longitude": "REAL"
		},
		adapter: {
			type: "sql",
			collection_name: "consulate",
			"db_file": "/Visa.sqlite",
			"idAttribute": "id"
		}
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

model = Alloy.M('mapData', exports.definition, []);

collection = Alloy.C('mapData', exports.definition, model);

exports.Model = model;
exports.Collection = collection;