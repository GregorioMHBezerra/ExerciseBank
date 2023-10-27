import * as express from 'express';

import { accountSettingsController } from '../controller';

import { tokenValidation } from '../middlewares';

const router = express.Router();

router.patch('/:id/finish', tokenValidation, accountSettingsController.changeAccount);
router.delete('/', tokenValidation, accountSettingsController.deleteAccount);

export default router;
