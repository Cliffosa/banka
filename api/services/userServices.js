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
}
const UserServices = new UsersServices();
export default UserServices;
