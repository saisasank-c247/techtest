export interface BaseUser {
  name: string;
  email: string;
}

export interface User extends BaseUser {
  id: number;
}
