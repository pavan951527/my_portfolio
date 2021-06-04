const express = require('express');

const app = express();

app.use(express.static('frontend'));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/html/app.html");
})

app.get("/contact",function(req,res){
    res.sendFile(__dirname+"/frontend/html/Contact.html");
})
var port = Process.env.PORT || 3000;

app.listen(port , ()=>{
       console.log("server started at port"+port);
});
//app.listen(3000,function()
//{
  //  console.log("server started at port 3000");
//});