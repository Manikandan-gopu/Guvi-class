//var let and const

//redeclration and re initiliazation
//is Possible

var a =23
var a = 23
console.log(a)

//Not possible for re declration
//re-initilaztion is possible

let b= 23
 b = 24
console.log(b)

//re-initilaztion is not possible
//Not possible for re declration

const c = 23
//c = 25

console.log(c)

//let and scope is block scope
// var can be accessed Outside
if(b==23){
    b++
    console.log(b)
}else{
    console.log(b)
}

//spread and rest operator

const array = ["mango","apple",5,"Vetrivel","nishani"]
console.log(...array)


const areaFrnd = ["Yeswanth","dommy"]
const schlFrnd =["Raji","Roshan"]
const colgFrnd = ["sathish","prasa"]

const MyFrnds= [...areaFrnd,...schlFrnd,...colgFrnd]
console.log(MyFrnds)

//Rest Operator 
  
function getAllDetails(data1,data2,...data3){
console.log(data1)
console.log(data2)
console.log(data3)
}

getAllDetails("sam","mani","deepak","selvan","kamesh")

//destructuring
const names = ["Mani","deepak",["Ganesh","Jagu"]]
console.log(names)

const[n1,n2,[n3,n4]]= names 
console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)

//task for destructuring
const menArr = [1,3,5,6,["sanjay",25],9]
const [ , , , ,[mentorName,age], ] = menArr

console.log(mentorName)
console.log(age)

//Object destructuring
const reObject = {
    name:"mani",
    degree:"Bca",
    company:"accenture",
    personalDetails:{
        place:"chennai"
    }
}

const {name:fname ,
    personalDetails:{place:currLoc} 
} = reObject

console.log(fname)
console.log(currLoc)


//short hand property
let myMame  = "mani"

const myInfo ={
    Name : myMame,
    loc : "chennai"

}

console.log(myInfo.Name)

//Template Literals

const greet = "Hello how are you ?"

const tempLit = `${greet} Im Mani`
console.log(tempLit)

fetch('./resume.json')
.then((data)=>data.json())
.then((data)=>{
    for(let i=0;i<data.length;i++){
        console.log(data[0].personalDetails.name)
        
    }
})




// fetch('./resume.json ')
// .then((data)=>data.json)
// .then((data)=>{
//     for(let i=0;i<data.length;i++){
//         console.log(data[i])
//     }
// })


fetch('./resume.json')
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    if (Array.isArray(data) && data.length > 0) {
      // Access the "personalDetails" section of the first object in the array
      const personalDetails = data[0].personalDetails;
      const educationalInfo = data[0]["educational Info"];
      const workDetails = data[0].WorkDetails;

      // Log personal details
      console.log("Name:", personalDetails.name);
      console.log("Father's Name:", personalDetails.fatherName);
      console.log("Mother's Name:", personalDetails.motherName);
      console.log("Location:", personalDetails.Location);

      // Log educational information
      console.log("\nEducational Info:");
      console.log("School:", educationalInfo.school);
      console.log("10th Grade:", educationalInfo["10thGrade"]);
      console.log("12th Grade:", educationalInfo["12thGrade"]);
      console.log("College:", educationalInfo.college);
      console.log("Rank:", educationalInfo.Rank);

      // Log work details
      console.log("\nWork Details:");
      console.log("Company:", workDetails.Company);
      console.log("Occupation:", workDetails.Occupation);
      console.log("Experience:", workDetails.Exp, "years");
    } else {
      console.error("Data is not an array or it's empty");
    }
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });


  


  