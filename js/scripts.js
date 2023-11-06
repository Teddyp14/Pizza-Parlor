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
    let price = 0;

    for (element of this.toppings) {
        price += 2;
    }

    return price;
};

Pizza.prototype.pizzaPrice = function () {
    const totalPrice = this.calculateSizePrice() + this.calculateToppingPrice();
    return totalPrice;
}


//UI Logic

let userPizza = new Pizza("", [])

function getSize() {
    const chosenSize = document.querySelector("input[name='pizzaSize']:checked").value;
    userPizza.size = chosenSize;
}


function showSizePrice() {
    const sizePrice = document.querySelector("div.sizePrice");
    const sizePriceDisplay = document.createElement("h3");

    document.querySelector("div#pricingInfo").removeAttribute("class", "hidden");

    getSize();

    sizePrice.innerText = null;
    sizePriceDisplay.append("$" + userPizza.calculateSizePrice());
    sizePrice.append(sizePriceDisplay);
    showTotal();
}


function getToppings() {
    const toppingChoice = document.querySelectorAll("input[type='checkbox']:checked");
    userPizza.toppings = [];

    toppingChoice.forEach(function (topping) {
        userPizza.toppings.push(topping.value);
    });
}

function showToppingPrice() {
    const toppingPrice = document.querySelector("div.toppingPrice");
    const toppingPriceDisplay = document.createElement("h3");

    document.querySelector("div#pricingInfo").removeAttribute("class", "hidden");

    getToppings();

    toppingPrice.innerText = null;
    toppingPriceDisplay.append("+ $" + userPizza.calculateToppingPrice());
    toppingPrice.append(toppingPriceDisplay);
    showTotal();
}

function showTotal() {

    const totalPrice = document.querySelector("div.totalPrice");
    const totalPriceDisplay = document.createElement("h3");
    const noSizeChosen = document.createElement("h4");

    totalPrice.innerText = null;
    if (userPizza.pizzaPrice()) {
        totalPriceDisplay.append("Total: $" + userPizza.pizzaPrice());
        totalPrice.append(totalPriceDisplay);
    } else {
        noSizeChosen.append("Please choose a size!");
        totalPrice.append(noSizeChosen);
    }
}

function addToOrder() {
    event.preventDefault();

    const totalPrice = document.querySelector("div.totalPrice");

    if (totalPrice.innerText !== "Please choose a size!") {
        document.querySelector("div#totalOrder").removeAttribute("class", "hidden");

        const totalOrder = document.querySelector("div#totalOrder");
        const rollingTotal = document.querySelector("div#rollingTotal");
        const orderList = document.createElement("ul");
        const orderListItem = document.createElement("li");
        const userPizzaSize = userPizza.size.charAt(0).toUpperCase() + userPizza.size.slice(1);
        const orderPrice = document.createElement("h3");

        if (typeof addToOrder.totalPrice === "undefined") {
            addToOrder.totalPrice = 0;
        }

        orderListItem.append(userPizzaSize + " pizza with " + (userPizza.toppings).join(", ") + " - $" + userPizza.pizzaPrice());
        orderList.append(orderListItem);
        totalOrder.append(orderList);
        addToOrder.totalPrice += userPizza.pizzaPrice();

        const previousTotalPrice = document.querySelector("div#rollingTotal h3");
        if (previousTotalPrice) {
            rollingTotal.removeChild(previousTotalPrice);
        }

        orderPrice.append("Order total: $" + addToOrder.totalPrice);
        rollingTotal.append(orderPrice);
    }
}

window.addEventListener("load", function () {

    const sizeInputs = document.querySelectorAll("input.sizeInput");
    const toppingInputs = document.querySelectorAll("input.toppingInput");
    document.querySelector("div#totalOrder").setAttribute("class", "hidden");
    document.querySelector("div#pricingInfo").setAttribute("class", "hidden");

    sizeInputs.forEach((input) => {
        input.addEventListener("click", showSizePrice);
    });

    toppingInputs.forEach((input) => {
        input.addEventListener("click", showToppingPrice);
    });

    document.querySelector("form#pizzaOrder").addEventListener("submit", addToOrder);
});


