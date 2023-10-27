import { Request, Response } from 'express';
import { accountHomeService } from '../services';
import { mapError } from '../utils/errorMap';

const findAll = async (req: Request, res: Response): Promise<Response> => {
  const { inProgress } = req.query;

  const { type, data } = await accountHomeService.findAll();
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};


const insertCashbackToTransaction = async (req: Request, res: Response): Promise<Response> => {
  const { homeTeamGoals, awayTeamGoals } = req.body;
  const { id } = req.params;
  const { type, data } = await accountHomeService.insertCashbackToTransaction(
    Number(id),
    Number(awayTeamGoals),
    Number(homeTeamGoals),
  );
  return (type) 
    ? res.status(mapError(type)).json(data)
    : res.status(200).json(data);
};

const insertTransaction = async (req: Request, res: Response): Promise<Response> => {
  const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = req.body;

  const { type, data } = await accountHomeService.insertTransaction(
    Number(homeTeamId),
    Number(awayTeamId),
    Number(homeTeamGoals),
    Number(awayTeamGoals),
  );
  return (type)
    ? res.status(mapError(type)).json(data)
    : res.status(201).json(data);
};

export default {
  findAll,
  insertCashbackToTransaction,
  insertTransaction,
};
