const mongoose = require('mongoose')
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../middleware/custom-error')


const taskController =(req,res)=>{
res.send('main page')
}

// GET ALL TASKS
const getAllTask =asyncWrapper(async(req,res)=>{
        const task = await Task.find({})
        res.status(200).send(task)
})

// ADD NEW TASK
const addTask =asyncWrapper(async(req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).send(req.body)
    })

// GET A SINGLE TASK
const getTask =asyncWrapper(async(req,res,next)=>{
        const data = await Task.findById(req.params.id)
        if(!data){
            // res.status(404).json({msg:"No task with this id"})
          //  const error = new Error('Not Found!')
           // error.status = 404;
           // return next(error)
           return next(createCustomError(`No Task with ${req.params.id}`,404))

        }else{
            res.status(200).send(data)
        }
        
})


// UPDATE TASK
const updateTask =(req,res)=>{
    res.send('update task')
}


// delete TASK
const deleteTask =asyncWrapper(async(req,res)=>{

        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(404).json({msg:"No task with this id"})
            return
        }
        res.status(200).send('data deleted succesfully')

    })





module.exports = {taskController,getAllTask,addTask,getTask,updateTask,deleteTask}