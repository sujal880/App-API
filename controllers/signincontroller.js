const user=require('../models/usermodel');
const jwt=require('jsonwebtoken');
const secretkey="*****";

const signIn=async(req,res)=>{
    const {email,password}=req.body;

    try{
        const User=await user.findOne({email});
        if(!User || (await user.isPasswordMatch(password))){
            return res.status(400).json({
                status:400,
                message:"Invalid Email or Password"
            })
        }
        const token=jwt.sign({userId:user._id},secretkey,{expiresIn:'1h'});
        res.status(200).json({
            status:200,
            message:"Sign In Successfully",
            token:token
        })
    }

    catch(ex){
        console.log(ex);
        res.status(500).json({
            status:500,
            message:"Internal Server Error"
        })
    }
}

module.exports=signIn;