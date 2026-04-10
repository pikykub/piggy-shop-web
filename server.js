const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/peachweb")

app.get("/",(req,res)=>{
res.send("PeachWeb API Running")
})

app.listen(3000,()=>{
console.log("Server started")
})
