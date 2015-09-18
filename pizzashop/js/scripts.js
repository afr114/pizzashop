function pizza(quantity, pizzaSize){
  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

pizza.prototype.calculateCost = function() {
  return ((this.quantity * this.pizzaSize) + (this.toppings.length * 2));
}

function topping(toppingName) {
  this.toppingName = toppingName;
}

$(document).ready(function(){
  $("form#pizza-order").submit(function(event) {
  event.preventDefault();
  $("#show-header").fadeIn("fast");


  var inputQuantity = parseInt($(".quantity").val());
  var inputPizzaSize = parseInt($(".size").val());
  var newPizza = new pizza(inputQuantity, inputPizzaSize);

  $('.toppings :checked').each(function() {
    var newToppings = ($(this).val());
    newPizza.toppings.push(newToppings);
  });


  $("#show-header").show();
  $("#show-order-btn").show();
  $("#result").show();
  $("#cost").text(newPizza.calculateCost(newPizza));
  });
});
