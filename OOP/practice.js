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