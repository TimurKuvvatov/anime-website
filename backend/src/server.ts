import express from 'express';
import cors from 'cors';
import routes from './routes/route';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
