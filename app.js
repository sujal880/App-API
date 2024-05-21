const express=require('express');
const userroutes=require('./routes/userroutes');
require('./config/db');
const allroutes=express.Router();
allroutes.use('/jwt',userroutes);
module.exports=allroutes;