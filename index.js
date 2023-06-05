const express=require('express');
const port= 8000;
const app=express();
const bodyParser=require('body-parser'); 
app.use(bodyParser.urlencoded({extended: false}));
//use express router
app.use('/',require('./routes'));
// set up view engine
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server : ${err}`);
    }
    console.log(`Server running on port : ${port}`);
})