import { Router } from 'express';
import { getAllNews } from '../controllers/newsController';

const router = Router();

router.get('/news', (req, res) => {
    console.log('Запрос к /api/news');
    getAllNews(req, res);
});

export default router;
