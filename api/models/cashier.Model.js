import User from './user.Model';

class Cashier extends User {
  constructor(firstname, lastname, email, username, password) {
    super(firstname, email, username, password, lastname);
    this.type = 'cashier';
    this.isAdmin = true;
  }
}
export default Cashier;
