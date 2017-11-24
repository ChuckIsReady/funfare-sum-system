/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {

    if (req.method == "GET")
        return res.view('login',{'username':req.session.username});
    else {


        User.findOne({username:req.body.username})
        .exec( function (err, user) {
            var resjson ={};

            if (user == null) 
                return res.send("No such user");
            
                            // Load the bcrypt module
                 var bcrypt = require('bcrypt');
        
                // Generate a salt
                var salt = bcrypt.genSaltSync(10);
        
                //  if (user.password != req.body.password)
                if (!bcrypt.compareSync(req.body.password, user.password))
                {
                    console.log(req.body.username+" try to login but failed.")
                    resjson.msg = "Wrong Password";
                    return res.json(resjson);
                }
                
               

            req.session.regenerate(function(err) {   
                req.session.username = req.body.username;
                
                resjson.msg =  "login successfully";
                resjson.username = req.body.username;
                console.log(resjson.username+" has logined.")
                return res.json(resjson);
    
            });
            
        });
        
    }
},
logout: function(req, res) {
    
    req.session.destroy(function(err) {
       return res.send("Log out successfully.");
    });
},
setCookie: function(req, res) {

    var tempString = "";
    
    if (typeof req.cookies.spendingStyle !== "undefined") {
        tempString = "Retrieving Cookies: " + req.cookies.spendingStyle;
    } else {
        tempString = "No such cookie";
    }
    
    if (typeof req.query.age !== "undefined") {
        res.cookie('spendingStyle', "Big Spender", {
            maxAge: req.query.age,
            httpOnly: true
        });
    }

    res.send(tempString);

},
showSupervisees: function (req, res) {

    User.findOne(req.params.id).populateAll().exec( function (err, model) {
    
        return res.json(model);

    })
},
show22: function( req, res) {

    User.findOne(req.params.id).populateAll({age:22}).exec( 
        function (err, model) {
    
        if (model == null) return res.redirect("/");
        
        console.log(model.supervises.length);

        return res.json(model.supervises);

    })
},
addSupervisee: function (req, res) {

    User.findOne(req.params.id).exec( function (err, model) {

        if (model !== null) {
            model.supervises.add(req.query.pid);
            model.save();
            return res.send("Supervisee added.");
        }
        else {
            return res.send("User not found!");
        }
    })
},

removeSupervisee: function (req, res) {

    User.findOne(req.params.id).exec( function (err, model) {

        if (model !== null) {
            model.supervises.remove(req.query.pid)
            model.save();
            return res.send("Supervisee removed!");
        }
        else {
            return res.send("User not found!");
        }
    })
    
}
};

