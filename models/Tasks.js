const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    name: {
        type: String,
        required: [true, 'name must be provided'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    },
    completed: Boolean

}, {timestamps: true})

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;