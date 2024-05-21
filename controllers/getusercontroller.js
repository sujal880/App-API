const usermodel=require('../models/usermodel');

const getusers=async(req,res)=>{
   const email=req.query.email;
   console.log(email);
   try{
    const user=await usermodel.findOne({email:email});
    console.log(user);
    if(!user){
        res.status(400).json({
            status:400,
            message:"user not found"
        })
    }

    res.status(200).json({
        status:200,
        data:user
    })
   }

   catch(ex){
    res.status(500).json({
        status:500,
        message:"Internal Server Error"
    })
   }
}

module.exports=getusers;