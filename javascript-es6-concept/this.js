"use strict"


// "this" in global scope always points to the globalObject (globalObject depends on javascript runtime env)
console.log(this);

let number=2;
console.log (this.number)// output- undefined  

let number2=2;
console.log (this.number)// output- 2  



function f(){
    console.log(this)
}
f();
//output: window object



  
 




//Arrow Function
  const obj ={
    a: 10,
    b: ()=>{
        console.log(a)
    }
  }
  obj.b();


// Nested Arrow Function

const nestedarrow ={

}


// output based question: Q1
const object = {
    message: ' Hello, World!',
  
    getMessage() {
      const message = ' Hello, Earth!';  // This is a local variable.
      return this.message;  // `this` refers to the object, so it accesses `object.message`.
    }
  };
  console.log(object.getMessage()); //output: Hello, World
  // The reason the output is Hello, World! is that inside the method getMessage(), the this keyword refers to the object itself 
  // a method is a function that's defined inside an object

  // output based question: Q2
  const object1 = {
    message: '2. Hello, World!',
  
    logMessage() {
      console.log(this.message); // What is logged?
    }
  };
  
  setTimeout(object1.logMessage, 4000); //undefined

  const person = {
    name: "Alice",
    greet:function()  {
      setTimeout(() => {
        console.log(`Hello, ${this.name}`);
      }, 1000);
    }
  };
  
  person.greet();

  //4

  const obj1 = {
    value: 5,
    increment: function() {
      const arrowFunction = () => {
        console.log(this.value);
      };
      arrowFunction();
    }
  };
  
  obj1.increment();