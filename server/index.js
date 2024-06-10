const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.unsubscribe(cors())

const PORT = process.env.PORT || 8080

//Schema
const schemaData = mongoose.Schema({
    name : String,
    email : String,
    mobile : Number,
},{
    timestamps : true   
})

const userModel = mongoose.model("user",schemaData)

app.get("/",async(req,res)=>{
    const data = await userModel.find({})
    
    res.json({message : success > true, data : data})
})

mongoose.connect("mongodb://127.0.0.1:27017/crudoperation")
.then(()=>{
    console.log("connect to DB")
    app.listen(PORT,()=>console.log("Server is running"))
})
.catch((err)=>console.log(err))



