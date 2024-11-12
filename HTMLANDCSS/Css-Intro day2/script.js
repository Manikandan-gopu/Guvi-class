function findPrime(array){
    let number = []
  
     for(let i=0;i<array.length;i++){
      let isPrime = true
      if(array[i]<2){
        isPrime= false   
      }
    
      for(let j=2;j<Math.sqrt(array[i]);j++){
      if(array[i]%j===0){
        isPrime = false
        break;
      }
      }
   if(isPrime){
    number.push(array[i])
   }
      }
      return number
    }
      console.log(findPrime([34,65,99,87,65,34,2,3,4,5,6,7,8,9]))



const numbers = [ 23,76,65]

sum = 0

const value = sum + numbers
console.log(value)



const total = numbers.reduce((acc,value)=>{

    const value1 = acc+value
   // console.log(value1)
    return value1
},0)
   
console.log(total)







