const app=require("express")()
/*const SampleRoutes=require("./routes/sample.js")
app.use("/",SampleRoutes)*/


const bodyparser = require("body-parser");
app.use(bodyparser.json())

/*const signup=require("./routes/sample")
app.use("/sample",sampleRouters)*/
const signup=require("./routes/createUser")
const findall =require("./routes/findUser")

app.use("/",findall)

app.use("/",signup)

app.listen(3001,()=>console.log("server started"))

