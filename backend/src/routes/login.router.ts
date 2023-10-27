import * as express from 'express';

import { loginController } from '../controller';

import { loginInputValues, tokenValidation } from '../middlewares';

const router = express.Router();

router.post('/', loginInputValues, loginController.login);

export default router;
