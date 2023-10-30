const express = require('express')
const Taskrouter = express.Router()

const {taskController,getAllTask,addTask,getTask,updateTask,deleteTask} = require('../controllers/taskController')

Taskrouter.get('/',taskController)

Taskrouter.get('/getall',getAllTask)

Taskrouter.post('/addtask',addTask)

Taskrouter.get('/gettask/:id',getTask)

Taskrouter.patch('/api/v1/tasks/:id',updateTask)

Taskrouter.delete('/delete/:id',deleteTask)

module.exports = {Taskrouter}