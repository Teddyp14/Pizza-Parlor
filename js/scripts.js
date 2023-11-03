//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.calculateSizePrice = function () {
    let price;

    if (this.size === "personal") {
        price = 6;
    } else if (this.size === "medium") {
        price = 8;
    } else if (this.size === "large") {
        price = 10;
    } else if (this.size === "family") {
        price = 12;
    }

    return price;
}

Pizza.prototype.calculateToppingPrice = function () {
    let price;
    for (toppings of this.toppings) {
        price += 2;
    }
    return price;
};

Pizza.prototype.pizzaPrice = function () {
    const totalPrice = this.sizePrice() + this.toppingPrice();
    return totalPrice;
}


//UI Logic
let userPizza = new Pizza("", [])

function getSize() {
    const chosenSize = document.querySelector("input[name='pizzaSize']:checked").value;
    userPizza.size = chosenSize;

    console.log(userPizza.size)
}


function showSizePrice() {

    const sizePrice = document.querySelector("div.sizePrice");
    const sizePriceDisplay = document.createElement("h3");

    getSize();

    sizePrice.innerText = null;
    sizePriceDisplay.append("$" + userPizza.calculateSizePrice());
    sizePrice.append(sizePriceDisplay);
}

// function getToppings() {
//     const toppingCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
//     const userToppings = [];

//     toppingCheckboxes.forEach(function (topping) {
//         userToppings.push(topping.value);

//     });

//     userPizza.toppings = userToppings;

//     console.log(userPizza.toppings);
// }

function getToppings() {
    const toppingChoice = document.querySelectorAll("input[type='checkbox']:checked");
    userPizza.toppings = [];

    toppingChoice.forEach(function (topping) {
        userPizza.toppings.push(topping.value);
    });

    console.log(userPizza.toppings);
}

function showToppingPrice() {
    const toppingPrice = document.querySelector("div.toppingPrice");
    const toppingPriceDisplay = document.createElement("h3");

    getToppings();

    toppingPrice.innerText = null;
    toppingPriceDisplay.append("$" + userPizza.calculateToppingPrice());
    toppingPrice.append(toppingPriceDisplay);

}

function showTotal() {

}

window.addEventListener("load", function () {
    const sizeInputs = document.querySelectorAll("input.sizeInput")
    const toppingInputs = document.querySelectorAll("input.toppingInput")

    sizeInputs.forEach((input) => {
        input.addEventListener("click", showSizePrice);
    });

    toppingInputs.forEach((input) => {
        input.addEventListener("click", showToppingPrice);
    });
});



