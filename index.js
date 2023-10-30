const connectDB = require('./DB/connect')
const express = require('express')
const {Taskrouter} = require('./routes/taskRoutes')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use('/',Taskrouter)

const startApp=async()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('Connected to database');
        app.listen(3000,()=>{
            console.log('server running on port 3000');
        })
        
    } catch (error) {
        console.log(error);
    } 
}



startApp()