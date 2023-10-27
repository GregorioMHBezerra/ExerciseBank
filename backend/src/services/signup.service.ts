import { ServiceResponse } from '../types/ServiceResponse';
import MatchesModel from '../database/models/MatchesModel';
import Matches from '../Interfaces/Matches';
import teamsService from './teams.service';
import TeamsModel from '../database/models/TeamsModel';

const verifyExistUser = async (id1: number, id2: number):
Promise<ServiceResponse<{ message: string }>> => {
  const { type } = await teamsService.findOne(id1);
  const { type: type2 } = await teamsService.findOne(id2);
  if (type || type2) {
    return {
      type: 'PACKAGE_NOT_FOUND',
      data: { message: 'There is no team with such id!' } };
  }
  return { type: null, data: { message: 'OK' } };
};

const createAccount = async (
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
): Promise<ServiceResponse<Matches>> => {
  if (homeTeamId === awayTeamId) {
    return {
      type: 'UNPROCESSABLE',
      data: { message: 'It is not possible to create a match with two equal teams' } };
  }
  const { type, data } = await verifyExistUser(homeTeamId, awayTeamId);
  if (type) return { type, data };

  const created = await MatchesModel.create({ homeTeamId,
    awayTeamId,
    homeTeamGoals,
    awayTeamGoals,
    inProgress: true });

  return { type: null, data: created.dataValues };
};

export default { createAccount };
