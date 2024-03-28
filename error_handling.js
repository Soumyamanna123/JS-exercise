//Q1: Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.

function checkinteger(n){
    if (!Number.isInteger(n) )
    {
        throw  "Number is not valid integer";
}
}
try{
    let a=0.1;
    checkinteger(a);
}
catch(error){
    console.log("Q1=> Error: " +error);
} 

//Q2: Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

try {
    const undefinedobject=undefined;
    console.log (undefined.property)
}
catch(error){
    if (error instanceof TypeError) 
    {
      console.log('Error: Property access to undefined object');
    } 
    else 
    {
      throw error; 
    }
}

// Q3:  Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.


function checknumber(n1,n2){
    if(n2==0){
        throw "number should not be zero";
    }
}
try{
    checknumber(3,0);
}
catch(error){
    console.log("Q3=> Error: "+ error)
}

//Q4: Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.


const checknegativenumber=(number)=>{
    if (number<0){
        throw "Number is negative"
    }
}
try{
    checknegativenumber(-3.7);
}
catch(error){
    console.log("Q4=> Error: "+ error)
}

// Q5:  Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

const checkarray=(arr)=>{
    if (arr==0){
        throw "array is invalid";
    }
}
try{
    let array=[];
    checkarray(array);
}
catch(error){
    console.log("Q5=> Error: "+error)
}

// Q6: Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

const validatestring=(str)=>{
    if (str==0){
        throw "string is invalid"
    }
}
try{
    let string ='';
    validatestring(string);
    let string2='hola';
    validatestring(string);
}
catch(err){
    console.log("Q6=> Error: "+err)
}

//Q7: Write a JavaScript program that uses a try-catch block to catch and handle a 'RangeError' when accessing an array with an invalid index.

const invalidindex=(arr,i)=>{
    if(i<0 || i>arr.length){
        throw "Invalid index,can't access"
    }
    else{
        console.log(arr[i])
    }
}
try{
    let array=[3,4,5,6]
    invalidindex(array,5);
}
catch(err){
    console.log("Q7=> Error: "+err)
}

//Q8: Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.


//Q9: Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

const parseJSON = (jsonString) => {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log('Q9=> Parsed JSON:', parsedData);
    } catch (error) {
        if (error instanceof SyntaxError) {
            console.error('SyntaxError:', error.message);
        } else {
            throw error; 
        }
    }
};
const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}';
try {
    parseJSON(validJSON);   
} catch (err) {
    console.log('Q9=> Error:', err.message);
}






