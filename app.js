import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'
import morgan from 'morgan';
import userRouter from './routes/auth.routes.js';
const app = express();
dotenv.config();
dbConnection();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// Api 
app.use('/api/v1/auth', userRouter)

app.get('/api/v1', (req, res) => {
    res.send(`<h1>App is working </h1>`)
})

export default app;