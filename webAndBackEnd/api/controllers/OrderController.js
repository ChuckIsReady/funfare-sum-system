/**
 * OrderController
 *
 * @description :: Server-side logic for managing Orders
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    createAjax: function(req, res) {
        if (req.method == "POST") {

            Order.create(req.body.Order).exec( function(err, model) {
                model.class = req.body.class,
                model.city = req.body.city,
                model.username = req.session.username,
                model.pid = req.body.id,
                model.travelDates = req.body.travelDates,
                model.save();
                console.log(model);
                return res.json( {'msg': 'Order Successfully','username':req.session.username});
            });
        } 
    },
    create: function(req, res) {
        if (req.method == "POST") {

            Order.create(req.body.Order).exec( function(err, model) {
                // console.log(req.body);
                model.class = req.body.class,
                model.city = req.body.city,
                model.username = req.session.username,
                model.pid = req.body.id,
                model.travelDates = req.body.travelDates,
                model.save();
                console.log(model);
                return res.view('message', {'message': 'Order Successfully!','username':req.session.username});
            });
        } 
    },
    orderList:function (req, res) {
    // body...
    Order.find() .where({username:{'contains' :req.session.username}}).exec( function(err, model) {
        if (model != null)
            return res.view('orderList', {'order': model,'username':req.session.username});
        else
            return res.view('message', {'message': "You don't have any order, pick one and come back!",'username':req.session.username});
    }); 
},
delete: function (req, res) {
    
        if (req.method == "GET") {
            res.redirect('/');
        }
        else {
    
            Order.findOne(req.params.id).exec(function (err, model) {
                if (model != null) 
                    model.destroy();
                    return res.send("Order Deleted");
            });
        }
    
    },
    getbuyer:function (req, res) {
    // body...
    Order.find() .where({pid:{'contains' :req.params.id}}).exec( function(err, model) {
        if (model != null)
            return res.json(model);
        else
            return res.send('No one order this!');
    }); 
},
    // json function
json: function(req, res) {
    Order.find().exec( function(err, order) {
        return res.json(order);
    });
}
};

