const express = require("express");
const path = require('path');
const app =express();
const fs =require("fs")


const router = express.Router();
const bodyparser = require("body-parser");

app.use(bodyparser.json())


const loggerMW = (req,res,next)=>{
    log={
        "method":req.method,
        "url":req.url,
        "date":new Date().toDateString(),
        "time":new Date().toTimeString()
    }

    fs.appendFileSync(path.join(__dirname,'./data/logdata.txt'), "\n" +JSON.stringify(log))
    next()
}



app.get("/home",loggerMW,(req,res)=>{

    res.sendFile(path.join(__dirname+'/index.html'));

   // res.send({pname:"xyz",price:"12000" })
   /*
    console.log(req.query)
    const querydata =req.query
    if(querydata.prname){
        res.send("product fetched")
    }
    res.send("req rec")
    */


});






//params
app.get("/products/:prname/:price",loggerMW,(req,res)=>{
    console.log(req)
    res.send("products")
})



app.post("/products",loggerMW,(req,res)=>{
    console.log(req.body)
    res.send("success")
})





app.get("/products/productsearch",loggerMW,(req,res)=>{
    console.log(req)
    res.send("two level")
})



// for links that are not present
app.all("*",(req,res)=>{
    res.status(400).send("file not found")
})

app.listen(3001,()=>{
    console.log("server started")
})

