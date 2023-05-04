import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof RequestValidationError) {
    const formattedError = err.errors.map((e) => {
      return { message: e.msg, field: e.type === "field" && e.path };
    });
  }

  if (err instanceof DatabaseConnectionError) {
    console.log("Handing as dbce");
  }
  res.status(400).send({
    message: "Something went wrong",
  });
};
