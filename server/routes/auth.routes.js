import express from 'express';
const router = express.Router();
import { loginController, registerController, testController } from "../controllers/auth.controller.js";
import { isAdmin, requireSignIn } from '../middlewares/auth.middleware.js';

//Register route

router.post('/register', registerController)
router.post('/login', loginController);

router.get('/test', requireSignIn, isAdmin, testController)

export default router;