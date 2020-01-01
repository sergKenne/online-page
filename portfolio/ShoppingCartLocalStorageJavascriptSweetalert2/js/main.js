
var products = [];
var productsDB = [] ;
var dataCart = [];
var tbody = document.getElementById("tbody");

var productsItems = [
			{
				name: "Apple",
				image: "img/apple2.jpeg",
				unityPrice: 3.00,
				prices: 3.00,
				id: 1,
				quantity: 1
				
			},
			{
				name: "Orange",
				image: "img/orange2.jpg",
				unityPrice: 4.00,
				prices: 4.00,
				id: 2,
				quantity: 1
				
			},
			{
				name: "Banana",
				image: "img/banana.jpg",
				unityPrice: 5.00,
				prices: 5.00,
				id: 3,
				quantity: 1
				
			},
			{
				name: "Lemon",
				image: "img/lemon.jpeg",
				unityPrice: 6.00,
				prices: 6.00,
				id:4,
				quantity: 1

			},
			{
				name: "Kiwi",
				image: "img/kiwi2.jpg",
				unityPrice: 8.00,
				prices: 8.00,
				id: 5,
				quantity: 1
				
			},
			{
				name: "Papaya",
				image: "img/papaya2.jpg",
				unityPrice: 7.00,
				prices: 7.00,
				id: 6,
				quantity: 1
				
			}
	];

	//var productsItemsLoader = productsItems;

function loadProducts(products) {
	products.forEach(product => {
		var template = `
			<div class="card"> 
				<img src="${product.image}" class="card-img-top" alt="${product.name}">
			    <div class="card-body">
				    <h5 class="card-title">${product.name}</h5>
				    <p class="card-text">$ <span class="card-price">${product.prices}</span>.00</p>
				    <button data-id="${product.id}"  class="btn btn-primary btn-sm addBtn">Add</button>
			    </div>
		    </div>
		`;
		var row = document.getElementById("row");
		var col = document.createElement("div");
	    	col.classList.add("col-sm-6", "col-md-3", "col-lg-2", "mb-md-3");
        	col.innerHTML = template;

        	row.appendChild(col);

	}) ;
	
}

	

document.addEventListener("DOMContentLoaded", function() {
	loadProducts(productsItems);

	products = JSON.parse(localStorage.getItem("products"));
	if(products === null) {

	} else {
		displayCart(products);
		total();
	}
	
	
});

var addBtn = document.getElementById("products");

addBtn.addEventListener('click', function(e) {

	if(e.target.classList.contains("addBtn")) {
		var id = e.target.dataset.id;
		products = (products === null)? [] : products;

		productsDB = JSON.parse(localStorage.getItem("products"));
		if(productsDB && Array.isArray(productsDB)) {
			
			for(var i=0; i<productsDB.length; i++) {

				if(productsDB[i].id == productsItems[id-1].id) {
					
					return;
				}
			}
		}

		products.push(productsItems[id-1]);
		localStorage.setItem("products", JSON.stringify(products));
		productsDB = JSON.parse(localStorage.getItem("products"));
		displayCart(productsDB);
		total();
	}
	
});

function displayCart(products) {

	let tbody = document.getElementById("tbody");
	tbody.innerHTML = "";

 		for(var i=0; i<products.length; i++) {
 		
		let tr = document.createElement("tr");
		let productContent = `
	       <th scope="row" class="index">${i+1}</th>
	       <td>
	       		<button data-trashbtn="${i}" class="btn btn-danger">
	       			<i data-trashicon="${i}" class="fa fa-trash" aria-hidden="true"></i>
	       		</button>
       		</td>
	        <td>
	        	<img src="${products[i].image}" alt="" class="img-responsive">
	        </td>
	       <td>
	       		${products[i].name}
	       </td>
	       <td>
		       <button data-btn="${i}" class="btn btn-primary btn-minus">
		       		<i data-icon="${i}" class="fa fa-minus" aria-hidden="true"></i>
		       </button>
		       <span class="quantity">${products[i].quantity}</span>
		       <button data-btn="${i}" class="btn btn-primary btn-plus">
		       		<i data-icon="${i}" class="fa fa-plus" aria-hidden="true"></i>
		       </button>
	       </td>
	       <td>
	       		$<span class="price">${products[i].prices}</span>.00
	       </td>`;

		tr.innerHTML = productContent;

		tbody.appendChild(tr);
 	
	}

}


