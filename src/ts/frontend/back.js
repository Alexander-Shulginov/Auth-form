const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware для обработки данных формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обслуживание статических файлов из директории public
app.use(express.static('./src/'));

// Маршрут для обработки данных формы
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    console.log('Полученные данные формы:', formData);

  // Отправляем ответ клиенту
    res.json({ message: 'Данные успешно получены', data: formData });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
