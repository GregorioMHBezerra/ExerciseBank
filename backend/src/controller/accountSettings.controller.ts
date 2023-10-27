import { Request, Response } from 'express';
import { accountSettingsService } from '../services';
import { mapError } from '../utils/errorMap';

const deleteAccount = async (req: Request, res: Response): Promise<Response> => { 
  const { inProgress } = req.query;
  
  const { type, data } = await accountSettingsService.deleteAccount();
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};


const changeAccount = async (req: Request, res: Response): Promise<Response> => {
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const { id } = req.params;
  const { type, data } = await accountSettingsService.changeAccount(
    Number(id),
    Number(awayTeamGoals),
    Number(homeTeamGoals),
  );
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};

export default {
  deleteAccount,
  changeAccount,
};
