$.index.open();
Alloy.Globals.username=""
Alloy.Collections.place.fetch();
Alloy.Collections.mapData.fetch();
function btClick(e) { 
    $.mapView.region = {
        latitude : 22.339468, 
        longitude : 114.181879,
        latitudeDelta : 0.001,
        longitudeDelta : 0.001 
    };
};
function tableClick(e) {
        var priceSelectController = Alloy.createController('priceSelect', {
        id : e.row.id,CompareType:e.row.CompareType
    });
    
    $.index.activeTab.open(priceSelectController.getView());
};
function detailClick(e) {
        var detailController = Alloy.createController('detail', {
        id : e.row.id,city:e.row.city
    });
    
    $.index.activeTab.open(detailController.getView());
};

function transformFunction(model) { 
    var transform = model.toJSON(); 
    return transform; 
}
function getMapPoint (model){
    transform = model.toJSON(); 
    transform.title = transform.country+" Consulate General";
    transform.subtitle = transform.city;
    transform.rightButton = Titanium.UI.iOS.SystemButton.DISCLOSURE;
        return transform; 
    

}
var pr = "";
function getGroup(model){
	var transform = model.toJSON(); 
	var g= transform.region;
	if (g!=pr) {
		transform.headerTitle = g;
		pr=g;
	}
	return transform;
}
function mapClicked(e) {
    
    
    if (e.clicksource == 'rightButton') {           
        console.log(e.annotation.city);   
        var detailController = Alloy.createController('detail', {
            city:e.annotation.city
        });
        
        $.index.activeTab.open(detailController.getView());    
    }   
}
function loginSwitch(){
    if(Alloy.Globals.name==""){
        var Controller = Alloy.createController('login', {
        });
    }
    else{
        var Controller = Alloy.createController('user', {
        });
    }
    $.index.activeTab.open(Controller.getView());  
}
Alloy.Globals.host = "http://localhost:1337";

Alloy.Globals.tabGroup=$.index;