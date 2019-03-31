import User from '../models/user.Model';

class Client extends User {
  constructor(firstname, lastname, email, username, password) {
    super(firstname, email, username, password, lastname);
    this.type = 'client';
    this.accounts = [];
  }
}
module.exports = Client;
