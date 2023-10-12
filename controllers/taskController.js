const getTasks = async (req, res) => {
        res.send('get all tasks')
}

const createTask = async (req, res) => {
    res.send('Create task');
}

const getTask = async (req, res) => {
    res.send('get a single task')
}

const updateTask = async (req, res) => {
    res.send('update task');
}

const deleteTask = async (req, res) => {
    res.send('delete task');
}

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}