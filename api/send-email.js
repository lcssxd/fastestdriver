import nodemailer from 'nodemailer';

const sendEmail = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Configurado na Vercel
        pass: process.env.EMAIL_PASS // Configurado na Vercel
      }
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: 'luancesoares@gmail.com', // E-mail de destino
      subject: `Contato de ${name}`,
      text: message
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info);

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
  }
};

export default sendEmail;
