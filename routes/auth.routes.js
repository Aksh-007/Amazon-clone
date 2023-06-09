import express from 'express';
const router = express.Router();
import { loginController, registerController } from "../controllers/auth.controller.js";
    
//Register route

router.post('/register', registerController)
router.post('/login', loginController)

export default router;