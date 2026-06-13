// DEMO PRODUCTS

const products = [

{
id:1,
name:"AI Prompt Bundle",
price:299,
category:"digital",
image:"https://via.placeholder.com/300x200"
},

{
id:2,
name:"Premium Ebook",
price:199,
category:"digital",
image:"https://via.placeholder.com/300x200"
},

{
id:3,
name:"Canva Template Pack",
price:499,
category:"digital",
image:"https://via.placeholder.com/300x200"
},

{
id:4,
name:"Wireless Mouse",
price:799,
category:"physical",
image:"https://via.placeholder.com/300x200"
},

{
id:5,
name:"Bluetooth Speaker",
price:1499,
category:"physical",
image:"https://via.placeholder.com/300x200"
},

{
id:6,
name:"Smart Watch",
price:2499,
category:"physical",
image:"https://via.placeholder.com/300x200"
}

];

// PRODUCT CONTAINER

const container =
document.getElementById("productsContainer");

// LOAD PRODUCTS

function displayProducts(items){

container.innerHTML = "";

items.forEach(product => {

container.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>Category:
${product.category}</p>

<p class="price">
₹${product.price}
</p>

<button
class="buy-btn"
onclick="selectProduct('${product.name}')">

Buy Now

</button>

</div>

</div>

`;

});

}

// INITIAL LOAD

displayProducts(products);

// SELECT PRODUCT

function selectProduct(productName){

document.getElementById(
"selectedProduct"
).value = productName;

window.scrollTo({

top:
document.querySelector(
".order-section"
).offsetTop,

behavior:"smooth"

});

}

// SEARCH

document
.getElementById("searchInput")
.addEventListener("keyup",function(){

let keyword =
this.value.toLowerCase();

let filtered =
products.filter(product =>

product.name
.toLowerCase()
.includes(keyword)

);

displayProducts(filtered);

});

// CATEGORY FILTER

function filterProducts(category){

if(category === "all"){

displayProducts(products);

return;

}

let filtered =
products.filter(product =>

product.category === category

);

displayProducts(filtered);

}

// ORDER FORM

document
.getElementById("orderForm")
.addEventListener("submit",
function(e){

e.preventDefault();

const name =
document.getElementById(
"customerName"
).value;

const email =
document.getElementById(
"customerEmail"
).value;

const phone =
document.getElementById(
"customerPhone"
).value;

const address =
document.getElementById(
"customerAddress"
).value;

const product =
document.getElementById(
"selectedProduct"
).value;

// ORDER DATA

const orderData = {

name,
email,
phone,
address,
product,
date:new Date()
.toLocaleString()

};

// GOOGLE APPS SCRIPT URL

const scriptURL =
"PASTE_YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

// SEND DATA

fetch(scriptURL,{

method:"POST",

body:JSON.stringify(orderData)

})
.then(response => {

alert(
"Order Submitted Successfully!"
);

document
.getElementById(
"orderForm"
)
.reset();

})
.catch(error => {

alert(
"Order Submit Failed!"
);

console.error(error);

});

});
