import { Router } from 'express';
import { getAllNews } from '../controllers/newsController';

const router = Router();

router.get('/news', getAllNews);

export default router;
