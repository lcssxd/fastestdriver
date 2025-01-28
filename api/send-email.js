import nodemailer from 'nodemailer';
import fetch from 'node-fetch'; // Para fazer requisições HTTP

const sendEmail = async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

  // Verificar se os campos obrigatórios estão preenchidos
  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios, incluindo o reCAPTCHA.' });
  }

  try {
    // Validação do reCAPTCHA com a API do Google
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    });

    const recaptchaData = await recaptchaResponse.json();

    // Verificar se o reCAPTCHA foi validado
    if (!recaptchaData.success) {
      return res.status(400).json({ message: 'Falha na validação do reCAPTCHA.' });
    }

    // Criar o transporte para envio de e-mails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Configurado na Vercel
        pass: process.env.EMAIL_PASS // Configurado na Vercel
      }
    });

    // Configurar as opções do e-mail
    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'luancesoares@gmail.com', // E-mail de destino
      subject: `Contato de ${name}`,
      text: message
    };

    // Enviar o e-mail
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info);

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
  }
};

export default sendEmail;
