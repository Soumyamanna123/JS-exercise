//Q1: Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

class person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;
    }
    displaydetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}
let person1= new person('ram',34,'india');
let person2= new person('sam',36,'wb')
console.log('Person-1 Details:');
person1.displaydetails();
console.log("Person-2 Details:")
person2.displaydetails();

//Q2: . Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }
    calculatearea(){
        return this.width*this.height;
    }
    calculateperimeter(){
        return 2*(this.width+this.height)
    } 
}
let a = new Rectangle(3,4);
let areaofrectangle=a.calculatearea();
console.log(`Area of Rectangle: ${areaofrectangle}`)
let perimeterofrectangle=a.calculateperimeter()
console.log(`Perimeter of Rectangle: ${perimeterofrectangle}`)

// Q3: Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. Include a method to display vehicle details. Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors. Override the display method to include the number of doors.
class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
     displayvehicledetails(){
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`)
     }
}
class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors=doors;
    }
    displaycardetails(){
        super.displayvehicledetails()
        console.log(`Number of Doors: ${this.doors}`)
    }

}
let car1= new Vehicle('Ford','model-2',2000)
console.log("Vehicle Details:")
car1.displayvehicledetails();

let car2=new Car('Ford','model-2',2000,2)
console.log("Vehicle Details:")
car2.displaycardetails();

//Q4: Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount{
    constructor(account_number,account_balance){
        this.account_number=account_number;
        this.account_balance=account_balance;
        console.log(`Account Number: ${account_number}`)
        console.log(`Account Balance: ${account_balance}`)

    }
    deposit(amount){
        
        console.log(`Deposited: ${amount}`);
        this.account_balance += amount;
    }
    withdraw(amount){
        if(amount<=this.account_balance){
            this.account_balance-=amount
            console.log(`Withdrawn: ${amount}`)
        }
        else{
            console.log(`Want to withdrawn: ${amount}`);
            console.log('Insufficient balance');
        }
    }
    displaybalance(){
        console.log(`Account Balance: ${this.account_balance}`);
    }

}
const account=new BankAccount('SB-123', 1500);
account.deposit(800)
account.displaybalance()
account.withdraw(2500)


