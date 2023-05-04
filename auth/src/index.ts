// Import Libraries
import express from "express";
import { json } from "body-parser";

// Importing routes
import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signin";
import { signOutRouter } from "./routes/signout";
import { signUpRouter } from "./routes/signup";

// Middlewares
import { errorHandler } from "./middlewares/error-handlers";
// Creating express application
const app = express();

//body-parser
app.use(json());

// Adding the currentuserroutes
app.use(currentUserRouter);
app.use(signInRouter);
app.use(signOutRouter);
app.use(signUpRouter);

app.use(errorHandler);

app.listen(5001, () => console.log("Auth service listening on port 5001"));
