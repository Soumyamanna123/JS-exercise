const stations = [
    "Chennai Beach", "Chennai Fort", "Chennai Park", "Chennai Egmore", "Chetpet", 
    "Nungambakkam", "Kodambakkam", "Mambalam", "Saidapet", "Guindy", 
    "St. Thomas Mount", "Pazhavanthangal", "Meenambakkam", "Trisulam", "Pallavaram", 
    "Chromepet", "Tambaram Sanatorium", "Tambaram"
  ];
  
function showstationindex (stationname){

    const index = stations.indexOf(stationname)
    const previousstaion = stations[index-1]
    const nextstation =stations[index+1]
    console.log (`${stationname} is ${index+1} number station`)

    console.log (`The Previous Station of ${stationname} is  ${previousstaion} `)
    console.log (`The next Station of ${stationname} is  ${nextstation} `)

}

showstationindex("Guindy")


function isstationexist (stationname){
  const index = stations.indexOf(stationname)
  if (index==-1){
    console.log (` ${stationname} station is not available`)
  }
  else{
    console.log (`${stationname} is available which is ${index} no station`)
  }
}

isstationexist("Guind");

console.log ("truee")
console.log(Number(false));  // Output: 1

  

