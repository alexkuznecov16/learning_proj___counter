// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/Article'); // Подключаем модель статьи

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/my-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Эндпоинт для создания статьи
app.post('/articles', async (req, res) => {
    const { title, content } = req.body;

    const article = new Article({ title, content });

    try {
        await article.save();
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ error: 'Не удалось создать статью' });
    }
});

// Эндпоинт для получения списка всех статей
app.get('/articles', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Не удалось получить статьи' });
    }
});

// Эндпоинт для получения статьи по ID
app.get('/articles/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Article.findById(id);
        if (!article) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }
        res.json(article);
    } catch (error) {
        res.status(500).json({ error: 'Не удалось получить статью' });
    }
});

// Эндпоинт для обновления статьи по ID
app.put('/articles/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const article = await Article.findByIdAndUpdate(id, { title, content }, { new: true });

        if (!article) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }

        res.json(article);
    } catch (error) {
        res.status(500).json({ error: 'Не удалось обновить статью' });
    }
});

// Эндпоинт для удаления статьи по ID
app.delete('/articles/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const article = await Article.findByIdAndRemove(id);

        if (!article) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }

        res.json({ message: 'Статья удалена успешно' });
    } catch (error) {
        res.status(500).json({ error: 'Не удалось удалить статью' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
