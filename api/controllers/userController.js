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
  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const existUser = await data.users.filter(
        user => user.email === email && user.password === password
      );
      //console.log(existUser);
      if (!existUser) {
        throw new Error('User with that email does not exist');
      }
      const result = await bcrypt.compare(password, user.password);
      if (!result) {
        throw new Error('Login information does not match our records');
      }

      const ordinaryUser = {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        type: user.type,
        isAdmin: user.isAdmin
      };
      //create token and its expiration
      const ONE_WEEK = 60 * 60 * 24 * 7;
      const jwtTokenkey = await jwt.sign({ user: ordinaryUser }, secret, {
        expiresIn: ONE_WEEK
      });
      ordinaryUser.token = jwtTokenkey;
      return res.status(200).json({
        status: 'success',
        message: 'Login Successfully',
        data: ordinaryUser
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message
      });
    }
  }

  async fetchAllUsers(req, res) {
    const allUsers = await UserServices.getAllUsers();
    allUsers.map(pass => {
      Object.defineProperty(pass, 'password', {
        enumerable: false,
        writable: true
      });
    });
    return res.status(200).json({
      status: 200,
      data: allUsers,
      message: 'Users Fetched Successfully'
    });
  }
  async fetchSingleUser(req, res) {
    let found = false;
    const id = parseInt(req.params.id);
    await data.users.map(user => {
      if (user.id === id) {
        found = true;
        return res.status(200).send({
          success: 200,
          message: 'User With the ID retrieved successfully',
          data: user
        });
      }
    });
    if (!found) {
      return res.status(404).send({
        success: 404,
        message: 'User with that ID does not exist'
      });
    }
  }
  async updateUser(req, res) {
    const id = parseInt(req.params.id);
    let userFound;
    let userIndex;
    await data.users.map((user, index) => {
      if (user.id === id) {
        userFound = user;
        userIndex = index;
      }
    });
    if (!userFound) {
      return res.status(404).send({
        success: 404,
        message: 'User not found'
      });
    }
    const newUser = {
      id: userFound.id,
      firstname: req.body.firstname || userFound.firstname,
      lastname: req.body.lastname || userFound.lastname,
      email: req.body.email || userFound.email,
      type: req.body.type || userFound.type,
      isAdmin: req.body.isAdmin || mealFound.isAdmin
    };
    await data.users.splice(userIndex, 1, newUser);
    return res.status(201).send({
      success: 201,
      message: 'User updated successfully',
      newUser
    });
  }
  async deleteUser(req, res) {
    const id = parseInt(req.params.id);
    let userFound;
    let userItem;
    await data.users.map((user, index) => {
      if (user.id === id) {
        userFound = user;
        userItem = index;
      }
    });
    if (!userFound) {
      return res.status(404).send({
        success: 404,
        message: 'User not found'
      });
    }
    await data.users.splice(userItem, 1);
    return res.status(200).send({
      success: 200,
      message: 'User deleted successfuly'
    });
  }
}
const UserController = new UsersController();
export default UserController;
