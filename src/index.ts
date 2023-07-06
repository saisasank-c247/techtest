/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import { usersRouter } from "./users/users.router";
import { memoize, toRoman } from "./utils";

const app = express();

const PORT = 7000;

/**
 *  App Configuration
 */

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);

// console.log(memoize((a: number, b:number) => a + b)(3, 4), 'memoizer')
const memoizedFibonacci = memoize(toRoman);
console.log(memoizedFibonacci(55))
console.log(memoizedFibonacci(55))
console.log(memoizedFibonacci(25))
/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
