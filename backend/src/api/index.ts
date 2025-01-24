// backend/src/api/index.js

import express from 'express';
import cors from 'cors';
import router from '../routes/route';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
);

app.use('/api', router);
app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; script-src 'self'; style-src 'self';",
    );
    next();
});

export default app;
