import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

// register and signIn route
router.post('/api/v1/auth/signup', UserController.registerUser);
router.post('/api/v1/auth/signin', UserController.loginUser);

// user route
router.get('/api/v1/users', UserController.fetchAllUsers);
router.get('/api/v1/users/:id', UserController.fetchSingleUser);
router.put('/api/v1/users/:id', UserController.updateUser);
router.delete('/api/v1/users/:id', UserController.deleteUser);

export default router;
