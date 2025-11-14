// let user={
//     age: 30,
//     "is admin": true,
//     "is movie lover": false, 
// }
// console.log (user.age) //dot notation
// console.log(user["is admin"]) //bracket notation
// user.name="Soumya"
// console.log (user.name)
// console.log (user)

// user.seniorcitizen = true;
// delete user["is movie lover"]
// console.log (user)
// const car = prompt("which is your fav car");
// let favcar = {
//     [car]: 9
// };
// console.log(favcar);


function car (name, model){

 console.log (`name is ${this.name}`)
}
car("bmw","x")

class car {
    constructor (name, model){
      this.nmae=name
      this.model=model
  
      
    }
  }