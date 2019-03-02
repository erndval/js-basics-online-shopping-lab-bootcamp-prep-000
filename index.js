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
  var cartObj = {}
  cartObj[itemName] = itemPrice
  cart = [...cart, cartObj]
  return `${item} has been added to your cart.`
}

function viewCart() {
  var viewItem = []
  var viewItemPrice = []
  for (var i = 0; i < cart.length; i++) {
    
  }
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
