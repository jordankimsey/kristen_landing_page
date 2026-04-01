import type { NextApiRequest, NextApiResponse } from 'next';

import { Resend } from 'resend';
import AdCodeRequestEmail from '../../emails/ad-code/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function send(req: NextApiRequest, res: NextApiResponse) {
  const { videoLinks, details } = req.body;

  console.log(req.body);
  const { data, error } = await resend.emails.send({
    from: 'Ad Code Requests <onboarding@resend.dev>',
    to: ['jordankimsey@gmail.com', 'kristensvintagehome@gmail.com'],
    subject: 'Ad Code Request',
    react: await AdCodeRequestEmail({ videoLinks, details }),
  });
  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
}
