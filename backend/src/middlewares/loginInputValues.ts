import { NextFunction, Request, Response } from 'express';

const loginInputValues = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { email, password } = req.body;
  return (!email || !password)
    ? res.status(400).json({ message: 'All fields must be filled' })
    : next();
};

export default loginInputValues;
