Describe: Pizza()

Test: "It should return a pizza object with properties for toppings and size" 
Code: const newPizza = new Pizza(["pepperoni", "olives", "mushrooms"], "large");
Expected output: Pizza {toppings: ["pepperoni", "olives", "mushrooms"], size: "large" }

Describe: Pizza.prototype.sizePrice()

Test: "It should determine the price of the pizza based on only the size."
Code: newPizza.sizePrice();
Expected output: 10

Describe: Pizza.prototype.toppingPrice()

Test: "It should determine the additional cost of the pizza based on the number of toppings."
Code: newPizza.toppingPrice();
Expected output: 6

Describe: Pizza.prototype.pizzaPrice()

Test: "It should return a price based upon the number of toppings and size of the pizza selected by the user."
Code: const pizzaPrice = newPizza.pizzaPrice();
Expected output: 16