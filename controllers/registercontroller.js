const user=require('../models/usermodel');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const secretkey="*****";

const registeruser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                status:400,
                message:"Enter Required Field's"
            })
        }
        const existinguser=await user.findOne({email});
        if(existinguser){
            res.status(400).json({
                status:400,
                message:"User Already Exists"
            })
        }

        const hashedpassword=await bcrypt.hash(password,10);
        const newuser=new user({email:email,password:hashedpassword});
        await newuser.save();

        const token=jwt.sign({userId:newuser._id},secretkey,{expiresIn:'1h'});
        res.status(200).json({
            status:200,
            message:"User Created",
            data:token
        })
    }

    catch(ex){
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}

module.exports=registeruser;