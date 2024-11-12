function createToy(name,dia,shape,wrapper){
    return{
 name,
 dia,
 shape,
 wrapper,
 buildToy:function(){
    console.log(`
    My toy name was ${name} 
    with the diameter of${dia},
    it is made up of ${shape},
    and packed in the ${wrapper}`
    )
 },
info: function(){
     console.log(`my info is for ${name}`)
}
    }
}


const firstToy = createToy("barbie","48cm","pyramid","box")
const secondToy = createToy("nandy","58cm","cone and circle","box")

console.log(firstToy)
firstToy.buildToy()
firstToy.info()

console.log(secondToy)
secondToy.buildToy()
secondToy.info()



const landFunc = {
    land:" land is owned by grandFather",
    getLand: function(){
        console.log(this.land)
    },
  innerObject:{
    land: "land is Owned by father",
    getLand: function(){
 console.log(this.land)
    }
  }
    
    }

console.log(landFunc)
landFunc.getLand()
landFunc.innerObject.getLand()


//constructor Operations

function Product(name,price,model,color){
this.product_name = name,
this.product_price = price,
this.product_model = model,
this.product_color = color,
this.getProduct = function(){
 console.log(`
Product Name  : ${this.product_name}
Product Price : ${this.product_price}
Product model : ${this.product_model}
Product Color : ${this.product_color}
    `)
},

this.productInfo = function(){
    console.log(`Brand of the laptop is ${this.product_name}`)
}

}

const myProduct = new Product("HP",55000,"i5","silver")
console.log(myProduct)
myProduct.getProduct()
myProduct.productInfo()


Product.prototype.getPrice = function(){
    console.log("product Price :", this.product_price)
    console.log("product Price :", this.product_name)
    console.log("product Price :", this.product_color)
}

myProduct.getPrice()


class Guvi{
    constructor(batch,mentor,time,topic,task){
 this.batch = `FSD${batch}WD`,
 this.mentor = mentor,
 this.time = time,
 this.topic = topic,
 this.task = task
    }
    getTaskPercentage(){
        let taskper = (this.task*100)/67;
        console.log(taskper.toFixed(2))
    }

    getBatchDetails(){
        console.log(`My Batch name was ${this.batch}`)
    }
}

const myClass = new Guvi("57","Sanjay",8.00,"constructor",60)
console.log(myClass)
myClass.getBatchDetails()
myClass.getTaskPercentage();


class  student extends Guvi{
    constructor(batch,mentor,time,topic,task,studentName,RollNo){
        super(batch,mentor,time,topic,task);
 this.studentName = studentName,
 this.RollNo = RollNo


    }
    getAllDetails(){
        console.log(`
My Batch no ${this.batch}
Mentor name was ${this.mentor}  
class starts by ${this.time} 
today's Topic was ${this.topic}
students average task Per was ${this.task}
student was ${this.studentName}
roll no was ${this.RollNo}

            `)
    }
}

const allDetails = new student ("57","Sanjay",8.00,"constructor",60,"Mani",17856)
console.log(allDetails)
allDetails.getAllDetails()

student.prototype.getTopic = function(){
console.log(`Topic name :${this.topic}`)
console.log(`Topic name :${this.RollNo}`)
}

allDetails.getTopic()


class overAllInfo extends student{
    constructor(batch,mentor,time,topic,task,studentName,RollNo,courseName, institution){
        super(batch,mentor,time,topic,task,studentName,RollNo)
        
     this.courseName = courseName,
     this.institution =institution
    }
//getter Method 

get mentorName(){
    return this.mentor
}

//setter Method
set mentorName(newCourse){
    if(newCourse.length<=0||newCourse.length>=10){
        console.log("MakingError")
    }else{
      this.mentor = newCourse
    }
}

    getAllDetailsIN(){
        console.log(`${this.courseName} is Availble in ${this.institution}`)
    }
}

const allDetailsIn = new overAllInfo("57","Sanjay",8.00,"constructor",60,"Mani",17856,"MERN","GUVI")
console.log(allDetailsIn)
allDetailsIn.getAllDetailsIN()


overAllInfo.prototype.getMyinstitution = function(){
    console.log(" My instittion name :", this.institution)
}

allDetailsIn.getMyinstitution()
console.log(allDetailsIn.mentorName)
allDetailsIn.mentorName= "Mahesh"
console.log(allDetailsIn.mentorName)


