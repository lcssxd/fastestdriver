import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

const validateRecaptchaEnterprise = async (recaptchaToken) => {
  const apiKey = process.env.RECAPTCHA_API_KEY; // Adicione sua API Key aqui
  const projectId = process.env.RECAPTCHA_PROJECT_ID; // ID do projeto no Google Cloud
  const siteKey = process.env.RECAPTCHA_SITE_KEY; // Site Key configurada

  const response = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: {
          token: recaptchaToken,
          siteKey: siteKey,
          expectedAction: 'submit' // Ação definida no frontend
        }
      })
    }
  );

  const data = await response.json();
  return data.tokenProperties?.valid && data.riskAnalysis?.score > 0.5; // Apenas aprova se o score for maior que 0.5
};

export default async function handler(req, res) {
  const { name, email, message, recaptchaToken } = req.body;

  if (!name || !email || !message || !recaptchaToken) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Validação do reCAPTCHA Enterprise
  const isValidRecaptcha = await validateRecaptchaEnterprise(recaptchaToken);

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

    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar o e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar o e-mail.', error: error.message });
  }
}
