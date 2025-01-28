import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Substitua se usar outro serviço
      auth: {
        user: process.env.EMAIL_USER, // Adicione no painel da Vercel
        pass: process.env.EMAIL_PASS  // Adicione no painel da Vercel
      }
    });

    // Configurar o e-mail a ser enviado
    const mailOptions = {
      from: email, // Quem enviou
      to: 'luancesoares@gmail.com', // Destinatário fixo
      subject: `Contato de ${nome}`,
      text: mensagem
    };

    // Enviar o e-mail
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.' });
  }
}
