//1
const mongoose=require('mongoose');

//2
const connectDB=async ()=>{

    try {
        //1
        await mongoose.connect(process.env.DB_URI)
        console.log("database connected..")
        
    } catch (error) {
        console.log("cannot connect!",error)
        
    }
}
module.exports=connectDB;