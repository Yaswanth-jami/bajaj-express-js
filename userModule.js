const express = require("express")
const app=express()
const mongoose =require("mongoose")
mongoose.connect("mongodb+srv://jami:2512@cluster0.hjwbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
const User = mongoose.model("publications",{
    
    author:String,
    password:String,
    userName:String


})

const user1 =new User(
{
    author:"author123",
    password:"pass123",
    userName:"testauthor"
}
)
user1.save().then(() => console.log("user added successfully"))