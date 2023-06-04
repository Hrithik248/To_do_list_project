const express=require('express');
const port= 8000;
const app=express();
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server : ${err}`);
    }
    console.log(`Server running on port : ${port}`);
})