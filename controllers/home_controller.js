module.exports=function(req,res){
    tasksdb.find({}).then(
        function(tasks){
            return res.render('home',{
                title:'To do list App',
                tasks
            })
        }
    );
};