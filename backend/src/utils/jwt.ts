import * as jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/Login';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '59m',
};

const secret = process.env.JWT_SECRET || 'secret';

const jwtCreateToken = (payload: TokenPayload): string =>
  jwt.sign(payload, secret, jwtConfig);

const jwtCompareToken = (token: string): TokenPayload => jwt.verify(token, secret) as TokenPayload;

export {
  jwtCreateToken,
  jwtCompareToken,
};
