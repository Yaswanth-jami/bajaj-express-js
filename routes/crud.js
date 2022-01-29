const express=require("express")
//const async = require("hbs/lib/async")
const router=express.Router()
const User=require("../models/UserModule1")
//to view
router.get("/findall",async (req,res)=>{
    const result=await User.find()
    console.log(result);
    arr=[]
    result.map((item)=>{
        arr.push(item.email)
    })
    res.send("list of all users present are "+arr)
})
router.post("/find",async (req,res)=>{
    const data=req.body
    const result=await User.findById(data.id)
    console.log(result)
    res.send(result)
})
//to update
router.post("/update",async (req,res)=>{
    const data=req.body
    const result=await User.findByIdAndUpdate(data.id,{country:data.country})
    console.log(result)
    res.send("sucessfully updated")
})
//to delete
router.post("/delete",async (req,res)=>{
    const data=req.body
    const result=await User.findByIdAndDelete(data.id)
    res.send("deleted sucessfully")
})
//to replace
router.post("/replace",async (req,res)=>{
    const data=req.body
    cond=data.rep
    const new_obj= new User({
        email:data.email,
        password:data.password,
        mobile:data.mobile,
        country:data.country,
        area:data.area,
        pincode:data.pincode,
    })
    const result=await User.findOneAndReplace({email:cond},new_obj,{upsert:true})
    res.send("sucessfully replaced")
})
module.exports=router
