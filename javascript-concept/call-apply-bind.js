
//call method 

let personone = {
    firstname: "Soumya",
    lastname: "Manna",
}

const printfullname=   function(){
    console.log (this.firstname +" "+this.lastname)
}

printfullname.call(personone);

let persontwo ={
    firstname: "Ram",
    lastname: "jana",
}

printfullname.call(persontwo);

//apply method

let personthree = {
    firstname: "shyam",
    lastname: "de",
}

let personfour = {
    firstname: "akshay",
    lastname: "saini",
}

const printyourfullname= function(hometown, state){
    console.log (this.firstname + " " + this.lastname+ " "+ "from" +" " + hometown +" " +"in"+" "+ state )
}


printyourfullname.apply (personthree,["Arambagh","wb"]) //apply method
printyourfullname.call (personfour,"ghatal","wb") // call method