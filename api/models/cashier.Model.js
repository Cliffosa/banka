import User from '../models/user.Model';

class Cashier extends User {
  constructor(firstname, lastname, email, username, password) {
    super(firstname, email, username, password, lastname);
    this.type = 'cashier';
    this.isAdmin = true;
  }
}
module.exports = Cashier;
