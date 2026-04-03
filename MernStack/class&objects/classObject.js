//1
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

const user1 = new Person('harshada', '29')
user1.greet()

//2
const user2 = new Person('manas', '33')
user2.greet()
const user3 = new Person('chinki', '2')
user3.greet()

//3
class MathCalculator {
    static add(a, b) {
        return a + b
    }
    static subtract(a, b) {
        return a - b
    }
    static multiply(a, b) {
        return a * b
    }
    static divide(a, b) {
        return a / b
    }
}

console.log(MathCalculator.add(2, 4), 'add')
console.log(MathCalculator.subtract(8, 5), 'subtract')
console.log(MathCalculator.multiply(4, 5), 'multiply')
console.log(MathCalculator.divide(12, 6), 'divide')

//4
class Animal {
    constructor(species) {
        this.species = species
    }

    makeSound() {
        console.log('Some generic animal sound')
    }
}

const myPet = new Animal('Dog')
console.log(myPet instanceof Animal)
console.log(myPet instanceof Array)
console.log(myPet instanceof Object)

//5
class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder,
            this.balance = balance
    }
    deposite(amount) {
        this.balance += amount,
            console.log(`deposited ${amount} New balance:${this.balance}`)
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds! Withdrawal denied.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew: ₹.${amount}. Remaining balance: ₹.${this.balance}`);
        }
    }
    getBalance() {
        return this.balance
    }
}
const myAccount = new BankAccount("Harshada", 500);
myAccount.deposite(200);
myAccount.withdraw(1000);
myAccount.withdraw(300);

//6
class MathUtils {
    static square(num) {
        return num * num
    }
    static cube(num) {
        return num * num * num
    }
}

console.log(MathUtils.square(2), 'square')
console.log(MathUtils.cube(3), 'cube')

//7
class User {
    constructor(email) {
        this._email = email
    }

    get email() {
        return this._email.toLowerCase()
    }

    set email(value) {

        if (value.includes('@')) {
            this._email = value;
        } else {
            console.error('email must contain "@" ')
        }
    }

}
const myUser = new User("HARSHADA@World.com");
console.log(myUser.email);
myUser.email = "wrongformat";

//8
// const user = {
//     name: "Harshada",
//     details: { age: 29 } // Nested object
// };

// Object.freeze(user);

// user.name = "New Name";      // Won't work
// user.details.age = 30;      // WORKS! Because the inner object isn't frozen.
// // You call it like this:
// Object.freeze(myObject);

// // NOT like this:
// myObject.freeze(); // This will throw an error!

//9
class Vehicle {
    constructor(brand, sound) {
        this.brand = brand;
        this.sound = sound
    }
    start() {
        console.log(`${this.brand} is starting...`);
    }
}

class Car extends Vehicle {
    constructor(brand, sound, fuelType) {
        super(brand, sound);
        this.fuelType = fuelType;
    }

    drive() {
        console.log(`${this.brand} goes ${this.sound}! (Runs on ${this.fuelType})`);
    }
}

const myCar = new Car('Mercedes', 'vhommmmmmm', 'Petrol',);
const myCar2 = new Car('MiniCooper', 'sumooooooo', 'disel',);
myCar.start();
myCar.drive();
myCar2.start();
myCar2.drive();

//10
class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const myCircle = new Circle(5);

console.log("Radius:", myCircle.radius);
console.log("Area:", myCircle.area().toFixed(2));

//11
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary
    }
    displayDetails() {
        console.log(`hi myself ${this.name} and my current salary is ${this.salary}`)
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department
    }

    displayDetails() {
        console.log(`hi myself ${this.name} and my current salary is ${this.salary} and i am from ${this.department} department.`)
    }
}

const manager1 = new Manager("Harshada", 85000, "IT");
manager1.displayDetails();

//12
class Wallet {
    #balance = 500;
    constructor() {
    }
    addMoney(amount) {
        this.#balance += amount
    }
    spendMoney(amount) {
        this.#balance -= amount
    }
    getBalance() {
        console.log(`this is your balance ${this.#balance}`)
        return this.#balance
    }
}
const acc = new Wallet()
acc.addMoney(1000)
acc.spendMoney(800)
console.log(acc.getBalance())

//13
function userInfo(name, role) {
    return {
        name: name,
        role: role,
        getInfo() {
            console.log(`Hey!,I am ${this.name} and i am ${this.role} from factory`)
        }
    }
}
const user4 = userInfo('Harshada', 'Full Stack Developer')
user4.getInfo()

class getUserInfo {
    constructor(name, role) {
        this.name = name,
            this.role = role
    }
    getUserInfo() {
        console.log(`Hey!,I am ${this.name} and i am ${this.role} from class`)
    }
}
const user5 = new getUserInfo('Harshada', 'Full Stack Developer')
user5.getUserInfo()
/* 
factory function: Just a function, 
Often avoided (easier for beginners),
Easy to create "private" variables, 
Uses "Composition" (mixing objects)

class: Uses class and new, 
Heavily relies on this, 
Uses # for private fields, 
Uses extends and super
*/

//14
class Students {
    constructor(name) {
        this.name = name
    }
    study() {
        console.log(`${this.name} is studying!`)
    }
}

const student1 = new Students('Harshada')
const student2 = new Students('Manas')
const student3 = new Students('Chinki')

console.log(student1.__proto__ === student2.__proto__)
console.log(student2.__proto__ === student3.__proto__)

//15
class ShoppingCart {
    constructor() {
        this.items = []; 
    }

    addItem(name, price) {
        const existingItem = this.items.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({ name, price, quantity: 1 });
        }
        console.log(`${name} added to cart.`);
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        console.log(`${name} removed from cart.`);
    }

    getTotal() {
        const total = this.items.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);
        return `Total Price: ₹.${total}`;
    }

    clearCart() {
        this.items = [];
        console.log("Cart is now empty.");
    }
}

const myCart = new ShoppingCart();
myCart.addItem("Laptop", 1000);
myCart.addItem("Mouse", 50);
myCart.addItem("Mouse", 50); 

console.log(myCart.items);    
console.log(myCart.getTotal()); 

//16
