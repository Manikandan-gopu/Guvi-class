
// console.log(a)
// let a = 15
// console.log(a)


let details = {
name:"Mani",
age: 24,
loc:"chennai"
}


console.log(details["age"])
console.log(details.age)


// JSON

var obj1 = {name:"Person1",age:5};
var obj2 = {age:5,name:"Person1"};

if(obj1.name===obj2.name&&obj1.age===obj2.age){
    console.log(true)
}else{
    console.log(false)
}

// format-2

// let xhr = new XMLHttpRequest();
// //console.log(xhr)
// xhr.open("GET","https://restcountries.com/v3.1/all")
// xhr.send();
// //console.log(xhr)
// xhr.onload = function(){
//     const data = JSON.parse(xhr.response)
//     for(let i=0;i<data.length;i++){
//     console.log(data[i].flags.svg)
//     console.log(data[i].name.common)
//     console.log(data[i].subregion)
//     console.log(data[i].population)
//     console.log(data[i].region)
//     console.log("_______________________________")
//     }
// }

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://restcountries.com/v3.1/all");
// xhr.send();

// xhr.onload = function() {  // Corrected from onLoad to onload
//     if (xhr.status === 200) { // Check if request was successful
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     } else {
//         console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     }
// };

let object = {name:"Person1",age:51};
let object2 = {age:51,name:"Person1"};

if(object.name===object2.name&&object.age===object2.age){
    console.log(true)
}else{
    console.log(false)
}


// const data = new XMLHttpRequest;
// data.open("GET","https://restcountries.com/v3.1/all");
// data.send();
// data.onload = function(){
//     const onData = JSON.parse(data.response)
//     for(let i=0;i<onData.length;i++){
//         console.log(` My town is  ${onData[i].name.common}`)
//     }
// }
const newData = new XMLHttpRequest
newData.open("GET","https://restcountries.com/v3.1/all")
newData.send();
newData.onload = function(){
    const onData =JSON.parse(newData.response)
    for(let i=0;i<onData.length;i++){
        console.log(onData[i].population)
    }
}

// fetch("https://restcountries.com/v3.1/all")
// .then((data)=>data.json())
// .then((data)=>{
//     for(let i=0;i<data.length;i++){
//         console.log(i,data[i].name.common)
//         console.log(i,data[i].population)
//     }
//     }
// )


// fetch("https://restcountries.com/v3.1/all")
// .then((data)=>data.json())
// .then((data)=>{
//     for(let i=0;i<data.length;i++){
//         console.log(i,data[i])
//     }
   
// })



