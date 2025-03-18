// In JavaScript, a callback function is a function that is passed as an argument to another function
// and is executed after the completion of a certain task or event.
// Callback functions are commonly used in asynchronous programming, event handling, and higher-order functions.
setTimeout(function () {
  console.log("timer");
}, 3000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function outerfunction(callback) {
  console.log("before callback");
  callback();
  console.log("after callback");
}
function innerfunction() {
  console.log("Im The cALLback Function");
}

outerfunction(innerfunction);

function greeting(callback) {
  console.log("Hi World");
  setTimeout(() => {
    callback();
  }, 2000);
}
function saygoodbye() {
  console.log("GOod Bye");
}
greeting(saygoodbye);
