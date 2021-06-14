import express from 'express';

import SendMail from '../../controllers/email/emailController';

const router = express.Router();

router.post('/', SendMail);

export default router;
