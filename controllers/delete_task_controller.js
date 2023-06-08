const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports=function(req,res){
    console.log(req.body["selectedTasksId[]"].length,typeof req.body["selectedTasksId[]"][0]);
    async function tp(){
        if(typeof req.body["selectedTasksId[]"]=='string'){
            await tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"]);
        }
        else{
            for (let i = 0; i < req.body["selectedTasksId[]"].length; i++) {
                await tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"][i]);
            }
        }
        //return res.redirect('back');
    }
    tp();
    return res.redirect('back');
/*.then(function(){console.log(tp())});/*.then(function(){
        return res.redirect('back');
    });*/
    /*for(let i=0;i<req.body["selectedTasksId[]"].length;i++){
        //console.log(req.body["selectedTasksId[]"][i]);
        asynchronousProcess();
        tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"][i]);
    }*/
    //tasksdb.findByIdAndDelete();
};