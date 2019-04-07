import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/api/v1/auth/signup', UserController.registerUser);

export default router;
