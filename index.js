const express=require('express');
const allroutes=require('./app');
require('./config/db');
const app=express();
app.use(express.json());
app.use(allroutes);


app.listen(4000,()=>{
    console.log("Server is Running");
})