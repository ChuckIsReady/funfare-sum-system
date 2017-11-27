/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
var funfare = {"region":"East Asia","city":"Osaka","class":"Economy",
	"price":"6400","imageUrl":"/img/1.jpg","dataValidTill":"2016-10-8T16:00:00.000Z","overallQuota":"100",
		"travelDatesStart":"2016-11-1T16:00:00.000Z","travelDatesEnd":"2017-11-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});

funfare = {"region":"East Asia","city":"Seoul","class":"Economy",
	"price":"7500","imageUrl":"/img/2.jpg","dataValidTill":"2016-10-10T16:00:00.000Z","overallQuota":"0",
		"travelDatesStart":"2017-3-1T16:00:00.000Z","travelDatesEnd":"2018-11-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});

    funfare = {"region":"South-east Asia","city":"Cebu","class":"Business",
	"price":"9500","imageUrl":"/img/3.jpg","dataValidTill":"2016-9-10T16:00:00.000Z","overallQuota":"1250",
		"travelDatesStart":"2017-10-1T16:00:00.000Z","travelDatesEnd":"2017-10-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});

    funfare = {"region":"South-east Asia","city":"Singapore","class":"Business",
	"price":"3900","imageUrl":"/img/4.jpg","dataValidTill":"2016-8-10T16:00:00.000Z","overallQuota":"50",
		"travelDatesStart":"2017-9-1T16:00:00.000Z","travelDatesEnd":"2017-9-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});
       funfare = {"region":"Americas","city":"Los Angeles","class":"Business",
  "price":"9880","imageUrl":"/img/5.jpg","dataValidTill":"2016-7-10T16:00:00.000Z","overallQuota":"120",
    "travelDatesStart":"2017-8-1T16:00:00.000Z","travelDatesEnd":"2017-8-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});

    funfare = {"region":"Americas","city":"Boston","class":"Economy",
  "price":"9500","imageUrl":"/img/6.jpg","dataValidTill":"2016-5-10T16:00:00.000Z","overallQuota":"190",
    "travelDatesStart":"2017-6-1T16:00:00.000Z","travelDatesEnd":"2017-6-11T16:00:00.000Z"};

    Funfare.create(funfare).exec( function(err, model) {});

    // var person = {"name": "Martin Choy", "age":"23", "id":1};

    //     Funfare.create(person).exec( function(err, model) {});

        // var person = {"name": "Sally Yeung", "age":"22", "id":2};

        // Funfare.create(person).exec( function(err, model) {});
        // var user = {"username": "admin", "password":"123456", "id":1}

        // User.create(user).exec( function (err, model)  {
            
        //     model.supervises.add(2); // the id for sally
        //     model.save();
            
        // });

        // user = {"username": "boss", "password":"123456", "id":2}

        // User.create(user).exec( function (err, model)  {
            
        //     model.supervises.add(1);    // the id for martin
        //     model.supervises.add(2); // the id for sally
        //     model.save();
            
        // });
        
          // Load the bcrypt module
      var bcrypt = require('bcrypt');
      // Generate a salt
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("123456", salt);

      var user = {"username": "admin", "password": hash, "id":1}
   var user2 = {"username": "Chuck", "password": hash, "id":2}
      User.create(user).exec( function (err, model)  {

          // model.supervises.add(2); // the id for sally
          model.save();
      });
       User.create(user2).exec( function (err, model)  {
          model.save();
      });
  cb();
};
