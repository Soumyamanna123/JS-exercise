// Function to double a number
function double(x) {
    return x * 2;
}

// Function to add 3 to a number
function addThree(x) {
    return x + 3;
}

// Function to square a number
function square(x) {
    return x * x;
}
// Function composition example
function compose(...fns) {
    return function(x) {
        return fns.reduceRight((acc, fn) => fn(acc), x);
    };
}

// Create the composed function
const composedFunction = compose(double, addThree, square);

// Test the composed function
console.log(composedFunction(2)); // Output: 22
