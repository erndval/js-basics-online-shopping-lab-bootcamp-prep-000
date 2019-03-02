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
  var viewCartStatus = []
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
  for (var i = 0; i < cart.length; i++) {
    viewCartStatus.push(`${cart} at `)
  }
  }
}

function total() {
  var totalArray = Object.keys(cart)
  var totalAmount = 0
  var i = 0
  while (i < totalArray.length) {
    totalAmount = totalAmount + parseInt(totalArray[i])
    i++
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
