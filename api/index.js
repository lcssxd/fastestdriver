import express from 'express';
import sendEmail from './send-email'; // Corrija o caminho se necessário

const app = express();

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Rota para enviar e-mails
app.post('/api/send-email', sendEmail);

export default app;
