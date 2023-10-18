const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const tasksRouter = require('./routes/tasks');
const colors = require('colors');
const connectDB = require('./config/db');


dotenv.config();

connectDB();

const port = process.env.PORT || 3001;

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    });

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/tasks', tasksRouter);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