//Remove Cart

tbody.addEventListener('click', function(e) {

	if(e.target.classList.contains("fa-trash")) { 
		var indIcon = e.target.dataset.trashicon;
		products.splice(indIcon, 1);
		localStorage.setItem("products", JSON.stringify(products));
		displayCart(products);
		total();

	} else if(e.target.classList.contains("btn-danger")){
		var indBtn = e.target.dataset.trashbtn;
		products.splice(indBtn, 1);
		localStorage.setItem("products", JSON.stringify(products));
		displayCart(products);
		total();
	}

});

//reduceAmount

tbody.addEventListener('click', function(e) {

	if(e.target.classList.contains("fa-minus")) { 
		var iconId = e.target.dataset.icon;
		var quantity = products[iconId].quantity;

		if(quantity > 1) {
			quantity-=1;
			products[iconId].quantity = quantity;
			products[iconId].prices = Number(products[iconId].unityPrice)*quantity;
			localStorage.setItem("products", JSON.stringify(products));
			productsDB = JSON.parse(localStorage.getItem("products"));
			displayCart(productsDB);
			
			total();
		}
		

	} else if(e.target.classList.contains("btn-minus")){

		var iconId = e.target.dataset.btn;
		var quantity = products[iconId].quantity;

		if(quantity > 1) {
			quantity-=1;
			products[iconId].quantity = quantity;
			products[iconId].prices = Number(products[iconId].unityPrice)*quantity;
			localStorage.setItem("products", JSON.stringify(products));
			productsDB = JSON.parse(localStorage.getItem("products"));
			displayCart(productsDB);

			total();
		}
		
	}

});


//addAmount

tbody.addEventListener('click', function(e) {

	if(e.target.classList.contains("fa-plus")) { 

		var iconId = e.target.dataset.icon;
		var quantity = products[iconId].quantity;

		if(quantity >= 1) {
			quantity+=1;
			products[iconId].quantity = quantity;
			
			products[iconId].prices = Number(products[iconId].unityPrice)*quantity;
			localStorage.setItem("products", JSON.stringify(products));
			productsDB = JSON.parse(localStorage.getItem("products"));
			displayCart(productsDB);
			
			total();
		}

	} else if(e.target.classList.contains("btn-plus")){
		var iconId = e.target.dataset.btn;
		var quantity = products[iconId].quantity;

		if(quantity >= 1) {
			quantity+=1;
			products[iconId].quantity = quantity;
			products[iconId].prices = Number(products[iconId].unityPrice)*quantity;
			localStorage.setItem("products", JSON.stringify(products));
			productsDB = JSON.parse(localStorage.getItem("products"));
			displayCart(productsDB);

			total();
		}
	}

});

var  buyBtn = document.getElementById("buyBtn");
buyBtn.addEventListener('click',function() {
	if( products.length ==0 ) {
		return;
	} 

		Swal.fire({
		  position: 'center',
		  icon: 'success',
		  title: 'Operation Completed!',
		  showConfirmButton: false,
		  timer: 1500
		});

		products = [];
		var total = 0;
		localStorage.setItem("products", JSON.stringify(products));
		localStorage.setItem("total", JSON.stringify(total));
		displayCart(products);

		document.getElementById("total").innerHTML = JSON.parse(localStorage.getItem("total"));

		for(var i=0; i< productsItems.length; i++) {
			productsItems[i].prices = productsItems[i].prices/productsItems[i].quantity;
			productsItems[i].quantity = 1;
		}

}); 



function total() {
	var outPrice = document.getElementById("total");
	var total = 0;

	for(var i=0; i<products.length; i++) {
		total += products[i].prices; 
	}
	
	localStorage.setItem("total", JSON.stringify(total));
	outPrice.innerHTML = JSON.parse(localStorage.getItem("total"));
}
















