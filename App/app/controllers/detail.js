// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
console.log(args);
$.win.title = args.city+" Detail";
// Alloy.Collections.place.fetch();
$.win.addEventListener("close", function(){ 
    $.destroy();
});
Alloy.Collections.place.fetch();

function jumpToMap(){
    var jumpMapController = Alloy.createController('jumpMap', {
        city:args.city
    });
    
    Alloy.Globals.tabGroup.activeTab.open(jumpMapController.getView());

}

function detailClick(e) {
        var detailController = Alloy.createController('detail', {
        id : e.row.id,city:e.row.city
    });
    
    Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
};

function detailDisplay(collection){
return collection.filter(
		function(model) {
				return (model.get("city")==args.city );			
		}
	)
}


function buyPackage(){
   
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
        var res = JSON.parse(this.responseText)
        // alert(res);
        if (res.msg == "Order Successfully"){
            alert("Order Successfully!")
        }
        else
        alert("Order Error!");
    };
    xhr.open('POST',Alloy.Globals.host+'/order/createAjax');
    xhr.send({
    "id": $.textField.value,
    "travelDates": $.travelDates.value,
    "class": $.classType.value,
    "city": $.city.value
});
}