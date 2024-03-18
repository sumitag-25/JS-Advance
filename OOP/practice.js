function user( userName, noOfLogin, signUp){
    this.userName = userName;
    this.noOfLogin = noOfLogin;
    this.signUp = signUp;
    return this
}

const userOne = new user("sumitverma", 15, true)
const userTwo = new user("Sumit", 18, false)

console.log(userOne.constructor);
console.log(userOne instanceof user);

// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    // Method to display information about the person
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}

// Creating instances of Person using the constructor function
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);

// Calling the method defined in the constructor function.
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.