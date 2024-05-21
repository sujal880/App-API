const express=require('express');
const registeruser=require('../controllers/registercontroller');
const searchuser=require('../controllers/getusercontroller');
const verifytoken=require('../controllers/verifyusercontroller');
const signin=require('../controllers/signincontroller');
const getallusers=require('../controllers/getallusersdetails');
const router=express.Router();

router.post('/signup',registeruser);
router.post('/signin',signin);
router.post('/search',searchuser);
router.get('/getallusers',getallusers);


module.exports=router;