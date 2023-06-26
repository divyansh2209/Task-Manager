const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
const bodyParser = require('body-parser');

require('dotenv').config()

app.use(express.static('./public'))

app.use(bodyParser.json());

app.use('/api/v1/tasks' , tasks)

const port = 3000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port , console.log(`server is listening on port ${port}`));
    } catch (error) {
        console.log(error)
    }
}

start()