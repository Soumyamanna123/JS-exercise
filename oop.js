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

//Q5: Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
class engine{
    constructor(cc){
        this.cc=cc;
    }

    enginedetails(){
        return `This is ${this.cc < 150 ? "Platina" : this.cc < 350 ? "Dominor" : this.cc <650 ? "RE" : "Triumph"}`
    }
    
}
 class vehicle extends engine{
    constructor(wheel,cc){
        super(cc);
        this.wheel=wheel;

    }

    generatevehicle(){
        return `${super.enginedetails()}   ${this.wheel == 2 ? "Bike" : this.wheel==4 ?"Car" : ""  }`; 
    }
 }

 const V= new vehicle(5,700,0)
 console.log(V.generatevehicle());


 // Q6: Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

 class Shape{
    calculatearea(){
       
    }
 }

 class Circle extends Shape{
    constructor(radious){
        super();
        this.radious=radious
    }
    
    calculatearea(){
        return Math.PI * this.radious* this.radious;
    }
 }

 class Triangle extends Shape{
     constructor(height,width){
        super();
        this.height=height;
        this.width=width;

        
     }
     calculatearea(){
        return this.height * this.width;
     }
 }

 const c= new Circle(3);
 console.log("Area of circle is: " +c.calculatearea())
 const t =new Triangle(4,5)
 console.log("Area of triangle is: " +t.calculatearea())

// Q7:  Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
    constructor(title,author,publicationyear){
        this.title=title;
        this.author=author;
        this.publicationyear=publicationyear;
    }

    displaybookdetails(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationyear}`);
    }    
}

class Ebook extends Book{
    constructor(title,author,publicationyear,price){
        super(title,author,publicationyear);
        this.price=price;
    }

    displaybookdetails(){
        super.displaybookdetails();
        console.log(`Price: ${this.price}`);
    }
}

const b= new Ebook ('Don Quixote', 'Miguel de Cervantes', 1605, 21.49);
b.displaybookdetails();

//Q8: Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

class Animal {
    constructor(species,sound){
        this.species=species
        this.sound=sound
    }
    animalsound(){
        console.log(`Sound: ${this.sound}`)
    }
}
class Dog extends Animal{
    constructor(species,sound,color){
        super(species,sound)
        this.color=color;
    }
    animalsound(){
        super.animalsound()
        console.log(`Color: ${this.color}`)
    }
}
const d= new Dog(`Dog`,` bark`, `Red`)
d.animalsound()

//Q9:  Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.

 class bank{
    constructor(banknames,branches){
        this.banknames=banknames;
        this.branches=[];
    }
    addbranch(branch){
        this.branches.push(branch);
    }
    removebranch(){

    }
    dispalyallbranch(){

    }
 }