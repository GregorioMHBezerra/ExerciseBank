import * as express from 'express';

import { signupController } from '../controller';

import { tokenValidation } from '../middlewares';

const router = express.Router();

router.post('/', tokenValidation, signupController.createAccount);

export default router;
