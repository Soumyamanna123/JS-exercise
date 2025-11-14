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

const nums = [5, 10, 15];

const result= nums.reduce((sum,num)=>{
return sum+num
},0)

console.log(result)



const fruits = ["apple", "banana", "apple", "orange", "apple"];

const applecount= fruits.reduce((initialfruit, currentfruit )=>{
if(currentfruit=="apple"){
    return initialfruit + 1; 
}
return initialfruit ; 

},0) 
console.log(applecount)
