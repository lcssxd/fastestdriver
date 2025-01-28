import nodemailer from 'nodemailer';
import fetch from 'node-fetch';

const validateRecaptcha = async (recaptchaToken) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${recaptchaToken}`
  });

  const data = await response.json();
  return data.success;
};

export default async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const isValidRecaptcha = await validateRecaptcha(recaptchaToken);

  if (!isValidRecaptcha) {
    return res.status(400).json({ message: 'Falha na validação do reCAPTCHA.' });
  }

  try {
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

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
  }
};
