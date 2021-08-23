import { CustomError } from './custom-error'

export class DatabaseConnectionError extends CustomError {
  statusCode: number = 500
  reason: string = 'Error connecting to the database.'

  constructor() {
    super('Error connecting to the database.')
    // Only because we are extending a built in class
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype)
  }

  serializeErrors() {
    return [
      {
        message: this.reason
      }
    ]
  }
}
