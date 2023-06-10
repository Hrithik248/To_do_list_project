const mongoose=require('mongoose');
//task data schema
const taskSchema= new mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    category:{
        type: String,
    }
});
const task=mongoose.model('task',taskSchema);
module.exports=task;