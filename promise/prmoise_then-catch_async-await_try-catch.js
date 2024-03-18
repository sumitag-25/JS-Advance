const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is completed")
        resolve();
    }, 1000)
})

promiseOne.then(function () {
    console.log("promise is completed")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task Two")
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async two resolved");
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            username: "chai",
            email: "chai@code"
        })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'sumit verma', age: 24 });
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

const username = promiseFour
    .then(function (user) {
        console.log(user);
        return user.username
    })
    .then(function (username) {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log("The Promise is either resolved or rejected");
    })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "sumit verma", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Some ERROR occured");
//     }
// }

// getAllUsers();




// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((retrunResponse)=>{
//     console.log(retrunResponse);
// })
// .catch(function(error){
//     console.log("Some ERROR Occured");
// })



// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);
// })



// fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })


// async function requestCatApi() {
//     try {
//         const requestData = await fetch('https://api.thecatapi.com/v1/images/0XYvRd7oD')
//         const data = await requestData.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error Appeared");
//     }
// }

// requestCatApi();

// const requestData = fetch("https://randomuser.me/api/")

// requestData.then(function (response) {
//     return response.json()
// })
//     .then(function (data) {
//         const user = data.results[0];
//         const firstName = user.name.first;
//         const lastName = user.name.last;
//         console.log(firstName);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

async function fetchdata() {
    try {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("ERROR");
    }
}

fetchdata();