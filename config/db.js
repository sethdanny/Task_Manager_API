const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGO_URI, 
            {dbName: "task_manager",
            useNewUrlParser: true ,
            useUnifiedTopology: true }
            );
        console.log(`Database Connected at ${conn.connection.host}`.underline.red);  
    } catch (error) {
        console.log(error.message);   
    }
}

module.exports = connectDB