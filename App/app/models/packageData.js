
exports.definition = {
	config : {
    "columns": {
        "id":"INTEGER PRIMARY KEY",
        "city":"TEXT",
        "class":"TEXT",

        "travelDates":"TEXT"
    },
    
    "URL": 'http://localhost:1337/order/getOrderListAJAX', 

    "adapter" : {
        "type" : "sqlrest",
        "collection_name" : "packageData", 
        "idAttribute" : "id",
    },
    
    // delete all models on fetch
   "deleteAllOnFetch": true
},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};


