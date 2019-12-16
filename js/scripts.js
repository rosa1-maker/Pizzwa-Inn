$(document).ready(function() {
  $("#order").click(function() {
    $("order-form").toggle("5000");
  });
});
function Results(type, size, crust, toppings) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}
Results.prototype.order = function() {
  return (
    "You have made an order of " +
    this.type +
    " pizza  with " +
    this.toppings +
    " as toppings and " +
    this.crust +
    " for crust ."
  );
};
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name === "") {
    alert("please fill in your name");
    return false;
  } else if (email === "") {
    alert("Please fill in your name and email");
    return false;
  } else {
    alert(name + ", Thank you for your comment.");
  }
  event.preventDefault();
}
var sizePrices = [1200, 800, 600];
var priceToppings = [100, 120, 80, 150, 200];
var toppingsName = ["Pepperoni", "mushroom", "onion", "sausage", " bacon"];
var crustNames = ["Crispy", "Stuffed", "Glutton-free"];
var crustPrices = [100, 120, 200];
var deliveryPrices = [0, 200];
function TotalPrice(price, quantity, delivery, toppings, crust) {
  this.price = price;
  this.quantity = quantity;
  this.toppings = toppings;
  this.crust = crust;
  this.delivery = delivery;
}
TotalPrice.prototype.finalTotal = function() {
  return (
    (this.price + this.delivery + this.toppings + this.crust) * this.quantity
  );
};
$(document).ready(function(){
    $('form#order').submit(function(event){
        event.preventDefault();
        var pizzaType=$('#type').val();
        var pizzaSize=('#size').val();
        var pizzaToppings=('#topings').val();
        var pizzaQuantity=parseInt('#quantity').val();
        var pizzaPickup=('#delivery').val();
    })
});