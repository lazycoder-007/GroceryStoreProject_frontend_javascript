loadHomePage();

function loadHomePage()
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
						"<button class=classicButton onclick=addToCart("+ (Number(i)+1) +")>Add to Cart</button><br><br>" + 
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

function addToCart(index)
{
	var cartUrl = "http://127.0.0.1:8080/cart/" + index;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		try
		{
			if (this.readyState == 4 && this.status == 200) {
				window.alert("Successfully added to Cart");
			}
		}
		catch(erMs)
		{
			window.alert(erMs);
		}
	};
	xhttp.open("POST", cartUrl, true);
	xhttp.setRequestHeader('Content-Type', 'application/json');
	xhttp.send();
}

function openGroceryStorePage()
{
	location.assign("groceryStorePage.html");	
}

function displayCart()
{
	location.assign("cartOptions.html");
}

function logOut()
{
	location.replace("loginPage.html");
}



