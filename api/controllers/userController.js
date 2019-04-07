import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import secret from '../utils/jwt';
import UserServices from '../services/userServices';
import data from '../utils/data/user';

class UsersController {
  async registerUser(req, res) {
    try {
      const userData = req.body;
      const existUser = await data.users.find(user => user.email === userData.email);
      if (existUser) {
        throw new Error('User With That Email Already Exist');
      }
      const safeUser = await UserServices.createUser(userData);
      const hashedPass = await bcrypt.hash(userData.password, 10);
      safeUser.password = hashedPass;
      const createdUser = {
        id: safeUser.id,
        firstname: safeUser.firstname,
        lastname: safeUser.lastname,
        email: safeUser.email,
        type: safeUser.type,
        isAdmin: safeUser.isAdmin
      };
      const ONE_WEEK = 60 * 60 * 24 * 7;
      const jwtTokenkey = await jwt.sign({ user: createdUser }, secret, {
        expiresIn: ONE_WEEK
      });
      createdUser.token = jwtTokenkey;

      return res.status(201).json({
        status: 201,
        data: createdUser,
        message: 'User Account  Created Successfully.'
      });
    } catch (error) {
      return res.status(500).json({
        status: 404,
        message: error.message
      });
    }
  }
}
const UserController = new UsersController();
export default UserController;
