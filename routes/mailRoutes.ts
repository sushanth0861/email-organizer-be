import { Router } from 'express';
import { getAllMails } from '../controllers/mailController';

const router = Router();

// Route for fetching mails
router.get('/', getAllMails);

export default router;
