// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
$.win.title = "My package";
Alloy.Collections.packageData.fetch();
console.log("mypackage is refresh");

$.win.addEventListener("close", function(){ 
    $.destroy();
});
function detailClick(e) {
    var detailController = Alloy.createController('detail', {
    id : e.row.idd,city:e.row.city
});

Alloy.Globals.tabGroup.activeTab.open(detailController.getView());
};