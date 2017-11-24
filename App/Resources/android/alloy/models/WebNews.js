var Alloy = require('/alloy'),
    _ = require("/alloy/underscore")._,
    model,
    collection;

exports.definition = {
	config: {
		"columns": {
			"id": "INTEGER PRIMARY KEY",
			"name": "text",
			"image": "text"
		},

		"URL": "https://api.myjson.com/bins/xeerx",

		"adapter": {
			"type": "sqlrest",
			"collection_name": "webNews",
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
Alloy.Collections.webNews.fetch();
function transformFunction(model) {
	var transform = model.toJSON();

	transform.name = "🤣" + transform.name;

	return transform;
}

model = Alloy.M('webNews', exports.definition, []);

collection = Alloy.C('webNews', exports.definition, model);

exports.Model = model;
exports.Collection = collection;