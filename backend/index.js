const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080
const connection = require("./config/connection")


app.use("/",()=>{
    res.send()
})

app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log("Connected To DB Success")
    }
    catch(err){
        console.log("Failed to connect to DB")
    }
    console.log(`Listening on port ${PORT}`)
});


