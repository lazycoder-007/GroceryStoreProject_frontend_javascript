loadCartItems();

function loadCartItems()
{
	var cartUrl = "http://127.0.0.1:8080/cart";
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		try
		{
			if (this.readyState == 4 && this.status == 200) {
				var itemArray = JSON.parse(this.responseText);
				if(itemArray == "")
				{
					document.getElementById("idDisplayCart").innerHTML = "No Elements in the Cart";					
				}
				else
				{
					var list = "<ol id='itemList'>";
					for(var i in itemArray)
					{
						var l = "<ul>" + 
							"<li>" + itemArray[i].brand + " : " + itemArray[i].category  + "</li>" +
							"<li>" + "Price: " + itemArray[i].price + "</li>" +
							"<button class=classicButton onclick=removeFromCart("+ (Number(i)+1) +")>Remove From Cart</button><br><br>" + 
							"</ul>";
						list += "<li>" + l + "</li><br><br>";
					}
					list += "</ol>";
					document.getElementById("idDisplayCart").innerHTML = list;				
				}
			}
		}
		catch(erMs)
		{
			window.alert(erMs);
		}
	};
	xhttp.open("GET", cartUrl, true);
	xhttp.setRequestHeader('Content-Type', 'application/json');
	xhttp.send();
}

function loadHomePage()
{
	location.assign("homePage.html");
}

function logOut()
{
	location.replace("loginPage.html");
}

function openGroceryStorePage()
{
	location.assign("groceryStorePage.html");	
}

function removeFromCart(index)
{
	window.alert("Will be implemented later!!!");
}
