# _Pizza Parlor_

#### By _**Teddy Peterschmidt**_

#### _A webpage for a pizza company where a user can choose one or more individual toppings, a size to order a pizza, and see the final cost._

## Technologies Used

* HTML
* CSS
* Javascript
* Bootstrap

## Description

This webpage allows the user to select a pizza size and any number of toppings from the list, and see the total price of the pizza dynamically change depending on their selections. The list of pizzas being ordered will be displayed to the user. 

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level directory of the project.
* Open pizza-parlor/index.html in your browser.

## Known Bugs

* Unknown at this time. 

## License

MIT License

Copyright (c) 2023 Teddy Peterschmidt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE

## Business Logic Tests: 

#### Describe: Pizza()

Test: "It should return a pizza object with properties for toppings and size"\ 
Code: const newPizza = new Pizza(["pepperoni", "olives", "mushrooms"], "large");\
Expected output: Pizza {toppings: ["pepperoni", "olives", "mushrooms"], size: "large" }

#### Describe: Pizza.prototype.sizePrice()

Test: "It should determine the price of the pizza based only on the size."\
Code: newPizza.sizePrice();\
Expected output: 10

#### Describe: Pizza.prototype.toppingPrice()

Test: "It should determine the additional cost of the pizza based on the number of toppings."\
Code: newPizza.toppingPrice();\
Expected output: 6

#### Describe: Pizza.prototype.pizzaPrice()

Test: "It should return a price based upon the number of toppings and size of the pizza selected by the user."\
Code: const pizzaPrice = newPizza.pizzaPrice();\
Expected output: 16