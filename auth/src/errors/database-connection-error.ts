export class DatabaseConnectionError extends Error {
  reason = "Error connecting to database";
  constructor() {
    super();

    // Since we are extending builtin Class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
