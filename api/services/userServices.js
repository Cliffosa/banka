import data from '../utils/data/user';
import User from '../models/userModel';

class UsersServices {
  async createUser(userinfo) {
    const userLength = data.users.length;
    const lastId = await data.users[userLength - 1].id;
    const id = lastId + 1;
    userinfo.id = id;
    data.users.push(userinfo);
    return userinfo;
  }
  async getAllUsers() {
    const allUsers = await data.users.map(user => {
      const createdUser = new User();
      createdUser.id = user.id;
      createdUser.firstname = user.firstname;
      createdUser.lastname = user.lastname;
      createdUser.email = user.email;
      createdUser.password = user.password;
      createdUser.type = user.type;
      createdUser.isAdmin = user.isAdmin;
      return createdUser;
    });
    return allUsers;
  }
}
const UserServices = new UsersServices();
export default UserServices;
