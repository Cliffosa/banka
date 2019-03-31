class User {
  constructor(firstname, lastname, email, username, password) {
    this.id = 0 || null;
    this.firstname = firstname || null;
    this.lastname = lastname || null;
    this.email = email || null;
    this.username = username || null;
    this.password = password || null;
    this.displayImage = '';
    this.isAdmin = false;
  }
}
export default User;
