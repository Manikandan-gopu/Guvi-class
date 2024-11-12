//Data Types

//Primitive DataTypes

// Number 

console.log(typeof 5)
console.log(typeof "5")
console.log(typeof true)


// Non Primitive DataType

let arr = [1,2,3,4,5]
console.log(typeof arr, arr)

let obj = [1,2,3,4,5]
console.log(typeof obj, obj)
  
// In Js arr is also an Object
//copy by value
let a = 10
let b = a
console.log(a)
console.log(b)
b=15
console.log(a)
console.log(b)


//copy by reference
// let sam_arr = [1,2,3]
// let sam_arr2 = sam_arr

// console.log(sam_arr)
// console.log(sam_arr2)

// sam_arr2[1] = 7
// console.log(sam_arr)
// console.log(sam_arr2)


//deep copy
// let ano_arr = [5, 6, 7];
// let ano_arr2 = Object.assign([], ano_arr);
// console.log(ano_arr); //[5, 6, 7]
// console.log(ano_arr2); //[5, 6, 7] 
// ano_arr2[1] = 8;
// console.log(ano_arr); //[5, 6, 7]
// console.log(ano_arr2); //[5, 8, 7]



// const newArrray =[54,76,32]
// const array2 = Object.assign([],newArrray);
// console.log(newArrray)
// console.log(array2)

// array2[2]= 67

// console.log(newArrray)
// console.log(array2)
