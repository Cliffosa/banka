import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.post('/api/v1/auth/signup', UserController.registerUser);

// user route
router.get('/api/v1/users', UserController.fetchAllUsers);
router.get('/api/v1/users/:id', UserController.fetchSingleUser);
router.put('/api/v1/users/:id', UserController.updateUser);
router.delete('/api/v1/users/:id', UserController.deleteUser);

export default router;
