/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		age: {
			type: 'integer',
			defaultsTo: 18
		},
	
  	worksFor: {
  	       collection: 'User',
  	       via: 'supervises'
  	   }
  }
};

