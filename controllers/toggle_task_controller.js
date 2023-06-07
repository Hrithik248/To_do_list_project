const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports=function(req,res){
    var prev=!tasksdb.findById(req.query.id).checked;
    tasksdb.findByIdAndUpdate(req.query.id,{checked: prev });
    return res.redirect('back');
};