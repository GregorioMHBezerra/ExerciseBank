import * as express from 'express';

import signupRouter from './signup.router';
import accountHomeRouter from './accountHome.router';
import accountSettingsRouter from './accountSettings.router';
import loginRouter from './login.router';
// import healthRouter from './health.router';

const router = express.Router();

router.use('/signup', signupRouter);
router.use('/home', accountHomeRouter);
router.use('/settings', accountSettingsRouter);
router.use('/login', loginRouter);
// router.use('/health', healthRouter);

export default router;
