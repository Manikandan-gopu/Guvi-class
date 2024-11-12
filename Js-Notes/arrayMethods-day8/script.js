console.log("working")


const arr = [2,31,67,54,89,91]
console.log("orginal arr",arr)


//push array
arr.push(59)
console.log("push array",arr)

//pop removes last element
arr.pop()
console.log("pop",arr)

//unshift add the element in first
arr.unshift(59)
console.log("unshift",arr)

//shift 
arr.shift()
console.log("shift",arr)

//sorting

arr.sort((a,b)=>a-b)
console.log("sort",arr)

//descending
arr.reverse()
console.log("desc",arr)

//slice

const sliceArray = [23,33,45,76,54,90,63,7]
console.log("org arr", sliceArray)
//slice start Index and endIndex
//start index included, endIndex excluded
const slicearr = sliceArray.slice(0,3)
console.log("og arr",sliceArray)
console.log("sliced arr",slicearr)


//splice
const splicearr =[23,45,32,14,67,84,91,53]
 const splicedvalue =splicearr.splice(2,4,"item1","item2")
 console.log("splicearr",splicearr)
 console.log("value",splicedvalue)


 //MRF (Map,filter,reduce)

 const mapArr = [23,56,43,26,765,111]

 const mappedArr= mapArr.map((value,index,accarr)=>{
    console.log(`
        ${value}
        ${index}
        ${accarr}
        `)
    return value*2
 })
console.log(mappedArr)

console.log("--------------------------------------------------------------------------------------------------")

//writting OwnPolyfill

Array.prototype.guviMap = function(fn){
    const newArr = [];
    for(let i=0;i<this.length;i++){
        newArr.push(fn(this[i],i,this))
    }
 return newArr
}
const polyfillarr= mapArr.guviMap((value,index,accarr)=>{
    console.log(`
        ${value}
        ${index}
        ${accarr}
        `)
    return value*2
 })
console.log(polyfillarr)

//filter

const filterArr= mapArr.filter((value,index,accarr)=>{
    console.log(`
        ${value}
        ${index}
        ${accarr}
        `)
    return value!=26
 })
console.log(filterArr)




const batch = [
    {
        studname:"Mani",
        marks:67,
    },
    {
        studname:"sandhya",
        marks:77,
    },
    {
        studname:"Menon",
        marks:15
    },
    {
        studname:"shankar",
        marks:67
    }
];


function getAvgPassMarks(studarr,intermarks){
const result = studarr.map((value)=>value.marks+intermarks)
.filter((value)=>value>=35)
.reduce((acc,value,index)=>{
acc.totalMarks = acc.totalMarks+value
acc.totalPassed = index+1
acc.totalavg = acc.totalMarks/acc.totalPassed
return acc
},{totalMarks:0,totalPassed:0,totalavg:0})
console.log(result.totalavg)
}

getAvgPassMarks(batch,10)


function calculate(num1, num2, operation) {
    // Your code here
if(operation==="add"){
    const value = num1+num2
    return value
}
if(operation==="sub"){
    const value = num1-num2
    return value
}
if(operation==="mul"){
        const value = num1*num2
    return value
}
if(operation==="div"){
    const value = num1/num2
return value
}else{
    return "invalid Oeprations"
}
}

console.log(calculate(5, 3, "mul")); // Expected output: 8


function findLargest(arr) {
    // Your code here
let num =[]
 for(let i=0;i<arr.length;i++){
    if(arr[i]>num){
        num = arr[i]
    }

 }
 return num
}
console.log(findLargest([1, 5, 3, 9, 2]))

function canVote(age) {
    // Your code here
    if(age>=18){
        return "Can Vote"
    }else{
         return "your not eligible"
    }
}
console.log(canVote(20)); // Expected output: true


function celsiusToFahrenheit(celsius) {
    // Your code here
    let F = celsius* 9/5 + 32
    return F

}
console.log(celsiusToFahrenheit(30)); // Expected output: 86


function sumArray(arr) {
    // Your code here
 let sum =0
 for(let i=0;i<arr.length;i++){
    sum += arr[i]
 }
 return sum
}
console.log(sumArray([1, 2, 3, 4, 5])); // Expected output: 15


function getPositiveNumbers(arr) {
    // Your code here
    let array =[]
    if(arr>0){
        return array.push(arr)
    }else{
        return arr
    }
}
console.log(getPositiveNumbers([-3, 4, -1, 5, 7, -2])); // Expected output: [4, 5, 7]


