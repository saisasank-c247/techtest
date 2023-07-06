
import express, { Request, Response } from "express";
import * as UsersService from "./users.service";
import { BaseUser, User } from "./user.interface";

export const usersRouter = express.Router();

// GET users

usersRouter.get("/", async (req: Request, res: Response) => {
  try {
    const users: User[] = await UsersService.findAll();

    res.status(200).send(users);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// GET users/:id

usersRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const user: User = await UsersService.find(id);

    if (user) {
      return res.status(200).send(user);
    }

    res.status(404).send("item not found");
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// POST users

usersRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: BaseUser = req.body;

    const newItem = await UsersService.create(item);

    res.status(201).json(newItem);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// PUT users/:id

usersRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const userUpdate: User = req.body;

    const existingUser: User = await UsersService.find(id);

    if (existingUser) {
      const updatedUser = await UsersService.update(id, userUpdate);
      return res.status(200).json(updatedUser);
    }

    const newUser = await UsersService.create(userUpdate);

    res.status(201).json(newUser);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});

// DELETE users/:id

usersRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await UsersService.remove(id);

    res.sendStatus(204);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
