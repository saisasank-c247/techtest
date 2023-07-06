
import { BaseUser, User } from "./user.interface";
import { Users } from "./users.interface";

const users: Users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  },
  {
    id: 2,
    name: "Smith",
    email: "smith@gmail.com",
  },
  {
    id: 3,
    name: "Chris",
    email: "chris@gmail.com",
  },
  {
    id: 4,
    name: "Jack",
    email: "jack@gmail.com",
  },
];

export const findAll = async (): Promise<User[]> => Object.values(users);

export const find = async (id: number): Promise<User> => users[id];

export const create = async (newUser: BaseUser): Promise<User> => {
  const id = new Date().valueOf();

  users[id] = {
    id,
    ...newUser,
  };

  return users[id];
};

export const update = async (
  id: number,
  userUpdate: BaseUser
): Promise<User | null> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  users[id] = { id, ...userUpdate };

  return users[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id);

  if (!user) {
    return null;
  }

  delete users[id];
};
