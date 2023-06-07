const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports=function(req,res){
    tasksdb.create(req.body);
    return res.redirect('back');
}