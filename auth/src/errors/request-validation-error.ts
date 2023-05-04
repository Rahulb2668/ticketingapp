import { ValidationError } from "express-validator";

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Since we are extending builtin Class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
