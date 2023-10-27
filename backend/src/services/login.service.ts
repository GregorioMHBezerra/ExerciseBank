import * as bcrypt from 'bcryptjs';
import schema from './validations/validationsInputValues';
import UsersModel from '../database/models/UsersModel';
import { Login, Role, Token } from '../types/Login';
import { ServiceResponse } from '../types/ServiceResponse';
import { jwtCreateToken } from '../utils/jwt';

const login = async ({ email, password }:Login): Promise<ServiceResponse<Token>> => {
  const { type, message } = schema.validateLogin({ email, password });
  if (type) return { type, data: { message } };

  const userExist = await UsersModel.findOne({ where: { email } });

  if (!userExist || !bcrypt.compareSync(password, userExist.dataValues.password)) {
    return { type: 'UNAUTHORIZED',
      data: { message: 'Invalid email or password' } };
  }

  const token = jwtCreateToken({ email,
    id: userExist.dataValues.id });

  return { type: null, data: { token } };
};

const role = async (id: number): Promise<ServiceResponse<Role>> => {
  const userExist = await UsersModel.findOne({ where: { id } });

  if (!userExist) {
    return { type: 'INVALID_DATA',
      data: { message: 'Invalid email or password' } };
  }

  return { type: null, data: { role: userExist.dataValues.role } };
};

export default { login, role };
