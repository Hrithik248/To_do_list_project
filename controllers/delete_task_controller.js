const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports=function(req,res){
    tasksdb.deleteMany({checked:true});
    return res.redirect('back');
};