/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import { usersRouter } from "./users/users.router";
import { memoize, toRoman } from "./utils";

const app = express();

const PORT = 7000;

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

const memoizedFunction = memoize(toRoman);
console.log(memoizedFunction(55))
console.log(memoizedFunction(55))
console.log(memoizedFunction(25))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
