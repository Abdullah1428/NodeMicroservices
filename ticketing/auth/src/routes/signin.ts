import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import { validateRequest } from '../middlewares/validate-request'
import { User } from '../models/user'
import { BadRequestError } from '../errors/bad-request-error'

const router = express.Router()

router.post(
  '/api/users/signin',
  [
    body('email')
      .isEmail()
      .withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send('Hi there')
  }
)

export { router as signinRouter }
