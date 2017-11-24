// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var id = args.id || {};
console.log(args);
$.win.title = "Price Select";
Alloy.Collections.place.fetch();
$.win.addEventListener("close", function(){ 
    $.destroy();
});
function Pricefilter(collection) {
return collection.filter(
		function(model) {
			switch(args.CompareType){
				case"BU":
				return (model.get("class")=="Business" && model.get("price")<7000);
				break;
				case"BA":
				return (model.get("class")=="Business" && model.get("price")>=7000);
				break;
				case"EU":
				return (model.get("class")=="Economy" && model.get("price")<8000);
				break;
				case"EA":
				return (model.get("class")=="Economy" && model.get("price")>=8000);
				break;

			}
			
		}
	)
}
function detailClick(e) {
        var detailController = Alloy.createController('detail', {
        id : e.row.id,city:e.row.city
    });
    
    Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
};