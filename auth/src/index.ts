// Import Libraries
import express from "express";
import { json } from "body-parser";
import "express-async-errors";
// Importing routes
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";

// Middlewares
import { errorHandler } from "./middlewares/error-handlers";
import { NotFoundError } from "./errors/not-found-error";
// Creating express application
const app = express();

//body-parser
app.use(json());

// Adding the currentuserroutes
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);
app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(5001, () => console.log("Auth service listening on port 5001"));
