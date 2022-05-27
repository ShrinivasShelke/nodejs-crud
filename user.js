const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://shree:bW5MP13WqR30XWA8@cluster0.lflzq.mongodb.net/students?retryWrites=true&w=majority")// bW5MP13WqR30XWA8 shree
.then(()=>{                                                                                                                 //students
    console.log("connected to mongDB compass")
})
.catch((err)=>{
    console.error("there is error in code",err)

})


const ClaasA=mongoose.model('classA',new mongoose.Schema({
    name:String,
    divsion:Number,
    subject:[String]
}))



async function creatInfo(){
    const student1=new ClaasA({
        name:"Ram",
        divsion:2,
        subject:["Marathi","English","maths","history"]
    })

    const result=await student1.save();
    console.log(result)


}
// creatInfo();


//find by id
async function findInfoByID(id){
    const result1=await ClaasA.findById(id);
    console.log(result1)
}
// findInfoByID("628f4f888fd21d33fa99499a")



async function findInfo(){
    const result1=await ClaasA.find();
    console.log(result1)
}
// findInfo()


async function deletInfoById(id){
    const result1=await ClaasA.findByIdAndDelete(id);
    console.log(result1)
}

deletInfoById("628f508ca979d0ceb6c61ccd")






