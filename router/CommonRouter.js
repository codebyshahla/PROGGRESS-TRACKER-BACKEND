const express =require('express')
const router =express.Router();
const {postSignup}=require('../Controllers/CommonControllers')

router.post("/signup",postSignup)
module.exports = router