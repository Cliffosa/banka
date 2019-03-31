import User from '../models/user.Model';

class Admin extends User {
  constructor(firstname, lastname, email, username, password) {
    super(firstname, email, username, password, lastname);
    this.type = 'admin';
    this.isAdmin = true;
  }
}
export default Admin;
