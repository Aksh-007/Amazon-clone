import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/dbConnection.js'
import morgan from 'morgan';
import userRoutes from './routes/auth.routes.js';
import initialRoutes from './routes/initial.routes.js'
const app = express();
dotenv.config();
dbConnection();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// Api 
app.use('/api/v1/auth', userRoutes)

app.use('/api/v1', initialRoutes)

export default app;