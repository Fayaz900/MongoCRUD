const mongoose = require('mongoose')
const Task = require('../models/task')

const taskController =(req,res)=>{
res.send('main page')
}

// GET ALL TASKS
const getAllTask =async(req,res)=>{
    try {
        const task = await Task.find({})
        res.status(200).send(task)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

// ADD NEW TASK
const addTask =async(req,res)=>{
    try {
        const task = await Task.create(req.body);
        res.status(201).send(req.body)
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
    }

// GET A SINGLE TASK
const getTask =async(req,res)=>{
    try {
        const data = await Task.findById(req.params.id)
        if(!data){
            res.status(404).json({msg:"No task with this id"})
            return
        }
        res.status(200).send(data)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}


// UPDATE TASK
const updateTask =(req,res)=>{
    res.send('update task')
}


// delete TASK
const deleteTask =async(req,res)=>{
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            res.status(404).json({msg:"No task with this id"})
            return
        }
        res.status(200).send('data deleted succesfully')
      
    } catch (error) {
        res.status(500).json({msg:error})
    }
    }





module.exports = {taskController,getAllTask,addTask,getTask,updateTask,deleteTask}