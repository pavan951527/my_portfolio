const express = require('express');

const app = express();

app.use(express.static('frontend'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/html/app.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/frontend/html/Contact.html");
})

app.listen(3000,function()
{
    console.log("server started at port 3000");
})