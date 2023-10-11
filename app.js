const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const tasksRouter = require('./routes/tasks');

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    });

app.use(express.json());

app.use('/api/v1/tasks', tasksRouter);
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
    }
);
