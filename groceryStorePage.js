function loadHomePage()
{
	location.assign("homePage.html");
}

function logOut()
{
	location.replace("loginPage.html");
}

function displayCart()
{
	location.assign("cartOptions.html");
}

function addItemToGorcery()
{	
	var brand = document.getElementById("idBrand").value;
	var category = document.getElementById("idCategory").value;
	var price = document.getElementById("idPrice").value;
	var quantity = document.getElementById("idQuantity").value;
	
	if(brand == "" || category == "" || price == "" || quantity == "") 
	{
		window.alert("Values cannot be empty");
		return;
	}
	
	var groceryStoreUrl = "http://127.0.0.1:8080/groceryStore";
	var jsonInput = JSON.stringify({"brand":brand,"category":category,"price":price,"stock":quantity});
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4)
		{
			if(this.status == 200)
			{
				document.getElementById("idBrand").value="";
				document.getElementById("idCategory").value="";
				document.getElementById("idPrice").value="";
				document.getElementById("idQuantity").value="";			
			}
			else
			{
				window.alert("Server is Down. Please try again@@@");
			}
		}
	};
	xhttp.open("POST", groceryStoreUrl, true);
	xhttp.setRequestHeader('Content-Type', 'application/json');
	xhttp.send(jsonInput);
}


function updateItemPrice()
{
	
	
}

function updateItemQuantity()
{
	
}

function showAddItemToGrocery()
{
	document.getElementById("idUpdateItemPrice").style.display="none";	
	document.getElementById("idUpdateItemQuantity").style.display="none";
	document.getElementById("idAddItemToGorcery").style.display="block";
}

function showUpdateItemPrice()
{
	document.getElementById("idAddItemToGorcery").style.display="none";
	document.getElementById("idUpdateItemQuantity").style.display="none";
	document.getElementById("idUpdateItemPrice").style.display="block";
}

function showUpdateItemQuantity()
{
	document.getElementById("idAddItemToGorcery").style.display="none";
	document.getElementById("idUpdateItemPrice").style.display="none";
	document.getElementById("idUpdateItemQuantity").style.display="block";
}

