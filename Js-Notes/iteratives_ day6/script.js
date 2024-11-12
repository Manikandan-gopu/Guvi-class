const array = ["India","China","Pakistan","Italy"]

for(let i=0;i<array.length;i++){
    console.log(array[i])
}

const Obj= {
    ind:"India",
    chin:"china",
    pak :"pakistan",
    ita :"Italy"
}
const Okeys = Object.keys(Obj)
console.log(Okeys)
for(let i=0;i<Okeys.length;i++){
    console.log(Obj[Okeys[i]])
}
console.log("--------------------------forEach array Method-----------------------------------------")

//array iterations using foreach
array.forEach((value,index,accarr)=>{
    console.log(`${value}
${index}
${accarr}
        `)
    
})
console.log("--------------------------forEach Object Method-----------------------------------------")
//Objects iterations using foreach
Okeys.forEach((value,index,accarr)=>{
    const key = Obj[value]
    console.log(`${value}
${key}
${index}
${accarr}
        `)
    
})

//for in suitable for Object


for(keys in Obj){
    console.log(Obj[keys])
}


