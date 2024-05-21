const mongoose=require('mongoose');
const UserModel=mongoose.Schema({
    email:String,
    password:String
});

const User=mongoose.model('users',UserModel);

module.exports=User;