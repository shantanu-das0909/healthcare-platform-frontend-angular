export class User {
  constructor(
    public userId: String,
    public email: string,
    public role: string,
    public jwtToken: string
  ) {}
}
