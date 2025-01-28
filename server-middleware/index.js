import express from 'express';
import sendEmail from '../api/send-email.js'; // Importa o handler da API

const app = express();

// Middleware para lidar com JSON
app.use(express.json());

// Endpoint para enviar e-mails
app.post('/api/send-email', sendEmail);

export default app;
