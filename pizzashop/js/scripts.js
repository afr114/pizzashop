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
