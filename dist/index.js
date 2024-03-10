"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(model, year, price) {
        this.model = model;
        this.year = year;
        this.price = price;
    }
    drive() {
        console.log("Driving !");
    }
    stop() {
        console.log("Stopping !");
    }
    speak() {
        console.log("Peinn Peinn !");
    }
}
const car = new Car("1997", 2023, "1 Million $");
console.log(Object.keys(car));
class Chef extends Car {
    constructor(occupation, model, year, price) {
        super(model, year, price);
        this.occupation = occupation;
    }
    cook() {
        console.log(`My occupation is ${this.occupation} and i am cooking`);
    }
    speak() {
        console.log("Hey ! Hey !");
    }
}
const carChef = new Chef("Chef", "1997", 2028, "1,000,000 $");
console.log(carChef);
carChef.speak();
