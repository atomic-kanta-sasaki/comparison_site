export class CustomErrorHandler extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    // Set the prototype explicitly (only required if target is ES5 or lower)

    Object.setPrototypeOf(this, CustomErrorHandler.prototype);

  }
}