//1
async function sayHello() {
    return ('hello')
}
sayHello().then((res) => console.log(res))

//2
function showData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data Received!')
        }, 2000);
    })
}

async function processData() {
    const result = await showData()
    console.log(result)
}
processData()

//3 
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Waited 1 second')
        }, ms);
    })
}

async function delayData() {
    const result = await delay(1000)
    console.log(result)
}
delayData()


//4
async function numberSquare(num) {
    return num * num
}

numberSquare(5).then((res) => console.log(res)).catch((err) => console.log(err))

//5
async function test() {
    console.log("A");
    Promise.resolve().then(() => console.log("B"));
    console.log("C");
}
test();
//answer
/*Even though the code looks sequential, JavaScript treats the console.log statements and 
the Promise differently: 
Synchronous Tasks (A and C): These go straight onto the Call Stack. 
They are executed immediately, one after the other.
Microtasks (B): The .then() callback is placed into the Microtask Queue. 
JavaScript is designed to finish everything on the Call Stack before 
it ever looks at the Microtask Queue.
*/

//6
function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => resolve("User Data"), 2000);
    });
}

async function getUser() {
    const User = await fetchUser()
    console.log(User)
}
getUser()

//7
function getA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' resolves in 1 sec A')
        }, 1000);
    })
}
function getB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' resolves in 2 sec B')
        }, 1000);
    })
}
function getC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' resolves in 1 sec C')
        }, 1000);
    })
}
//Sequential
async function run() {
    const a = await getA(); // Waits 1s
    const b = await getB(); // Waits 2s
    const c = await getC(); // Waits 1s

    console.log([a, b, c]);
    console.timeEnd("SequentialTimer");
}
//When you run them sequentially, the times add up: $1s (A) + 2s (B) + 1s (C) = 4s$

//Parallel Execution
async function run() {
    const [a, b, c] = await Promise.all([
        getA(),
        getB(),
        getC()
    ]);
    console.log([a, b, c])
}
run()

//8
//refere above code 
/* Sequential (Previous): Wait for A... then wait for B... then wait for C means 4 Seconds (1s+2s+1s) 
Parallel (Current): Start A, B, and C at the same exact time means 2 Seconds (The longest one from all)*/

//9
// async function getData() {
//     try {
//         const res = await fetch("wrong-url");
//         const data = await res.json()
//         console.log(data)
//     }
//     catch (err) {
//         console.log('err', err.message)
//     }
// }
// getData()

//10
function getCart() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1: Fetched Orders");
            resolve({
                userId: 101,
                items: [
                    { name: "Mechanical Keyboard", price: 150 },
                    { name: "Mouse", price: 100 }
                ]
            })
        }, 1000);
    })
}
function calculateTotal(cartData) {
    return new Promise((resolve, reject) => {
        const total = cartData.items.reduce((acc, curr) => acc + curr.price, 0)
        setTimeout(() => {
            console.log(`Step 2: Total calculated item :${total}`);
            resolve({
                ...cartData,
                totalPrice: total
            })
        }, 1000);
    })
}
function makePayment(billingInfo) {
    return new Promise((resolve, reject) => {
        console.log(`Step 3: Processing payment for ${billingInfo.totalPrice}...`);
        resolve({
            status: "Paid",
            confirmation: "CONF-777",
            total: billingInfo.totalPrice
        })
    })
}

async function getUserOrder() {
    try {
        const cartData = await getCart();
        const billingInfo = await calculateTotal(cartData);
        const finalResult = await makePayment(billingInfo);
        console.log("Final Result:", finalResult);
    } catch (err) {
        console.error("Something went wrong:", err);
    }
}

getUserOrder()

//11
function getUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('getting user...');
            resolve({ id: 101, name: 'harshada' });
        }, 1000);
    });
}
function getOrders(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('getting order...')
            resolve({
                food: [{ 'pizza': 'veg pizza', 'price': '200' },
                { 'maggie': 'veg noodles', 'price': '100' }]
            })
        }, 1000);
    })
}
function getTotal(bill) {
    return new Promise((resolve, reject) => {
        const totalPrice = bill.food.reduce((acc, curr) => acc + Number(curr.price), 0)
        const totalItem = bill.food.length
        setTimeout(() => {
            console.log(`getting total value for ${totalItem} is ${totalPrice} `)
            resolve(totalPrice);
        }, 1000);
    })
}

async function processOrder() {
    try {
        const user = await getUsers();
        const orders = await getOrders(user);
        const total = await getTotal(orders);
        console.log('Final Bill Total:', total);
    } catch (err) {
        console.log('Error caught:', err);
    }
}

processOrder();

//12
function api1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('api 1')
        }, 1000);
    })
}
function api2() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('api 2')
        }, 1000);
    })
}
function api3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('api 3')
        }, 1000);
    })
}

async function fetchAll() {
    const results = await Promise.allSettled([api1(), api2(), api3()])
    console.log(results)
}
fetchAll()

//13
async function fetchWithRetry(fn, retries) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fn(); 
        } catch (err) {
            if (i === retries - 1) throw err;
            console.log(`Attempt ${i + 1} failed... retrying`);
        }
    }
}

const unstableApi = () => new Promise((res, rej) => {
    Math.random() > 0.5 ? res("Success!") : rej("Network Error");
});

async function run() {
    try {
        const data = await fetchWithRetry(unstableApi, 3);
        console.log(data);
    } catch (e) {
        console.log("Final Error:", e);
    }
}
run();

//14
async function withTimeout(promise, ms){
    const timeOutPromise = new Promise((_,reject) =>{
        setTimeout(() => {
          reject(new Error(`Timeout: Operation took longer than ${ms}ms`))  
        },ms);
    })
    return Promise.race([promise,timeOutPromise])
}

const slowApi = new Promise((res) => setTimeout(() => res('data received!'),3000))

async function runTask() {
    try {
        const data = await withTimeout(slowApi, 2000);
        console.log(data);
    } catch (err) {
        console.error(err.message); 
    }
}

runTask();

//15
const arr = [1, 2, 3];
const delay15 = (ms) => new Promise(res => setTimeout(res, ms));

async function runSequential() {
    for (const num of arr) {
        await delay15(1000);
        console.log(num);
    }
    console.log("Done!");
}

runSequential();

async function runWithReduce() {
    await arr.reduce(async (promiseChain, num) => {
        // Wait for the previous item to finish
        await promiseChain; 
        
        // Now do our current task
        await delay15(1000);
        console.log(num);
    }, Promise.resolve());
}

runWithReduce();
