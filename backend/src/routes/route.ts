import { Router } from 'express';
import { createNews, getAllNews } from '../controllers/newsController';

const router = Router();

router.get('/news', getAllNews);

router.post('/news', createNews);

export default router;
