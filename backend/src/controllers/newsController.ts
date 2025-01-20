import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllNews = async (req: Request, res: Response) => {
    try {
        const news = await prisma.news.findMany();
        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ошибка при получении новостей' });
    }
};
