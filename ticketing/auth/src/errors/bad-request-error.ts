import { CustomError } from '../errors/custom-error'

export class BadRequestError extends CustomError {
  statusCode: number = 400

  constructor(public message: string) {
    super(message)
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
