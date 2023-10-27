import { NextFunction, Request, Response } from 'express';
import { jwtCompareToken } from '../utils/jwt';

const tokenValidation = (req: Request, res: Response, next: NextFunction): Response | void => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const data = token.split(' ');
    const userIfExist = jwtCompareToken(data[1]);
    res.locals.user = userIfExist;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default tokenValidation;
