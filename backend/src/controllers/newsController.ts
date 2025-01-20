import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getAllNews = async (req: Request, res: Response) => {
    try {
        const news = await prisma.news.findMany();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при получении новостей' });
    }
};


export const createNews = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    try {
        const newNews = await prisma.news.create({
            data: { title, content },
        });
        res.status(201).json(newNews);
    } catch (error) {
        res.status(500).json({ error: 'Ошибка при создании новости' });
    }
};
