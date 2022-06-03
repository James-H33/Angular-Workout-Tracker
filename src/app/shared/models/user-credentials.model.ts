export class UserCredentials {
  public username: string;
  public password: string;

  constructor(username?: string, password?: string) {
    this.username = username || '';
    this.password = password || '';
  }

  public isValid() {
    return !!this.username && !!this.password;
  }
}
