import { Request, Response } from 'express';
import { signupService } from '../services';
import { mapError } from '../utils/errorMap';

const createAccount = async (req: Request, res: Response): Promise<Response> => {
  const { type, data } = await signupService.createAccount();
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json({ oi: data });
};

export default {
  createAccount, 
};
