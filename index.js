// TypeError: "X" is not a constructor in JavaScript

// EXAMPLE 1 - Only use the 'new' operator with valid constructors

// ✅ Class constructor
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  getName() {
    return `${this.first} ${this.last}`;
  }
}

const p1 = new Person('James', 'Doe');

console.log(p1.first); // 👉️ James
console.log(p1.last); // 👉️ Doe
console.log(p1.getName()); // 👉️ James Doe

const p2 = new Person('Jane', 'Doe');
console.log(p2.getName()); // 👉️ Jane Doe

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using functions as constructors

// // ✅ Function constructor
// function Animal(color, speed) {
//   this.color = color;
//   this.speed = speed;
// }

// const a1 = new Animal('green', 25);
// console.log(a1.speed); // 👉️ 25

// const a2 = new Animal('red', 35);
// console.log(a2.speed); // 👉️ 35

// ------------------------------------------------------------------

// // NOTE:
// // 1. Arrow functions cannot be used as constructors
// // 2. The ES6 object method shorthand cannot be used as a constructor
