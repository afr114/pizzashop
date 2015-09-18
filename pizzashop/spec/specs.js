describe('pizza', function(){
  it("creates a new pizza with given specifications", function(){
    var testPizza = new pizza("1", "Medium");
    expect(testPizza.quantity).to.equal("1");
    expect(testPizza.pizzaSize).to.equal("Medium");
    expect(testPizza.toppings).to.eql([]);
  });

  it("calculates the cost of a new pizza", function(){
    var testPizza = new pizza(1, 6);
    var testTopping = new topping("meat");
    testPizza.toppings.push(testTopping);
    expect(testPizza.calculateCost(testPizza)).to.equal(8)
  });
});

describe('topping', function(){
  it("creates a new topping", function(){
    var testTopping = new topping("meatballs");
    expect(testTopping.toppingName).to.equal("meatballs");
  });
});
