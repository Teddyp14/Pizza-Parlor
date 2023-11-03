//Business Logic

function Pizza(toppings, size) {
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





