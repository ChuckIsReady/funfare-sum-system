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

var opts = { title: 'Are you sure?\n Book this Package?' };
opts.options = ['Yes', 'No'];


item={};
function onSelectDialog(e) { 

if(e.index==0){
    if(item.quota<1){
            alert("Transaction Unsuccessful.\n Package already full.");
            return false;
        }
        
        var xhr = Ti.Network.createHTTPClient();
        xhr.onload = function(e) {
            var res = JSON.parse(this.responseText)
            if (res.msg == "Order Successfully"){
                alert("Package Successfully Booked!")
            }
            else
            alert("Order Error!");
        };
        xhr.open('POST',Alloy.Globals.host+'/order/createAjax');
        xhr.send({
        "id": item.idd,
        "travelDates": item.travelDates ,
        "class": item.classs ,
        "city": item.city
        });  
}
else{
    return false;
}
 }

function buyPackage(e){

   if( Alloy.Globals.username==""){
    alert("Please login first!");
    return false;
   }

   var dialog; 
   dialog = Ti.UI.createOptionDialog(opts);
   item.idd =e.source.idd,
   item.travelDates = e.source.travelDates,
   item.classs =e.source.classs,
   item.city =e.source.city;
   item.quota = e.source.quota;

   dialog.addEventListener('click', onSelectDialog);   
   dialog.show(); 
}


 
