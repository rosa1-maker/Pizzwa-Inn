function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name$$email=== "") {
    alert("please fill in your name and email");
   
  } else {
    alert(name + ", Thank you for your comment.");
  }
  event.preventDefault();
}
var sizePrices = [1000, 650, 350];
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
$(document).ready(function() {
  $("form#myorder").submit(function(event) {
    event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaToppings=parseInt($('#topings').val());
    var priceCrust =parseInt($('#crust').val());
    var pizzaTop = $('#topings').val();
    var pizzaQuant = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
    var ToppingsCost = priceToppings[pizzaToppings-1];
    var crustCost = crustPrices[priceCrust-1]
    var topNames = toppingsName[pizzaTop-1]
    var crustName = crustNames[priceCrust-1] 

    newOrder = new Results(
      pizzaType,
      pizzaSize,
      crustName,
      topNames,
      crustName
    );
    newTotal = new TotalPrice(
      price,
      pizzaQuant,
      DeliveryCost,
      ToppingsCost,
      crustCost
    );
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
    if (pizzaPick === 1) {
      alert(newOrder.order());
      alert("Your bill is: " + newTotal.finalTotal());
      alert("Thank you for shopping with us! ");
    } else if (pizzaPick === 2) {
      var location = prompt(
        " Where would your like your Pizza to be Delivered? "
      );
      var locations = ["gpo", "ngong plaza", "trm", "cbd"];
      if (
        location !== locations[0] &&
        location !== locations[1] &&
        location !== locations[2] &&
        location !== locations[3]
      ) {
        alert("Choose a location listed below");
      } else {
        prompt(
          "Please enter your phone number to facilitate communication and faster delivery."
        );
        alert(
          "Your order has been received and it will be delivered to " +
            location +
            " An additional 200/= will be charged for delivery."
        );
        alert(newOrder.order());
        alert("Your bill is: " + newTotal.finalTotal());
        alert(
          "Thank you for shopping with us! Your Order will be arriving soon."
        );
      }
    }
  });
});
