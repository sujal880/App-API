const usermodel=require('../models/usermodel');
const getalldata=async(req,res)=>{
    const data=await usermodel.find();
    res.status(200).json({
        status:200,
        message:data
    })
}

module.exports=getalldata;