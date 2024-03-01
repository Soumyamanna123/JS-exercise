//Map Function


const arr=[2,4,6,7,9]

const output= arr.map(function double(x){
    return x*2;
})
console.log(output)

const arr2=[2,4,6,7,98]

const output2= arr2.map((x)=>{
    return x*2;
})
console.log(output2)//jj



//filter function


const array=[3,5,7,8,6]

// function isodd(x){
//     return x%2==0
// }

// const output3= array.filter(isodd);


const output3=array.filter((x)=>{
    return x%2
})
console.log(output3)


//reduce functionl