const express=require("express")
const router=express.Router()

const logger=require("../middleware/logger")
const User=require("../models.js/userModel")
router.get("/findall",logger,async (req,res)=>{

    const result = await User.find({})
    console.log(result)
    res.send(result)

})

module.exports=router