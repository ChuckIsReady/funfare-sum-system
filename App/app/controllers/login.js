// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
function loginFunction(e) {
    
    var xhr = Ti.Network.createHTTPClient();
    xhr.onload = function(e) {
        var res = JSON.parse(this.responseText)
        // alert(res);
        if (res.msg == "login successfully"){
        Alloy.Globals.username = res.username;
        Alloy.Globals.userLabel.text = "Welcome, "+Alloy.Globals.username+"! ";
        Alloy.Globals.loginRow.title = "Logout";  
        $.loginWin.close();  
        }
        else
        alert("Login Error! please Check your username and password!");
    };
    xhr.open('POST',Alloy.Globals.host+'/user/login');
    xhr.send({
    "username": $.textField.value,
    "password": $.textField2.value
});

}