// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

$.win.title ="Consulate General Map";
$.win.addEventListener("close", function(){ 
    $.destroy();
});

Alloy.Collections.mapData.fetch();
function mapfilter(collection) {
return collection.filter(
		function(model) {
                model.titile = args.city;
				return (model.get("city")==args.city);
			}
			
		
	)
}

function getMapPoint (model){
    transform = model.toJSON(); 
    transform.title = transform.country+" Consulate General";
    transform.subtitle = transform.city;
        return transform; 
    

}
