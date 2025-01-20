import express from 'express';
import cors from 'cors';
import routes from './routes/route'; // Импортируем маршруты
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
