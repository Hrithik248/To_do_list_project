const db= require('../config/mongoose');
const tasksdb=require('../models/tasks');
module.exports = function (req, res) {
  //if a single element is selected then the selectedTasksId[] contains the single id as string 
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
