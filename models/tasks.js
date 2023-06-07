const mongoose=require('mongoose');
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
        required: true
    },
    checked:{
        type: Boolean
    }
});
const task=mongoose.model('task',taskSchema);
module.exports=task;