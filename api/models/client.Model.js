import User from './user.Model';

class Client extends User {
  constructor(firstname, lastname, email, username, password) {
    super(firstname, email, username, password, lastname);
    this.type = 'client';
    this.accounts = [];
  }
}
export default Client;
