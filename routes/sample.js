const express = require("expreass")
const router = express().Router()



pp.get("/home/products",(req,res)=>{
    

    res.sendFile(path.join(__dirname+'/index.html'));



});





app.post("/products",loggerMW,(req,res)=>{
    console.log(req.body)
    res.send("success")
})




