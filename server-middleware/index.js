import express from 'express';
import sendEmail from '../api/send-email'; // Importe o handler da API

const app = express();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Rota de API para enviar e-mails
app.post('/send-email', sendEmail);

export default app;
