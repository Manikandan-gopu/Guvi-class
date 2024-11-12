console.log("working")
//function Declration
sayMyNAme()
function sayMyNAme(){
    console.log("My name is Mani")
}

// sayMyNAme()
// sayMyNAme()
// sayMyNAme()
// sayMyNAme()

//add to parameters

function addParams(num1,num2){
    const Value = num1+num2
    console.log(Value)
}
addParams(0,17)



function addToNumbers2(num1,num2){
    //const value = num1+num2
    if( num1+num2>50){
        return "right"
    }else{
        return ` ${value} value is lesser than usual`
    }
}

const result = addToNumbers2(41,29)
console.log(result)


let arrow = (a1,b1) => console.log(a1+b1)

arrow(6,5)


const greet = ()=> console.log("hello world")

greet()


const getUser = (name, age)=>{
  const user = {name,age}
  return user
}

console.log(getUser("mani",24))
console.log(getUser("yuvaraj",22))

const multiply = num => num*num
console.log(multiply(5,5))




const printOddNumbers = function(num){
 const num1  = [];
    for(let i=0;i<num.length;i++){
        if(num[i] % 2 !== 0)
            {
             num1.push(num[i])
            }
    }
    return num1
    }
    
console.log(printOddNumbers([1,2,3,4,5,6,7,8,98,65,34]))

//printOddNumbers([1,2,3,4,5,6,7,8])


const oddNUM = (arr) =>{
    const oddnumber =[]
    for(let i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0)
            {
             oddnumber.push(arr[i])
            }
}
console.log(oddnumber)
}

oddNUM([87,54,23,76,99])

// string = "mani"
// const upper  = string.toUpperCase()
// console.log(upper)

const makeCaps = function(array){
    const cap = []
  for(let i=0;i<array.length;i++){
       cap.push(array[i].toUpperCase())
        
  }
  return cap
}


console.log(makeCaps(["mani","yuvi","Manikandan"]))

const sumOfDigits = function(array){
     sum =0
     
     for(let i=0;i<array.length;i++){
         sum+=array[i]
     }
     return sum
}

console.log(sumOfDigits([0,52.12,54.12]))


// const primeNumber = function (array){
//     const num  =  []

//      for(let i=0;i<array.length;i++){
//         let isPrime = true ;
//         if(array[i]<2){
//             isPrime = false
//         }

//         for(let j=2;j<=Math.sqrt(array[i]);j++){
//   if(array[i] % j===0){
//     isPrime = false;
//     break;
//   }
// }
//   if(isPrime){
//     num.push(array[i])
//   }
//         }
//         return num;
//      }


// console.log(primeNumber([1,2,3,4,5,6,7,8,9]))


const isPrimeNum = function (array){
    let number = [];

    for(let i=0;i<array.length;i++){
        let isPrime = true 
        if(array[i]<2){
            isPrime = false
        }
 for(let j=2;j<Math.sqrt(array[i]);j++){
    if(array[i]%j===0){
        isPrime = false;

    }

 }
 if(isPrime){
    number.push(array[i])
break;
 }
    }
    return number;
}
console.log(isPrimeNum(1,2,3,4,5,6,7,8,9,77,87,45,32,23,51,61,99))
