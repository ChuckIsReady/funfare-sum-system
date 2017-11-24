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