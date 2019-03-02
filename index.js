var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random() * Math.floor(100))
  var cartObj
  cartObj[item] = itemPrice
  cart = [..., {cartObj}]
  return `${item} has been added to your cart.`
}

function viewCart() {
  var viewItem = []
  var viewItemPrice = []
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
