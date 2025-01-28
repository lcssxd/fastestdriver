import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios, incluindo o reCAPTCHA.' });
  }

  // Validação do reCAPTCHA v3
  try {
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    });

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return res.status(400).json({ message: 'Falha na validação do reCAPTCHA.' });
    }

    // Prosseguir com o envio do e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'luancesoares@gmail.com',
      subject: `Contato de ${name}`,
      text: message
    };

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
  }
}
