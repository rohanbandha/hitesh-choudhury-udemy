let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    }
}
//console.log(car.start);

function Person(name, age) {
    this.name = name
    this.age = age
}
let john = new Person("John", 28)
//console.log(john.name);

function Animal(type) {
    this.type = type
}

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function(){
    return`Custom method ${this}`
};

let myArray = [1,2,3]
//console.log(myArray.hitesh());
let myNewArray = [1,2,3,4,5]
//console.log(myNewArray.hitesh());

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance example`
    }
}

let myCar = new Car("Toyota", "Corolla")
//console.log(myCar.start());
//console.log(myCar.drive());

let vehOne = new Vehicle("Toyota","corolla")
//console.log(vehOne.make);

//Encapsulation

class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount;
        return this.#balance;
    }

    getBalance(){
        return `${this.#balance}`;
    }
}

let account = new BankAccount()
//console.log(account.getBalance());

// Abstraction

class CoffeeMachine {
    start() {
        return `starting the machine...`
    }

    brewCoffee(){
        return `Brewing coffee`
    }
    pressStartButton(){
        let msgone = this.start()
        let msgtwo =this.brewCoffee()
        return `${msgone} + ${msgtwo}`
    }
}
let myMachine = new CoffeeMachine()
//console.log(myMachine.start());
//console.log(myMachine.brewCoffee());
//console.log(myMachine.pressStartButton());

//polymorphism

class Bird {
    fly() {
        return `Flying`
    }
}

class Penguin extends Bird {
    fly(){
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
//console.log(bird.fly());
//console.log(penguin.fly());

//static method

class Calculator {
    static addition(a, b) {
        return a + b;
    }
}

// let minicalc = mew Calculator();
// console.log(minicalc.add(2,3))

//console.log(Calculator.addition(2,3));

//Getters and Setters

class Employee{
    #salary;
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary can not be in negative")
        }
        this.name = name
        this.#salary = salary
    }
    get salary(){
        return `You are not allowed to not see salary`
    }
    set salary(value){
        if (value < 0) {
            console.log("Invalid Slary");
        }else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", -50000)
console.log(emp._salary);
emp.salary = 60000;
