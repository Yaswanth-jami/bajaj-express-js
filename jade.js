const express =require("express");
const app =express();
app.set("view engine","jade")
app.get("/index",(req,res)=>{
    res.render("index",{heading:"Home page"})
})
  
app.listen(3001,()=>{
    console.log("server started");
})