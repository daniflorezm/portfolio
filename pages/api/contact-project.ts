import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Resend API key not configured' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio <no-reply@resend.dev>',
      to: 'greenfourtech@gmail.com',
      subject: 'Nuevo interesado en tu portfolio',
      html: `<p>Nuevo correo interesado: <b>${email}</b></p>`
    });
    if (data.error) {
      throw new Error(data.error.message || 'Error enviando el correo');
    }
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message || 'Error enviando el correo' });
  }
}
