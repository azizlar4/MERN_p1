//1
const express=require('express')
//2
const app=express();
//5
require('dotenv').config();

//6
const connectDB=require('./config/connectDB')
connectDB();

//8 middleware body-parser
app.use(express.json());
//7 routes
 
app.use('/api/contact', require('./routes/contact'));

//3
const PORT= process.env.PORT;

//4
app.listen(PORT, (err)=>{err?console.error(`error!! ${err}`):console.log(`server running on ${PORT}...`)})