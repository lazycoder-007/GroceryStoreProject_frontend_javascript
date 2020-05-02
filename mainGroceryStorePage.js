displayStoreInventory();

function displayStoreInventory()
{
	var groceryStoreUrl = "http://127.0.0.1:8080/groceryStore";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		try
		{
			if (this.readyState == 4 && this.status == 200) {
				var itemArray = JSON.parse(this.responseText);
				var list = "<ol id='itemList'>";
				for(var i in itemArray)
				{
					var l = "<ul>" + 
						"<li>" + itemArray[i].brand + " : " + itemArray[i].category  + "</li>" +
						"<li>" + "Price: " + itemArray[i].price + "</li>" +
						"<button class=btnAddToCart onclick=addToCart()>Add to Cart</button><br><br>" + 
						"</ul>";
					list += "<li>" + l + "</li><br><br>";
				}
				list += "</ol>";
				document.getElementById("idDisplayStore").innerHTML = list;
			}
		}
		catch(erMs)
		{
			document.getElementById("idDisplayStore").innerHTML = erMs;
		}
	};
	xhttp.open("GET", groceryStoreUrl, true);
	xhttp.setRequestHeader('Content-Type', 'application/json');
	xhttp.send();
}

function openGroceryStoreOptionsPage()
{
	location.assign("groceryStoreOptionsPage.html");	
}

function displayCart()
{
	
}

function logOut()
{
	location.replace("loginPage.html");
}



