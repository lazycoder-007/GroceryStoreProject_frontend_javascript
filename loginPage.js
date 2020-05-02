function login()
{	
	var name = document.getElementById("idName").value;
	var city = document.getElementById("idCity").value;
	var walletAmount = document.getElementById("idWalletAmount").value;
	
	if(name == "" || city == "" || walletAmount == "") 
	{
		window.alert("Values cannot be empty");
		return;
	}
	
	var baseURL = "http://127.0.0.1:8080/user";
	var logiUrl = baseURL + "/login";
	var jsonInput = JSON.stringify({"name":name,"address": city,"walletAmount":walletAmount});
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4)
		{
			if(this.status == 200)
			{
				location.replace("mainGroceryStorePage.html");				
			}
			else
			{
				window.alert("Server is Down. Please try again later!!!");
			}
		}
	};
	xhttp.open("POST", logiUrl, true);
	xhttp.setRequestHeader('Content-Type', 'application/json');
	xhttp.send(jsonInput);
}

function getCurrentUser()
{
	try
	{
		var userUrl = "http://127.0.0.1:8080/user";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			try
			{
				if (this.readyState == 4 ) {
					showData(this);
				}
			}
			catch(erMs)
			{
				document.getElementById("idCurrentName").innerHTML = erMs;
			}
		};
		xhttp.open("GET", userUrl, true);
		xhttp.setRequestHeader('Content-Type', 'text/plain');
		xhttp.send();
	}
	catch(erMsg)
	{
		document.getElementById("idCurrentName").innerHTML = erMsg;
	}
}

function showData(xhttp) {
  var response = JSON.parse(xhttp.responseText);
  document.getElementById("idCurrentName").innerHTML = response["name"];	
  document.getElementById("idCurrentCity").innerHTML = response["address"];
  document.getElementById("idCurrentWalletAmount").innerHTML = response["walletAmount"];
}



