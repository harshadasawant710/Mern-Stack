//1
const promise = new Promise((resolve, reject) => {
  let success = 'true'
  if (success) {
    setTimeout(() => {
      resolve('task complited!')
    }, 5000);
  } else {
    reject('task failed!')
  }
})
promise.then((res) => console.log('success true!', res))
  .then((res) => console.log('success false', res))


//2
function delayMessage(message, time) {
  return new Promise((resolve, reject) => {
    let success = 'true'
    if (success) {
      setTimeout(() => {
        resolve(message)
      }, time);
    } else {
      reject('task failed!')
    }
  })
}
delayMessage('hello', 1000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err))

//3
const p = new Promise((resolve, reject) => {
  resolve("A");
  reject("B");
});

p.then(res => console.log(res))
  .catch(err => console.log(err));
/*The reason is a fundamental rule of Promises: A Promise can only settle once.
When the code hits resolve("A"), the promise immediately changes from Pending $\to$ Fulfilled.
When the code hits reject("B") on the next line, the promise is already settled. 
JavaScript simply ignores any further attempts to change its state.*/

//4
const callToPromise = new Promise((resolve, reject) => {
  let success = 'true'
  if (success) {
    setTimeout(() => {
      resolve('Data Recieved!')
    }, 1000)
  } else {
    reject('Data not found!')
  }
})
callToPromise.then((res) => console.log(res))
  .catch((err) => console.log(err))

//5
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step 1 done')
    }, 1000)
  })
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step 2 done')
    }, 1000)
  })
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Step 3 done')
    }, 1000)
  })
}
step1().then((res) => {
  console.log(res)
  return step2()
}).then((res) => {
  console.log(res)
  return step3()
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err)
})

//6
function modifyData() {
  return new Promise((resolve, reject) => {
    resolve(5)
  })
}
modifyData().then((res) => {
  console.log(res)
  return res * 2
}).then((res) => {
  console.log(res)
  return res + 10
}).then((res) => console.log(res))
  .catch((err) => console.log(err))

//7
Promise.resolve(10)
  .then(num => {
    console.log(num);
    return num * 2;
  })
  .then(num => {
    throw new Error("Something went wrong");
  })
  .then(num => {
    console.log(num);
  })
  .catch(err => {
    console.log(err.message);
  });

/*Promise.resolve(10): A promise is created and immediately enters the Fulfilled state with the value 10.
1.First.then(): Since the promise is fulfilled, this block runs. It logs 10.
It returns 10 * 2(which is 20).This creates a new promise resolved with 20.
2.Second.then(): This block receives 20.
Inside, it executes throw new Error(...).
Crucial Step: When you throw inside a.then(), the current promise immediately Rejects.
3.Third.then(): JavaScript looks at this block, sees it is for "success" cases, but because the chain  
is now in a Rejected state, it skips this block entirely.It never logs num.
4.The.catch(): JavaScript searches down the chain for the first available error handler.
It finds the.catch() and executes it.
It logs err.message, which is "Something went wrong".*/

//8
function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve({ status: 'Valid', value: num })
    } else {
      reject('Invalid')
    }
  })
}


checkNumber(15).then((res) => {
  console.log(res.status, res.value)
  return res
}).then((res) => {
  console.log(res.value, 'PROCCESSED!')
})
  .catch((err) => console.log(err))

//9
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched User Data");
      resolve({ name: "John", userId: 101 });

    }, 1000)
  })
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched Orders");
      resolve(["Order1", "Order2"]);
    }, 1000);
  })
}

function getPayment(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Get Payment')
      resolve(['pay1', 'received'])
    }, 1000);
  })
}

getUser().then((user) => {
  console.log(user)
  return getOrders(user.userId)
}).then((orderId) => {
  console.log(orderId)
  return getPayment(orderId[0])
}).then((Payment) => {
  console.log("Final Payment Details:", Payment)
}).catch(err => console.log(err))

