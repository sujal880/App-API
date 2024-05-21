const express=require('express');
const allroutes=require('./app');
require('./config/db');
const app=express();
app.use(express.json());
app.use(allroutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Running Properly"
    })
})


app.listen(4000,()=>{
    console.log("Server is Running");
})