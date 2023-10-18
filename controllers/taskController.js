const Task = require('../models/Tasks');

const getTasks = async (req, res) => {
        try {
            const tasks = await Task.find({});
            res.status(200).json({tasks});
        } catch (error) {
            res.status(500).json({message: error.message})
            
        }
}

const createTask = async (req, res) => {
    
    try {
        const {name} = req.body;
        const task = await Task.create({
            name,
        })
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task) {
            res.status(404).json({msg: `No task with id ${taskID}`});
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({error: error.message})
    }   
}

const updateTask = async (req, res) => {
    try {
        const {id:taskID} = re.params;
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{
                new: true, 
            runValidators: true
        });
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${taskID}`});
        }

        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
    res.send('update task');
}

const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            res.status(404).json({msg: `No task with id: ${taskID}`});
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({error: error.message});    
    }
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}