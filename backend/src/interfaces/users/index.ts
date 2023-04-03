export interface IUserRequest {
  name: string;
  email: string;
  telephone: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  createdAt: Date;

}

export interface IUserLogin {
  email: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  telephone?: string;
}
