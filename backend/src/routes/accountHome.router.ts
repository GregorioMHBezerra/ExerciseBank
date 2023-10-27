import * as express from 'express';

import { accountHomeController } from '../controller';

import { tokenValidation } from '../middlewares';

const router = express.Router();

router.get('/', accountHomeController.findAll);
router.post('/', tokenValidation, accountHomeController.insertTransaction);
router.patch('/', tokenValidation, accountHomeController.insertCashbackToTransaction);


export default router;
