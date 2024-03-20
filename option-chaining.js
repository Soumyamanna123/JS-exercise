console.log ("fgbf");
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