
//1
// const users =[
//     {name:'Soumya', age: 20},
//     {name: 'Manna', age : 21},
// ]
// const username = users.find (user => user.name=== "Soumya")
//  console.log (username.age)


//2.
const numbers = [1, 2, 4, 5, 3];

function multiple(number) {
  return number * number;
}

const multiplenumber = numbers.map(multiple);
console.log(multiplenumber);

//3.
const fruits =["apple", "guava"] 
function uppercase(fruit){
    return fruit.toUpperCase() 
}
const uppercaseoffruit = fruits.map(uppercase)
console.log (uppercaseoffruit)

//4
const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' }
];

function fullname (user){
    return  user.firstName +" "+ user.lastName
}
const printfullname = users.map(fullname)
console.log (printfullname)

//5.
const names = ['Alice', 'Bob', 'Charlie'];

// const printnamewithindex = names.map ((name, index)=> `${index + 1}. ${name}` )
// console.log(printnamewithindex)

function printfullnamewithindex(name, index) {
    return `${index + 1}. ${name}`;
  }
const printnames = names.map(printfullnamewithindex)
console.log (printnames)

//6.
// const people = [
//     { id: 1, name: 'John', age: 30, city: 'New York' },
//     { id: 2, name: 'Jane', age: 25, city: 'London' }
//   ];  
//   function printnamewithage (user){
//     return  {Name: user.name +","+ Age: user.age}
//   }
//   const printpeoplenamewithage = people.map (printnamewithage)
//   console.log (printpeoplenamewithage)