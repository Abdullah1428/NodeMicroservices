import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

import { RequestValidationError } from '../errors/request-validation-error'

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errros = validationResult(req)

  if (!errros.isEmpty()) {
    throw new RequestValidationError(errros.array())
  }

  next()
}
