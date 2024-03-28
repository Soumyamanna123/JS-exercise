// Q. what is higher order function?
// --> A higher-order function in JavaScript is a function that either takes one or more functions
// as arguments or returns a function as its result. Essentially, 
// it's a function that operates on other functions by taking them as arguments or returning them.


  
  function sayHello(name) {
    return 'Hello, ' + name + '!';
  }
  
  function sayGoodbye(name) {
    return 'Goodbye, ' + name + '!';
  }
  function greet(name, callback) {
    return callback(name);
  }
  
  console.log(greet('Alice', sayHello)); // Output: Hello, Alice!
  console.log(greet('Bob', sayGoodbye)); // Output: Goodbye, Bob!