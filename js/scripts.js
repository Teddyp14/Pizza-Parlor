//Business Logic

function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.sizePrice = function () {
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

Pizza.prototype.toppingPrice = function () {
    let price = this.toppings.length * 2;
    return price;
}

Pizza.prototype.pizzaPrice = function () {
    const totalPrice = this.sizePrice() + this.toppingPrice();
    return totalPrice;
}


//UI Logic
let userPizza = new Pizza("", [])


function showSizePrice() {
    const chosenSize = document.querySelector("input[name='pizzaSize']:checked").value;
    userPizza.size = chosenSize;

    console.log(userPizza.size)

    const sizePriceDisplay = document.createElement("h3");
    sizePriceDisplay.append(userPizza.sizePrice());
}

function showToppingPrice() {

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



