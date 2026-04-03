//1
try {
    console.log(a)
}
catch (err) {
    console.log(err, 'in catch')
}

//2
let data = '{"name": "Alex"}';
try {
    if (data) {
        let a = JSON.parse(data)
        console.log("parsed", a)
    }
}
catch (err) {
    console.log("Invalid JSON")
}

//3
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b
}

try {
    divide(6, 0)
}
catch (e) {
    console.log(e.message)
}

//4
try {
    const data = JSON.parse('')
}
catch (err) {
    console.log(err)
}
finally {
    console.log("Operation completed");

}

//5
function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be ≥ 18")
    }
    return age
}

try {
    checkAge(16)
}
catch (err) {
    console.log(err.message)
}

//7
try {
    try {
        JSON.parse('invalid')
    }
    catch (err) {
        console.log('Inner error handled')
    }
    startProcess();

}
catch (err) {
    console.log("Outer error")
}

//8
function fetchData(success) {
    if (!success === false) {
        throw new Error("API Failed");
    }
    return success
}

try {
    fetchData(true)
}
catch (err) {
    console.log(err.message)
}

//9
function withdraw(balance, amount) {
    if (typeof balance !== "number" || typeof amount !== "number") {
        throw new Error("Invalid input: Balance and amount must be numbers.");
    }

    if (amount <= 0) {
        throw new Error("Invalid amount: You must withdraw more than 0.");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance.");
    }
    return balance - amount
}

try {
    const newBalance = withdraw(1000, 2000); 
    console.log("New Balance:", newBalance);
}
catch (err) {
    console.log("Transaction Failed:",err.message)
}