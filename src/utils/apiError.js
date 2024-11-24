class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong", // default message"
    errors = [],
    stack = ""
  ) {
    super(message); // call the super class constructor
    (this.statusCode = statusCode),
      (this.data = null),
      (this.message = message),
      (this.success = false),
      (this.errors = errors);

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
