//1
function outer() {
    const message = 'hello'
    function inner() {
        console.log(message)
    }
    return inner
}

const myFunc = outer()
myFunc()

//2
function createGreeter(name) {
    function anotherFun() {
        const message = 'Hello Anil'
        console.log(message)
    }
    return anotherFun
}

const greetAnil = createGreeter("Anil");
greetAnil()

//3
// function createCounter() {
//     let count = 0; // Private variable

//     // This inner function is a closure
//     return function() {
//         count++; // It remembers 'count' from the outer scope
//         console.log(count);
//     };
// }

// const counter = createCounter();

// counter(); // Output: 1
// counter(); // Output: 2
// counter(); // Output: 3

//4
function createCounter(name) {
    let count = 0;
    return function () {
        count++;
        console.log(`${name} is now: ${count}`);
        return count;
    };
}

const counter1 = createCounter("Counter A");
const counter2 = createCounter("Counter B");

counter1(); // Console: Counter A is now: 1
counter1(); // Console: Counter A is now: 2
counter2(); // Console: Counter B is now: 1
counter2(); // Console: Counter B is now: 1

//5
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function (amount) {
            balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${balance}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
            } else {
                balance -= amount;
                console.log(`Withdrew: ${amount}. Remaining balance: ${balance}`);
            }
        },
        getBalance: function () {
            return balance;
        }
    };
}

const myAccount = createBankAccount(1000);

myAccount.deposit(500);
myAccount.withdraw(200);
console.log("Current Balance:", myAccount.getBalance());

//6
function multiplier(factor) {
    return function(number) {
        return number * factor; 
    };
}

const double = multiplier(2); 

console.log(double(5)); 
console.log(double(10)); 

const triple = multiplier(3);
console.log(triple(5)); 