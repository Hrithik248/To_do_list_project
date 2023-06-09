const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports = function (req, res) {
    if (typeof req.body["selectedTasksId[]"] === 'string') {
      tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"])
        .then(() => {
          res.status(200).send({ message: 'Success' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: 'Error deleting task' });
        });
    } else {
      const deletePromises = req.body["selectedTasksId[]"].map((taskId) =>
        tasksdb.findByIdAndDelete(taskId)
      );
  
      Promise.all(deletePromises)
        .then(() => {
          res.status(200).send({ message: 'Success' });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send({ message: 'Error deleting tasks' });
        });
    }
  };
/*module.exports=function(req,res){
    console.log(req.body["selectedTasksId[]"].length,typeof req.body["selectedTasksId[]"][0]);
    //console.log(req.header('Referer'));
    if(typeof req.body["selectedTasksId[]"]=='string'){
        //console.log('sdv');
        tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"]).then(()=>res.status(200));/*.then(()=>res.redirect('back'));*/
    /*}
    else{
        for (let i = 0; i < req.body["selectedTasksId[]"].length; i++) {
            tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"][i]);/*.then(()=>res.redirect('back'));*/
        /*}
        return res.status(200);
    }
};   
    //return res.redirect("back");
    /*async function tp(){
        if(typeof req.body["selectedTasksId[]"]=='string'){
            await tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"]);/*.then(()=>res.redirect('back'));
        }
        else{
            for (let i = 0; i < req.body["selectedTasksId[]"].length; i++) {
                await tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"][i]);/*.then(()=>res.redirect('back'));
            }
        }
        //return res.redirect('back');
    }
    tp().then(()=>res.redirect('back'));*/
/*.then(function(){console.log(tp())});/*.then(function(){
        return res.redirect('back');
    });*/
    /*for(let i=0;i<req.body["selectedTasksId[]"].length;i++){
        //console.log(req.body["selectedTasksId[]"][i]);
        asynchronousProcess();
        tasksdb.findByIdAndDelete(req.body["selectedTasksId[]"][i]);
    }*/
    //tasksdb.findByIdAndDelete();
