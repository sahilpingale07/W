const express=require('express');
const app=express();

app.use(express.static("public"));
//get request
app.listen(3000,()=>{console.log("Server started");});


