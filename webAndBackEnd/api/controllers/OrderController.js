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
getOrderListAJAX:function (req, res) {
    console.log(req.session.username + "is fetch his Package.")
    Order.find() .where({username:{'contains' :req.session.username}}).exec( function(err, model) {
        if (model != null)
        {
            console.log(model);
            return res.json(model);
        }
        else{
            model = {};
            model.msg = "You don't have any order, pick one and come back!";
            console.log(model);
            return res.json(model);
        }
        
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
        if (model != null){
            var nameList = [];
            model.forEach(function(element) {
                console.log(element);
                nameList.push(element.username);
            });
            if(nameList.length==0)
            return res.view('message', {'message': "No one order this!",'username':req.session.username});
            else
            return res.view('nameList', {'nameList': nameList,'username':req.session.username});
        }
            
        else
        return res.view('message', {'message': "No one order this!",'username':req.session.username});
    }); 
},
    // json function
json: function(req, res) {
    Order.find().exec( function(err, order) {
        return res.json(order);
    });
}
};

