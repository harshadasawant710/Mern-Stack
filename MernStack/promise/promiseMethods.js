//promise-methods
//1
const promise1 = new Promise((resolve, reject) => {
    let success = 'true'
    if (success) {
        setTimeout(() => {
            resolve('Task Complited!, methods')
        }, 1000);
    } else {
        reject('Not done!')
    }
})

promise1.then((res) => console.log(res)).catch((err) => console.log(err))

//2
function promiseReject(num) {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            setTimeout(() => {
                resolve('success')
            }, 1000)
        } else {
            setTimeout(() => {
                reject('Something went wrong,methods')
            }, 1000)
        }
    })
}

promiseReject(4).then((res) => console.log(res)).catch((err) => console.log(err))

//3
const resolveMethod = Promise.resolve('100')
resolveMethod.then((data) => console.log(data))

//4
const rejectMethods = Promise.reject('failed')
rejectMethods.then((res) => console.log(ree)).catch((err) => console.log(err))

5
const myPromie = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('task done!')
    }, 1000)
})
myPromie.then((res) => console.log(res)).catch((err) => console.log(err)).finally(
    console.log('finally something run!')
)

//6 same as no.6 from promise hm

//7
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve('number is even')
        }else{
            reject('odd number')
        }
    })
}

checkNumber(5).then((res) => console.log(res)).catch((err) => console.log(err))

//8
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('A')
    }, 1000);
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('B')
    }, 2000);
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('C')
    }, 3000);
})

Promise.all([p1, p2, p3])
    .then(values => console.log(values))

/*The total execution time is 3 seconds.Why?
Because Promise.all runs these tasks in parallel (at the same time).At 1 second, "A" is ready.
At 2 seconds, "B" is ready.
At 3 seconds, "C" is finally ready.
Since Promise.all waits for the slowest promise to finish, 
the total time is equal to the longest timer (3 seconds), not the sum of all timers ($1+2+3 \neq 6$).*/

//9 Make one promise reject from above and check
//answer
/*When you use Promise.all, it operates on an "All or Nothing" basis. 
If even one promise fails, the entire group fails immediately.*/
//add catch to it
// .catch((err) => {
//     // 👉 Handling the error properly
//     console.log("Error caught:", err); 
//   });

//10
const num1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1')
    }, 1000);
})
const num2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('2')
    }, 2000);
})
const num3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3')
    }, 3000);
})

Promise.allSettled([num1, num2, num3]).then((res) => console.log(res))
/*Promise.all, which is "all-or-nothing," allSettled is patient—it waits for every single promise 
to finish, regardless of whether they succeeded or failed.*/

//11
const r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve 1')
    }, 2000);
})
const r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve 2')
    }, 1000);
})
const r3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve 3')
    }, 3000);
})

Promise.race([r1, r2, r3]).then((res) => console.log(res))
/*Since r2 has the shortest timer (1000ms), it will "win" the race, 
and your console will log: "resolve 2".
This is the most important rule of Promise.race: The race ends as soon as the first promise settles. 
"Settled" means it either resolves OR rejects.*/

//12
const any1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve 1 from any')
    }, 2000);
})
const any2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('resolve 2 from any')
    }, 3000);
})
const any3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve 3 from any')
    }, 1000);
})

Promise.any([any1, any2, any3]).then((res) => console.log(res))
/*It demonstrates the core feature of this method: it is looking for the first successful promise, 
regardless of how many failures happen before it.
If every single promise in the array fails, Promise.any() doesn't just return one error. 
Instead, it throws a special kind of error called an AggregateError.
An AggregateError is essentially a wrapper that holds all the rejection reasons from 
every promise in the group.*/

//13
function fakeAPI(name, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`User: ${name}`)
        }, 1000);
    })
}

const f1 = fakeAPI('harsha', 1000)
const f2 = fakeAPI('manas', 2000)
const f3 = fakeAPI('chinki', 3000)

Promise.all([f1, f2, f3]).then((res) => console.log("Combined Result:", res)).catch((err) => console.log(err));

//14
const callToPromise = new Promise((resolve, reject) => {
    let success = 'true'
    if (success) {
        setTimeout(() => {
            resolve('Data Recieved!')
        }, 2000)
    } else {
        reject('Data not found!')
    }
})
callToPromise.then((res) => console.log(res))
    .catch((err) => console.log(err))

//15
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (promises.length === 0) return resolve([]);

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    results[index] = value;
                    completedCount++;
                    console.log(`Promise ${index + 1} finished with value: ${value}`);

                    if (completedCount === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

console.log("Starting promises...");

const pl1 = Promise.resolve("Apple");
const pl2 = new Promise(resolve => setTimeout(() => resolve("Banana"), 1000));
const pl3 = "Cherry"; 

myPromiseAll([pl1, pl2, pl3])
    .then((finalResult) => {
        console.log("Success! Final Array:", finalResult);
    })
    .catch((err) => {
        console.error("One failed:", err);
    });