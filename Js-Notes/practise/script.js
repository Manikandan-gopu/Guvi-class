// console.log("working")

// // fetch("https://restcountries.com/v3.1/all")
// // .then((response)=>response.json())
// // .then((data)=>{
// // data.forEach((value )=> {
// //     console.log(value.name.common)
// //     console.log(value.population)
// //     console.log(value.flags.svg);
// //     console.log("_____________________________________")
// // });
// // })



// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>response.json())
// .then((data)=>{
//   const asianCountry = data.filter((country)=>country.region ==="Asia")
//   .map((country)=>country.name.common)
//   console.log(asianCountry)
// })


// fetch("https://restcountries.com/v3.1/all")
// .then((response)=>response.json())
// .then((data)=>{
//   const population = data.filter((country)=>country.population<200000)
//   .map((country)=>country.population)
//  // .map((country=>country))
//   console.log(population)
//   return population
// })

// const data = fetch("https://restcountries.com/v3.1/all")
// .then((res)=>res.json())
// .then((data)=>{
//  const reduceData = data.reduce((population,val)=>{

//   return population+= val.population
// },0)

// return reduceData
// })

// console.log(data)

// // fetch("https://restcountries.com/v3.1/all")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     // Filter for countries in Asia
// //     const asianCountries = data.filter((country) => country.region === "Asia");
// //     console.log("Asian countries:", asianCountries);
// //     return asianCountries;
// //   })


//filter
// const value = ["apple", "dog", "banana", "cat"]

// function ValueGreat4(array){
//    const value1 = array.filter((value)=>value.length>4)
//    return value1
// }

// console.log(ValueGreat4(value))


// const number =[10, 20, 30, 40]

// const filter = function(number){
//   const innerFilter =number.filter((value)=>value>25)
//   return innerFilter
// }

// console.log(filter(number))

// const realNum = [1, 2, 3, 4, 5, 6]

// function evenNumber(array){
//   const value1 = array.filter((value)=>{
//      return value%2===0
  
//   })
//   return value1
// }

// console.log(evenNumber(realNum))


// const object = [{name: "Alice", age: 25}, {name: "Bob", age: 15}]

// function voteAge(array){
//   const valu =array.filter((value)=>value.age>18)
//   return valu
// }

// console.log(voteAge(object))


const num= [1, 2, 3, 4]

const doubledFunction = function(array){
 const value1 =array.map((value)=>value*2)

 return value1

}

console.log(doubledFunction(num))

const number = [1, 2, 3]

const convertString = function(array){
  const value1 = array.map((value)=>value*value)
  return value1
}

console.log(convertString(number))




const object = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]


function getName(array){
  const value1 = array.map((value)=>value.name)
  return value1
}

console.log(getName(object))


const total = [1, 2, 3, 4] 

function getTotal(array){
  const total= array.reduce((acc,value)=>{
return  acc+value


  },0)
  return total
}

console.log(getTotal(total))

const totalProduct = [1, 2, 3, 4]

function getProduct(array){
  const total= array.reduce((acc,value)=>{
return  acc*value


  },1)
  return total
}


console.log(getProduct(total))


 const maxNum = [5, 10, 15, 20]

 function getMax(array){
  
    const total= array.reduce((acc,value)=>{
      return  acc>value ? acc:value 
    })
  
    return total
  }
 

console.log(getMax(maxNum))


const count = ["apple", "banana", "apple", "orange", "banana", "apple"]


 function countValue(array){
  const total = array.reduce((acc,value)=>{
acc[value] = (acc[value ] || 0) +1
 return acc
  },{})
  return total 
 }

 console.log(countValue(count))


class guvi{
  construtor(){

  }
}



//Calculate the sum of squares of even numbers from an array.

const numbers = [1,2,3,44,35,23,21,98]

const evenValue = numbers
.filter((value)=>value%2===0)
.map((value)=>value*value)
.reduce((acc,value)=>{
  acc+value
},0)

console.log(evenValue)


const products = [
  { name: "Laptop", category: "electronics", price: 1200, inStock: true, rating: 4.5 },
  { name: "T-shirt", category: "clothing", price: 20, inStock: false, rating: 3.8 },
  { name: "Smartphone", category: "electronics", price: 800, inStock: true, rating: 4.7 },
  { name: "Jeans", category: "clothing", price: 50, inStock: true, rating: 4.1 },
  { name: "Headphones", category: "electronics", price: 150, inStock: true, rating: 4.3 },
  { name: "Sneakers", category: "footwear", price: 90, inStock: true, rating: 4.2 },
];


