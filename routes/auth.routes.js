import express from 'express';
const router = express.Router();
import { registerController } from "../controllers/auth.controller.js";

//Register route
    router.post('/register', registerController)

export default router;