const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.unsubscribe(cors())

const PORT = process.env.PORT || 8080

mongoose.connect("mongodb://localhost:27018/CRUD Operation")

app.get("/",(req,res)=>{
    res.json({message : "Server is running crud"})
})

app.listen(PORT,()=>console.log("Server is running"))