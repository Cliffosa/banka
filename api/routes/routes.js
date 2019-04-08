import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/api/v1/auth/signup', UserController.registerUser);
// user route
router.get('/api/v1/users', UserController.fetchAllUsers);

export default router;
