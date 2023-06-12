import express from 'express';
const router = express.Router();
import { initialController } from '../controllers/initial.controller.js';

router.get('/', initialController);

export default router;