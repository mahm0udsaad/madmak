import { Resend } from 'resend';

export interface EmailData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const resendApiKey = import.meta.env.RESEND_API_KEY || import.meta.env.VITE_RESEND_API_KEY;
  
  if (!resendApiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  const resend = new Resend(resendApiKey);
  
  const { name, phone, email, message } = data;
  
  const emailContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email || 'Not provided'}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `;

  const result = await resend.emails.send({
    from: 'onboarding@resend.dev', // Update this to your verified domain in Resend
    to: 'madmakvision@gmail.com',
    subject: 'Website message',
    html: emailContent,
  });

  return result;
}
