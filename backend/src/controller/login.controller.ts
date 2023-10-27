import { Request, Response } from 'express';
import { loginService } from '../services';
import { mapError } from '../utils/errorMap';

const login = async (req: Request, res: Response): Promise<Response> => {
  const { email, password } = req.body;

  const { type, data } = await loginService.login({ email, password });
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};

const role = async (req: Request, res: Response): Promise<Response> => {
  const { id } = res.locals.user;

  const { type, data } = await loginService.role(Number(id));
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};

export default {
  login,
  role, 
};