// Using a combination of .map(), .filter(), and .reduce(), answer the following questions:

// Find the total value of all electronics products that are in stock and have a rating of at least 4.0.
// Return the names of these products in uppercase, as an array of strings.
// Expected Output for the example above:

// Total Value: 2150 (calculated from "Laptop", "Smartphone", and "Headphones")
// Names Array: ["LAPTOP", "SMARTPHONE", "HEADPHONES"]

// const demandProducts = products
// .filter((value)=>value.rating>4.0&&value.category==="electronics")
// .map((value)=>({
//   product: value.name , total : value.price
// }))
// .reduce((acc,val)=>{
//   acc.totalPrice = acc.totalPrice+val.total
// acc.product1.push(val.product)
// return acc
// },
// {totalPrice:0,product1:[]},
  
// )

// console.log(demandProducts)


// const orders = [
//   {
//     customerName: "Alice",
//     items: [
//       { product: "Laptop", quantity: 1, price: 1200 },
//       { product: "Mouse", quantity: 2, price: 25 }
//     ]
//   },
//   {
//     customerName: "Bob",
//     items: [
//       { product: "Laptop", quantity: 1, price: 1200 },
//       { product: "Keyboard", quantity: 1, price: 75 }
//     ]
//   },
//   {
//     customerName: "Charlie",
//     items: [
//       { product: "Monitor", quantity: 2, price: 300 },
//       { product: "Mouse", quantity: 1, price: 25 }
//     ]
//   }
// ];
// // Filter out orders that contain a "Laptop" in their items list.
// // Map the filtered orders to calculate the total cost of each order (sum of quantity * price for each item).
// // Reduce the mapped orders to find the total revenue from all filtered orders.


// const TotalValue = orders
// .filter((value)=>value.items.some(item=>item.product==="Laptop"))
// .map((value)=>{
//   const totalorder =value.items.reduce((acc,val)=>acc+val.quantity*val.price,0)
//  return {customername: value.customerName , totalorder}
// })
// const TotalLapValue = TotalValue.reduce((acc,value)=>acc+value.totalorder,0)
// console.log(...TotalValue)
// console.log("total Amount in Laptop:", TotalLapValue)



const salesData = [
  { productName: "Laptop", category: "electronics", unitsSold: 5, pricePerUnit: 1200 },
  { productName: "T-shirt", category: "clothing", unitsSold: 20, pricePerUnit: 20 },
  { productName: "Smartphone", category: "electronics", unitsSold: 8, pricePerUnit: 800 },
  { productName: "Jeans", category: "clothing", unitsSold: 15, pricePerUnit: 50 },
  { productName: "Headphones", category: "electronics", unitsSold: 10, pricePerUnit: 150 },
  { productName: "Sneakers", category: "footwear", unitsSold: 12, pricePerUnit: 90 },
];

const salesReport = salesData
.map((value)=>({
  category: value.category,
   revenue : value.unitsSold * value.pricePerUnit
}))
.reduce((acc,val)=>{
  if(acc[val.category]){
    acc[val.category] += val.revenue
  }else{
    acc[val.category]= val.revenue
  }
  return acc
},{})

console.log(salesReport)

const orders = [
  {
    orderId: 101,
    customerName: "Alice",
    items: [
      { product: "Laptop", quantity: 1, price: 1200 },
      { product: "Mouse", quantity: 2, price: 25 }
    ]
  },
  {
    orderId: 102,
    customerName: "Bob",
    items: [
      { product: "Headphones", quantity: 2, price: 150 },
      { product: "Keyboard", quantity: 1, price: 100 }
    ]
  },
  {
    orderId: 103,
    customerName: "Charlie",
    items: [
      { product: "Monitor", quantity: 1, price: 300 },
      { product: "Mouse", quantity: 1, price: 25 }
    ]
  }
];

const saleValue = orders
.map((value)=>{
  const totalPrice = value.items.reduce((acc,val)=>acc+val.quantity*val.price,0)

  const discountedAmount = totalPrice>500 ?totalPrice *0.9 : totalPrice
return {
 Name:value.customerName,
 Id: value.orderId,
 totalPrice,
 discountedAmount

}
})

console.log(...saleValue)

