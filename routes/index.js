const express=require('express');
const router=express.Router();
const home_controller=require('../controllers/home_controller');
const delete_task_controller=require('../controllers/delete_task_controller');
const create_task_controller=require('../controllers/create_task_controller');
router.get('/',home_controller);
router.post('/create-task',create_task_controller);
router.get('/delete-task',delete_task_controller);
module.exports=router;