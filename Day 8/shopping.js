// guys i have made it a id based application as this is how to works in real world
// there are only 2 easy to understand changes read the code carefully

// new function getProductByID() is created check it out

let products = [
	{
		id: 1,
		name: 'White Tshirt',
		size: 'L',
		color: 'white',
		price: 1200,
		image: 'product1.jpg',
		description: 'Good looking white tshirt'
	},
	{
		id: 2,
		name: 'Black Shirt',
		size: 'M',
		color: 'Black',
		price: 1500,
		image: 'product2.jpg',
		description: 'Good looking black shirt'
	},

	{
		id: 3,
		name: 'Checked Shirt',
		size: 'S',
		color: 'White & Black',
		price: 900,
		image: 'product3.jpg',
		description: 'Good looking Checked Shirt'
	},

	{
		id: 4,
		name: 'Black Female Blazer',
		size: 'M',
		color: 'Black',
		price: 3000,
		image: 'product4.jpg',
		description: 'Beautifull Blazer'
	},

	{
		id: 5,
		name: 'Navy Blue Top',
		size: 'S',
		color: 'Blue',
		price: 1300,
		image: 'product5.jpg',
		description: 'Good looking Top'
	},

	{
		id: 6,
		name: 'Indian Dress',
		size: 'M',
		color: 'Henna',
		price: 1500,
		image: 'product6.jpg',
		description: 'Good looking Traditional Dress'
	},
	{
		id: 7,
		name: "Men's Relaxed Jeans",
		size: 'M',
		color: 'Dark blue',
		price: 660,
		image: 'product7.jpg',
		description: 'This goes well as ayour casual wear. '
	},
	{
		id: 8,
		name: "Men's Track Pants",
		size: 'M',
		color: 'Grey',
		price: 900,
		image: 'product8.jpg',
		description: 'Good looking track pant'
	},
	{
		id: 9,
		name: "Men's formal trouser",
		size: 'M',
		color: 'Blue',
		price: 800,
		image: 'product9.jpg',
		description: 'This slim fit keeps you in style'
	},
	{
		id: 10,
		name: 'Rajasthani Indian Dress',
		size: 'M',
		color: 'Henna',
		price: 400,
		image: 'product10.jpg',
		description: 'Good looking Traditional Dress'
	},
	{
		id: 11,
		name: "Men's cotton Kurta",
		size: 'M',
		color: 'grey',
		price: 770,
		image: 'product11.jpg',
		description: 'Good looking Kurta'
	},
	{
		id: 12,
		name: "Men's silk kurta",
		size: 'M',
		color: 'Green',
		price: 800,
		image: 'product12.jpg',
		description: 'Good looking silk Kurta'
	}
];

cart = [];

function displayProducts(productsData, who = 'productwrapper') {
	let productsString = '';

	productsData.forEach(function(product, index) {
		let { id, name, image, color, description, price, size } = product;

		if (who == 'productwrapper') {
			productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ₹${price}</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
		} else if (who == 'cart') {
			productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
		}
	});

	document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
	let searchedProducts = products.filter(function(product, index) {
		let searchString = product.name + ' ' + product.color + ' ' + product.description;

		return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
	});

	displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
	return productArray.find(function(product) {
		return product.id == id;
	});
}

function snackbar() {
	// Get the snackbar DIV
	var x = document.getElementById('snackbar');

	// Add the "show" class to DIV
	x.className = 'show';

	// After 3 seconds, remove the show class from DIV
	setTimeout(function() {
		x.className = x.className.replace('show', '');
	}, 3000);
}

const cartTotal = document.getElementById('carttotal');
cartTotal.innerText = `Cart (${cart.length} Total)`;

function addToCart(id) {
	// getting the product
	let pro = getProductByID(products, id);
	cart.forEach((item) => {
		if (id == item.id) {
			snackbar();
		}
	});
	//   putting in cart
	cart.push(pro);
	displayProducts(cart, 'cart');
	cartTotal.innerText = `Cart (${cart.length} Total)`;
}

function removeFromCart(id) {
	// getting the index based on id
	let index = cart.findIndex(function(product) {
		return product.id == id;
	});

	//   removing from cart based on index
	cart.splice(index, 1);
	displayProducts(cart, 'cart');
	cartTotal.innerText = `Cart (${cart.length} Total)`;
}

const min = document.getElementById('min_price');
const max = document.getElementById('max_price');

function minfilter(minvalue) {
	let minprice = products.filter(function(product, index) {
		return product.price > minvalue;
	});
	displayProducts(minprice);
}
function maxfilter(maxvalue) {
	let maxprice = products.filter(function(product, index) {
		return product.price < maxvalue;
	});
	displayProducts(maxprice);
}
