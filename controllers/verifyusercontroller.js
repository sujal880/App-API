const verifytoken=async(req,res,next)=>{
    const bearerheader=req.headers['authorization'];
    if(typeof bearerheader!=='undefined'){
        const bearer=bearerheader.split(" ");
        const token=bearer[1];
        console.log(token);
        req.token=token;
        next();
    }
    else{
        res.status(400).json({
            status:400,
            message:"Internal Server Error"
        })
    }
}

module.exports=verifytoken;