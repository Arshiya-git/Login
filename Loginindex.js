$(document).ready(function(){
	$("#submitbtn").click(function(){
		var value = Validate();
		if(value != true){
			window.location.href= "index.html";
		}else{
			window.location.href = "Registrationform.html";
		}
	});
	function Validate() {
		var username = $("#username").val();
		var password = $("#password").val();
		
		if (username == "") {
		alert("Username should not be empty..");
		return false;
	}else if(password == ""){
		alert("Password should not be empty..");
		return false;
	}else if(username != "admin"){
		alert("Enter Username is wrong..");
		return false;
	}else if(password != "admin"){
		alert("Enter Password is wrong..");
		return false;
	}else{
		alert("Login success...");
		return true;
	}
}
});