const inventory = [
  { productId: 1, productName: "Laptop", category: "electronics", stock: 5, price: 1200 },
  { productId: 2, productName: "Headphones", category: "electronics", stock: 15, price: 150 },
  { productId: 3, productName: "T-shirt", category: "clothing", stock: 30, price: 20 },
  { productId: 4, productName: "Jeans", category: "clothing", stock: 25, price: 50 },
  { productId: 5, productName: "Sneakers", category: "footwear", stock: 10, price: 90 }
];

function InventoryFunc(inventory,category,threshold){
return inventory.filter((value)=> value.category ===category)
.map(product => {
  // Step 2: Calculate restock cost if stock is below threshold
  const restockCost = product.stock < threshold 
    ? product.price * (threshold - product.stock) 
    : 0;

  // Step 3: Return the formatted product data
  return {
    productId: product.productId,
    productName: product.productName,
    stock: product.stock,
    restockCost
  };
});
}


const newData= InventoryFunc(inventory,"electronics",10)
console.log(newData)



function findPrime(array){
  let num =[];

  for(let i=0;i<array.length;i++){
    let isPrime = true;
    if(array[i]<2){
      isPrime = false
    }
    for(let j=2;j<=Math.sqrt(array[i]);j++){
      if(array[i]%j===0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      num.push(array[i])
    }
  }
  return num
}

console.log(findPrime([1,2,3,4,5,6,7,8,9,0]))

fetch("https://restcountries.com/v3.1/all")
.then((response)=>response.json())
.then((data)=>{
  console.log(data)
  //for(let i=0;i<data.length;i++){
    console.log(data)
    
})



const Obj= {
  ind:"India",
  chin:"china",
  pak :"pakistan",
  ita :"Italy"
}

Object.keys(Obj).forEach(element => {
  console.log(element)
});


const Okeys = Object.values(Obj)
console.log(Okeys)

Okeys.forEach(key=>{
  console.log(key)
})



//const numberNew = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "cherry"]

fruits.forEach(fruit=>{
  console.log(fruit)
})

const numbersNew = [10, 20, 30, 40];

let sum =0;

numbersNew.forEach((number,index)=>{
sum+= number;
console.log(number)

})

console.log("total sum",sum)


 const colors = { red: "#FF0000", green: "#00FF00", blue: "#0000FF" };


 Object.keys(colors).forEach((color)=>{
  console.log(`${color}:${colors[color]}`)
 })

 const ages = [18, 21, 16, 30, 25, 17]

 ages.forEach((age)=>{
  if(age>=18){
    console.log(age)
  }
 })


 const prices = [100, 200, 300]
let sum1 = []
 prices.forEach((price)=>{
   sum1.push(price+10)
   
 })

 console.log(sum1)


 const students =
  [{ name: "John", age: 20 },
     { name: "Jane", age: 22 },
      { name: "Jim", age: 19 }];

students.forEach((key)=>{
  console.log(key.name)
})


const words = ["hello", "world", "javascript"];

words.forEach((word)=>{
  let upper = word.toUpperCase()
  console.log(upper)
})

const scores = [85, 65, 70, 95, 90];

scores.forEach((score)=>{
  if(score>=75){
    console.log("pass") 
  }else{
    console.log("fail") 
  }
  
})


const letters = ["a", "b", "a", "c", "b", "a","d"]
 let value = {}

 letters.forEach((letter)=>{
  if(value[letter]){
    value[letter] += 1
  }else{
    value[letter]= 1
  }
 })

 console.log(value)


//  let x =1;
//  let y=2;
//  x+=y
//  console.log(x)


 const sumNum = [3,65,23,98,21]
  sum = 0
 for(let i=0;i<sumNum.length;i++){
  sum+=sumNum[i]
  
 }
 console.log("total Value:",sum)


 let sentence= "";

 let wordsOne = ["Manikandan","Gopu"]
console.log(...wordsOne)
 wordsOne.forEach((word)=>{
 sentence+= word + " "
 console.log(word)
 })
 console.log(sentence)


 let world = ["hello","world"]

 console.log(...world)



 function findPrimeNo(array){
  let number =[];


  for(let i=0;i<array.length;i++){
    isPrime = true;
    if(array[i]<2){
      isPrime= false
    };
    for(let j=2;j<=Math.sqrt(array[i]);j++){
      if(array[i]%j===0){
        isPrime =false;
        break;
      }
    }

    if(isPrime){
      number.push(array[i])
    }
  }
 }

 console.log(findPrime([1,2,3,4,5,6,7,8,9,0]))
 



 function findsqaure(num){
    const value = Math.sqrt(num)
    return value
 }

 console.log(findsqaure(25))



 

 