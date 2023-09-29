// The Principles of OOP
// 4 OOP principles are inheritance, encapsulation, abstraction and polymorphism


// creating objects from classes is to use the new  keyword
// class Animal { /* ...class code here... */ }
// let myDog = new Animal()

class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return this.name;
    }

}
// unlike a regular function, it must be called with new
const newUser = new User('Mateo')
console.log(newUser.sayHi());

// rewriting class User in pure functions

// // 1. Create constructor function
// function User(name) {
//     this.name = name;
//   }
//   // a function prototype has "constructor" property by default,
//   // so we don't need to create it
  
//   // 2. Add the method to prototype
//   User.prototype.sayHi = function() {
//     alert(this.name);
//   };
  
//   // Usage:
//   let user = new User("John");
//   user.sayHi();


// Just like functions, classes can be defined inside another expression,
// passed around, returned, assigned, etc.
let User2 = class {
    sayHi() {
        return 'Hola';
    }
};
console.log(User2.sayHi());