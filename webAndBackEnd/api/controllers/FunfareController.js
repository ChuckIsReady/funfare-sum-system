/**
 * FunfareController
 *
 * @description :: Server-side logic for managing Peoplemo
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
module.exports = {
    
detail:function (req, res) {
    // body...
    Funfare.findOne(req.params.id).exec( function(err, model) {
        if (model != null)
            return res.view('detail', {'funfare': model,'username':req.session.username});
        else
            return res.view('message', {'message': "No such place",'username':req.session.username});
    }); 
},
// json function
json: function(req, res) {
    Funfare.find().exec( function(err, funfares) {
        return res.json(funfares);
    });
},
// index function
index: function(req, res) {
    var page2 = req.query.page||1;
    Funfare.find()
    .paginate({page: page2, limit: 6})
    .sort('dateValidTill DESC')
    .exec( function (err, funfares) {
                    Funfare.count()
                    .exec( function(err, value) {
                        var pages = Math.ceil(value / 6 );
                        return res.view('index', {'funfares': funfares, 'count':pages,'username':req.session.username});
                    });
    });
},
admin: function(req, res) {
    Funfare.find().exec( function(err, funfares) {
        return res.view('admin', {'funfares': funfares,'username':req.session.username});
    });
},
create: function(req, res) {
        if (req.method == "POST") {

            Funfare.create(req.body.Funfare).exec( function(err, model) {
                
                model.region = req.body.region,
                model.city = req.body.city,
                model.class = req.body.class,
                model.price = req.body.price,
                model.imageUrl = req.body.imageUrl,
                model.dataValidTill = new Date(req.body.dataValidTill),
                model.overallQuota = req.body.overallQuota,
                 model.travelDatesStart = new Date(req.body.travelDatesStart),
                model.travelDatesEnd = new Date(req.body.travelDatesEnd);
                 model.d1 = new Date(req.body.travelDatesStart);
                 model.d2 = new  Date(req.body.travelDatesEnd);
                 console.log( model.d1 );
                 console.log(model.d1.Format("MM/dd/yyyy"));
                 console.log(model.d1>new  Date("9/28/2017"));
                model.save();
                // return res.json(model);
                return res.view('message', {'message': 'Create Successfully!','username':req.session.username});
            });
        } else {
            return res.view('create',{'username':req.session.username});
        }
    }, 
// delete function
delete: function (req, res) {
    
        if (req.method == "GET") {
            res.redirect('/');
        }
        else {
    
            Funfare.findOne(req.params.id).exec(function (err, model) {
                if (model != null) 
                    model.destroy();
                    return res.send("Person Deleted");
            });
        }
    
    },
// update function
update: function(req, res) {
    if (req.method == "GET") {
        Funfare.findOne(req.params.id).exec( function(err, model) {
            if (model == null)
        return res.view('message', {'message': "No such funfare!",'username':req.session.username});
            else
                return res.view('update', {'funfare': model,'username':req.session.username});
        });
    } else {
        Funfare.findOne(req.params.id).exec( function(err, model) { new Date().setTime()
                model.region = req.body.region,
                model.city = req.body.city,
                model.class = req.body.class,
                model.price = req.body.price,
                model.imageUrl = req.body.imageUrl,
                model.dataValidTill = new Date(req.body.dataValidTill),
                model.overallQuota = req.body.overallQuota,
                 model.travelDatesStart = new Date(req.body.travelDatesStart),
                model.travelDatesEnd = new Date(req.body.travelDatesEnd);
                model.save();
    return res.view('message', {'message': "Record updated",'username':req.session.username});
        }); 
    }
},
search: function (req, res) {
   
    if(req.query.region!=null){
         // return res.json(req.query);
                var price = req.query.price.split(";");
                var  priceMin = parseInt(price[0]);
                 var  priceMax= parseInt(price[1]);
                 if(req.query.region=="All regions"){
                         Funfare.find()
                         .paginate({page: req.query.page, limit: 2})
                         .where({price: {'>=': priceMin,'<=':priceMax}})
                         .where({travelDatesStart:{'>=': new Date(req.query.travelDatesStart)}}) 
                         .where({travelDatesEnd:{'<=': new Date(req.query.travelDatesEnd)}}) 
                         .sort('dateValidTill DESC')
                         .exec( function (err, funfares) {
                                         Funfare.count()
                                         .where({price: {'>=': priceMin,'<=':priceMax}})
                                         .where({travelDatesStart:{'>=': new Date(req.query.travelDatesStart)}}) 
                                         .where({travelDatesEnd:{'<=': new Date(req.query.travelDatesEnd)}}) 
                                         .exec( function(err, value) {
                                             var pages = Math.ceil(value / 2 );
                                             return res.view('search', {'funfares': funfares, 'count':pages,'query':req.query,'username':req.session.username});
                                         });
                         });

                 }
                 else{
                                Funfare.find()
                                .paginate({page: req.query.page, limit: 2})
                                .where({region:{'contains' :req.query.region}})
                                .where({price: {'>=': priceMin,'<=':priceMax}})
                                .where({travelDatesStart:{'>=': new Date(req.query.travelDatesStart)}}) 
                                .where({travelDatesEnd:{'<=': new Date(req.query.travelDatesEnd)}}) 
                                .sort('dateValidTill DESC')
                                .exec( function (err, funfares) {
                                                Funfare.count()
                                                .where({price: {'>=': priceMin,'<=':priceMax}})
                                                .where({travelDatesStart:{'>=': new Date(req.query.travelDatesStart)}}) 
                                                .where({travelDatesEnd:{'<=': new Date(req.query.travelDatesEnd)}}) 
                                                .exec( function(err, value) {
                                                    var pages = Math.ceil(value / 2 );
                                                    return res.view('search', {'funfares': funfares, 'count':pages,'query':req.query,'username':req.session.username});
                                                });
                                  });
                         }
    }
    else{
          funfares = "";
            Funfare.find()
            .paginate({page: req.query.page, limit: 2})
            .exec( function(err, funfares) {
                Funfare.count()
                .exec( function(err, value) {
                    var pages = Math.ceil(value / 2 );
                    var query = {"region":"All regions","price":"1000;10000","travelDatesStart":"10/22/2016","travelDatesEnd":"10/28/2018"};
                    return res.view('search', {'funfares': funfares, 'count':pages,'query':query,'username':req.session.username});
                });
            });         
    }

          
},
showSupervisors: function (req, res) {

    Funfare.findOne(req.params.id).populateAll().exec( function (err, model) {
    
      return res.json(model);
    
    })
}
};

